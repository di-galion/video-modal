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

    const sendAction = (
        name: string,
        params?: Record<string, any>,
        self = true
    ) => {
        wsApi.sendAction(name, params, self);
    };

    const connect = (room: string) => {
        wsApi.connect(room);
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

    const selectLesson = (index: number) => {
        sendAction(WsSystemAction.SelectLesson, { index });
    };

    return {
        storage,
        sendStorageData,
        sendAction,
        connect,
        gotoGame,
        setGameStatus,
        setGameMode,
        selectLesson,
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
