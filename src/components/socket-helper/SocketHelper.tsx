import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';
import { Notification } from '../notification/Notification';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsOnReady } from '../../api/socket/useWsReady';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { WsSystemAction } from '../../api/socket/constants';
import { useLessonId, useLessonSwitcher } from '../../hooks/lessons';
import {
    getAccessToken,
    getUserIdFromStorage,
} from '../../api/http/auth.helper';
import { Role } from '../../constants/roles.constants';
import api from '../../api/http/api';
import { parseUserData } from '../../utils/user';

export const SocketHelper = () => {
    const {
        showNotification,
        setReady,
        addUserCount,
        addNewSetting,
        setPageStatus,
        clearResult,
        clearSettings,
        clearStorage,
        setGameName,
        setLessonMode,
    } = useActions();
    const { role, userCount } = useAccount();
    const selectLesson = useLessonSwitcher();
    const { sendAction } = useWebSocket();
    const multiPlayer = useTypedSelector(
        (store) => store.accountData.multiPlayer
    );

    const { setMultiplayer, setAccountData, setRole, setExternalSettings } =
        useActions();
    const { connect } = useWebSocket();

    const room = useLessonId();

    const getAccount = () => {
        return api
            .getUserData(room)
            .then((data: any) => {
                console.log('data', data);
                const teacher = parseUserData(data.group_id.teacher_id.user_id);
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
            })
            .catch();
    };

    useEffect(() => {
        console.log('room', room);
        if (!room) {
            setMultiplayer(false);
            setRole(Role.Teacher);
            return;
        } else {
            getAccount().then(() => {
                const token = getAccessToken();

                console.log('lesson', room, 'token', token);

                if (token && room) {
                    setMultiplayer(true);
                    connect(room.toString());
                }
            });
        }
        //console.log('2');
    }, [room]);

    useWsAction((name, params = {}) => {
        switch (name) {
            case WsSystemAction.UserEnter:
                addUserCount();
                break;
            case WsSystemAction.Ready:
                setReady(true);
                break;
            case WsSystemAction.GotoGame:
                clearResult();
                clearSettings();
                clearStorage();
                setPageStatus('settings');
                setLessonMode('game');
                setGameName(params.game);
                break;
            case WsSystemAction.SetMode:
                setLessonMode(params.mode);
                break;
            case WsSystemAction.GameStatus:
                setPageStatus(params.status);
                break;
            case WsSystemAction.Settings:
                addNewSetting({ [params.reduxKey]: params.value });
                break;
            case WsSystemAction.SelectLesson:
                selectLesson(params.index);
                break;
            case WsSystemAction.SetAccessSettings:
                setExternalSettings({
                    interface: params.interface,
                    video: params.video,
                });
                break;
        }
    });

    useEffect(() => {
        /*console.log(
            'READY',
            Number(import.meta.env.VITE_PREVENT_READY),
            !multiPlayer,
            userCount >= Number(import.meta.env.VITE_USER_COUNT)
        );*/
        if (
            Number(import.meta.env.VITE_PREVENT_READY) ||
            !multiPlayer ||
            userCount >= Number(import.meta.env.VITE_USER_COUNT)
        ) {
            sendAction(WsSystemAction.Ready);
        }
    }, [userCount, multiPlayer]);

    const settings = useTypedSelector((state) => state.settingsData);

    useWsOnReady(() => {
        if (isTeacher(role) && multiPlayer) {
            showNotification({
                text: 'Пользователь вошел в комнату. Можно начинать игру',
                type: 'info',
            });
        }
        if (isTeacher(role)) {
            sendAction(
                WsSystemAction.SetAccessSettings,
                { interface: settings.interface, video: settings.video },
                false
            );
        }
    });

    return <Notification />;
};
