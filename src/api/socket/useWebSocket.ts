import { useEffect } from 'react';
import { useGame } from '../../hooks/game';
import { wsApi } from './api';
import { GameStatus } from '../../typings/game.module';
import { GameLessonMode } from '../../typings/lesson.module';
import { WsSystemAction } from './constants';

export function useWebSocket() {
    const { syncStorage: storage = {} } = useGame();

    const sendStorageData = (data: Record<string, any>) => {
        wsApi.sendMessage(data);
    };

    const sendAction = (name: string, params?: Record<string, any>) => {
        wsApi.sendAction(name, params);
    };

    const connect = () => {
        wsApi.connect();
    };

    const gotoGame = (game: string) => {
        sendAction(WsSystemAction.GotoGame, { game });
    };

    const setGameStatus = (status: GameStatus) => {
        sendAction(WsSystemAction.GameStatus, { status });
    };

    const setGameMode = (mode: GameLessonMode) => {
        sendAction(WsSystemAction.SetMode, { mode });
    };

    return {
        storage,
        sendStorageData,
        sendAction,
        connect,
        gotoGame,
        setGameStatus,
        setGameMode,
    };
}

export const useWsAction = (
    callback: (name: string, params?: Record<string, any>) => void
) => {
    const { syncAction = {} } = useGame();

    useEffect(() => {
        if (syncAction.name) {
            callback(syncAction.name, syncAction.params);
        }
    }, [syncAction]);
};
