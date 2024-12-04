import { useSearchParams } from 'react-router-dom';
import { useActions } from './useActions';
import { useWebSocket } from '../api/socket/useWebSocket';
import { useEffect } from 'react';
import { Role } from '../constants/roles.constants';
import { getAccessToken, getUserIdFromStorage } from '../api/http/auth.helper';
import api from '../api/http/api';
import { parseUserData } from '../utils/user';
import { useLessonId } from './lessons';
import { useAccount } from './account';

export const useConnection = () => {
    //console.log('useConnection');
    const [searchParams] = useSearchParams();
    const { setMultiplayer, setAccountData } = useActions();
    const { connect } = useWebSocket();
    const account = useAccount();

    useEffect(() => {
        if (account.role === Role.None) {
            return;
        }

        console.log('account', account);

        const token = getAccessToken();
        const room = searchParams.get('lesson');
        const mode = searchParams.get('mode');

        if (room) {
            sessionStorage.setItem('ROOM', room);
        }
        if (token && room) {
            setMultiplayer(true);
            connect();
        } else if (
            (!token && !sessionStorage.getItem('ROOM')) ||
            mode === 'offline'
        ) {
            setMultiplayer(false);
        }
        if (mode === 'offline') {
            sessionStorage.clear();
        }
    }, [account.role]);

    const id = useLessonId();

    useEffect(() => {
        //console.log('1');
        if (!id) {
            return;
        }
        //console.log('2');

        api.getUserData(id).then((data: any) => {
            console.log('data', data);
            const teacher = parseUserData(data.teacher_id.user_id);
            const students: any[] = data.students.map((student: any) =>
                parseUserData(student.student_id.user_id)
            );
            let role;
            let me;
            if (getUserIdFromStorage() === teacher.id) {
                role = Role.Teacher;
                me = teacher;
            } else {
                role = Role.Student;
                me = students.find(
                    (student) => student.id === getUserIdFromStorage()
                );
            }
            console.log('ACCOUNT_DATA', { teacher, students, me, role });
            setAccountData({ teacher, students, me, role });
        });
    }, [id]);
};
