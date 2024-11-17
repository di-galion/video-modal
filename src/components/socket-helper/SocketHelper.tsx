import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';
//import { useNavigate } from 'react-router-dom';
import { Notification } from '../notification/Notification';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsOnReady } from '../../api/socket/useWsReady';

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
    } = useActions();
    const { role, userCount } = useAccount();
    const { sendAction } = useWebSocket();
    //const navigate = useNavigate();

    useWsAction((name, params) => {
        switch (name) {
            case 'userEnter':
                addUserCount();
                break;
            case 'ready':
                setReady(true);
                break;
            case 'gotoGame':
                clearResult();
                clearSettings();
                clearStorage();
                setPageStatus('settings');
                setGameName(params?.game);
                break;
            case 'gameStatus':
                setPageStatus(params?.status);
                break;
            case 'settings':
                console.log('settings', params?.reduxKey, params?.value);
                addNewSetting({ [params?.reduxKey]: params?.value });
                break;
        }
    });

    useEffect(() => {
        if (
            Number(import.meta.env.VITE_PREVENT_READY) ||
            userCount >= Number(import.meta.env.VITE_USER_COUNT)
        ) {
            sendAction('ready');
        }
    }, [userCount]);

    useWsOnReady(() => {
        if (isTeacher(role)) {
            showNotification({
                text: 'Пользователь вошел в комнату. Можно начинать игру',
                type: 'info',
            });
        }
    });

    return <Notification />;
};
