import {
    updateSyncAction,
    updateSyncStorage,
} from '../../store/game-data/gameData';
import { store } from '../../store/store';
import { WsApi } from './baseApi';

export class WsFakeApi implements WsApi {
    sendMessage(name: string, value: any) {
        setTimeout(() => {
            this.onMessage(name, value);
        }, 100);
    }

    sendAction(name: string, params?: Record<string, any>) {
        setTimeout(() => {
            this.onAction(name, params);
        }, 100);
    }

    onMessage(name: string, value: any) {
        if (value) {
            store.dispatch(updateSyncStorage({ [name]: value } as any));
        }
    }

    onAction(name: string, params?: Record<string, any>) {
        if (name) {
            store.dispatch(updateSyncAction({ name, params }));
        }
    }
}

export const wsApi = new WsFakeApi();
