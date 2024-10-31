import { useEffect } from 'react';
import { useGame } from '../../hooks/game';
import { wsApi } from './socketApi';

export function useWebSocket() {
    const { syncStorage: storage = {} } = useGame();

    const sendMessage = (name: string, value: any) => {
        wsApi.sendMessage(name, value);
    };

    const sendAction = (name: string) => {
        wsApi.sendAction(name);
    };

    return { storage, sendMessage, sendAction };
}

export const useWsAction = (callback: (name: string) => void) => {
    const { syncAction = {} } = useGame();

    useEffect(() => {
        if (syncAction.name) {
            callback(syncAction.name);
        }
    }, [syncAction]);
};