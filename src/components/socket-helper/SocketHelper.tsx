import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';
//import { useNavigate } from 'react-router-dom';
import { Notification } from '../notification/Notification';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsOnReady } from '../../api/socket/useWsReady';
import { useTypedSelector } from '../../hooks/useTypedSelector';

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
    const { sendAction } = useWebSocket();
    const multiPlayer = useTypedSelector(
        (store) => store.accountData.multiPlayer
    );

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
                setLessonMode('game');
                setGameName(params?.game);
                break;
            case 'setMode':
                setLessonMode(params?.mode);
                break;
            case 'gameStatus':
                setPageStatus(params?.status);
                break;
            case 'settings':
                addNewSetting({ [params?.reduxKey]: params?.value });
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
            sendAction('ready');
        }
    }, [userCount, multiPlayer]);

    useWsOnReady(() => {
        if (isTeacher(role) && multiPlayer) {
            showNotification({
                text: 'Пользователь вошел в комнату. Можно начинать игру',
                type: 'info',
            });
        }
    });

    return <Notification />;
};
