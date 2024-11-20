import { useSearchParams } from 'react-router-dom';
import { useActions } from './useActions';
import { useWebSocket } from '../api/socket/useWebSocket';
import { useEffect } from 'react';
import { Role } from '../constants/roles.constants';

export const useWsConnect = () => {
    const [searchParams] = useSearchParams();
    const { setRole, setMultiplayer } = useActions();
    const { connect } = useWebSocket();

    useEffect(() => {
        const role = searchParams.get('role');
        const token = searchParams.get('token');
        const room = searchParams.get('room');
        const mode = searchParams.get('mode');

        if (role) {
            setRole(role.toUpperCase() as Role);
        }
        if (token) {
            sessionStorage.setItem('TOKEN', token);
        }
        if (room) {
            sessionStorage.setItem('ROOM', room);
        }
        if (role && token && room) {
            setMultiplayer(true);
            connect();
        } else if (
            (!sessionStorage.getItem('TOKEN') &&
                !sessionStorage.getItem('ROOM')) ||
            mode === 'offline'
        ) {
            setMultiplayer(false);
        }
        if (mode === 'offline') {
            sessionStorage.clear();
        }
    }, [searchParams]);
};
