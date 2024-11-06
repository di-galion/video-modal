import {
    updateSyncAction,
    updateSyncStorage,
} from '../../store/game-data/GameData';
import { store } from '../../store/store';
import { WsApi } from './baseApi';

export class SocketApi implements WsApi {
    socket: WebSocket | null = null;

    connect() {
        this.socket = new WebSocket('ws://127.0.0.1:8001/rooms/1');

        this.socket.onopen = () => {
            console.log('[open] Соединение установлено');
            const token = localStorage.getItem('TOKEN');
        };

        this.socket.onmessage = (event) => {
            console.log(`[message] Данные получены с сервера: ${event.data}`);

            const { name, value, type } = JSON.parse(event.data);
            if (type === 'message') {
                this.onMessage(name, value);
            } else if (type === 'action') {
                this.onAction(name);
            }
        };

        this.socket.onclose = (event) => {
            if (event.wasClean) {
                console.log(
                    `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
                );
            } else {
                console.log('[close] Соединение прервано');
            }
        };

        this.socket.onerror = (error) => {
            console.log(`error: [${error}]`);
        };
    }

    sendMessage(name: string, value: any) {
        this.socket?.send(JSON.stringify({ type: 'message', name, value }));
        this.onMessage(name, value);
    }

    sendAction(name: string) {
        this.socket?.send(JSON.stringify({ type: 'action', name }));
        this.onAction(name);
    }

    onMessage(name: string, value: any) {
        if (value) {
            store.dispatch(updateSyncStorage({ [name]: value } as any));
        }
    }

    onAction(name: string) {
        if (name) {
            store.dispatch(updateSyncAction({ name } as any));
        }
    }
}

export const wsApi = new SocketApi();
