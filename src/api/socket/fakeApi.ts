import {
    updateSyncAction,
    updateSyncStorage,
} from '../../store/game-data/gamesData';
import { store } from '../../store/store';
import { WsApi } from './baseApi';

export class WsFakeApi implements WsApi {
    connect() {}

    sendMessage(data: Record<string, string>) {
        setTimeout(() => {
            this.onMessage(data);
        }, 100);
    }

    sendAction(name: string, params?: Record<string, any>) {
        setTimeout(() => {
            this.onAction(name, params);
        }, 100);
    }

    onMessage(data: Record<string, string>) {
        if (data) {
            store.dispatch(updateSyncStorage(data));
        }
    }

    onAction(name: string, params?: Record<string, any>) {
        if (name) {
            store.dispatch(updateSyncAction({ name, params }));
        }
    }
}

export const wsApi = new WsFakeApi();
