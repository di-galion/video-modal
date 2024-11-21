import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { isTeacher } from '../../utils/roles';
import { useAccount } from '../../hooks/account';
//import { useNavigate } from 'react-router-dom';
import { Notification } from '../notification/Notification';
import { useWebSocket, useWsAction } from '../../api/socket/useWebSocket';
import { useWsOnReady } from '../../api/socket/useWsReady';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { WsSystemAction } from '../../api/socket/constants';

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
                setGameName(params?.game);
                break;
            case WsSystemAction.SetMode:
                setLessonMode(params?.mode);
                break;
            case WsSystemAction.GameStatus:
                setPageStatus(params?.status);
                break;
            case WsSystemAction.Settings:
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
            sendAction(WsSystemAction.Ready);
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
