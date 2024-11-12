import { useEffect } from 'react';
import { useGame } from '../../hooks/game';
import { wsApi } from './api';

export function useWebSocket() {
    const { syncStorage: storage = {} } = useGame();

    const sendMessage = (name: string, value: any) => {
        wsApi.sendMessage(name, value);
    };

    const sendAction = (name: string, params?: Record<string, any>) => {
        wsApi.sendAction(name, params);
    };

    const connect = (_token?: string) => {
        wsApi.connect();
    };

    return { storage, sendMessage, sendAction, connect };
}

export const useWsAction = (
    callback: (name: string, params?: Record<string, any>) => void,
    depends: any[] = []
) => {
    const { syncAction = {} } = useGame();

    useEffect(() => {
        if (syncAction.name) {
            callback(syncAction.name, syncAction.params);
        }
    }, [syncAction, ...depends]);
};
