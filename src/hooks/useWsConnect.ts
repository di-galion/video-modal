import { useSearchParams } from 'react-router-dom';
import { useActions } from './useActions';
import { useWebSocket } from '../api/socket/useWebSocket';
import { useEffect } from 'react';
import { Role } from '../constants/roles.constants';

export const useWsConnect = () => {
    const [searchParams] = useSearchParams({ role: '', token: '' });
    const { setRole, setMultiplayer } = useActions();
    const { connect } = useWebSocket();

    useEffect(() => {
        const role = searchParams.get('role');
        const token = searchParams.get('token');
        const room = searchParams.get('room');

        if (role) {
            setRole(role.toUpperCase() as Role);
        }
        if (token) {
            localStorage.setItem('TOKEN', token);
        }
        if (room) {
            localStorage.setItem('ROOM', room);
        }
        if (role && token && room) {
            setMultiplayer(true);
            connect();
        } else {
            setMultiplayer(false);
        }
    }, [searchParams]);
};
