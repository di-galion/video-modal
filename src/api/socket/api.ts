import {
    resetUserCount,
    showNotification,
} from '../../store/account-data/accountData';
import {
    updateSyncAction,
    updateSyncStorage,
} from '../../store/game-data/gameData';
import { store } from '../../store/store';
import { WsApi } from './baseApi';

export class SocketApi implements WsApi {
    socket: WebSocket | null = null;
    ready: boolean = false;

    connect() {
        this.socket = new WebSocket('ws://127.0.0.1:8001/rooms/1');

        if (this.socket) {
            this.socket.onopen = () => {
                console.log('[open] Соединение установлено');
                const token = localStorage.getItem('TOKEN');
                this.socket?.send(`Bearer ${token}`);
                this.ready = true;
                this.sendAction('userEnter');
            };
        }

        if (this.socket) {
            this.socket.onmessage = (event) => {
                console.log(
                    `[message] Данные получены с сервера: ${event.data}`
                );
                const { name, value, type, params } = JSON.parse(event.data);
                if (type === 'message') {
                    this.onMessage(name, value);
                } else if (type === 'action') {
                    this.onAction(name, params);
                }
            };
        }

        if (this.socket) {
            this.socket.onclose = (event) => {
                this.ready = false;
                this.socket = null;

                if (event.wasClean) {
                    console.log(
                        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
                    );
                } else {
                    console.log('[close] Соединение прервано');
                }

                store.dispatch(resetUserCount());
                store.dispatch(
                    showNotification({
                        text: 'Соединение разорвано',
                        type: 'error',
                    })
                );
            };
        }

        if (this.socket) {
            this.socket.onerror = (error) => {
                console.log(`error: [${error}]`);
            };
        }
    }

    sendMessage(name: string, value: any) {
        if (this.socket && this.ready) {
            this.socket.send(JSON.stringify({ type: 'message', name, value }));
        }
        this.onMessage(name, value);
    }

    sendAction(name: string, params?: Record<string, any>) {
        if (this.socket && this.ready) {
            this.socket.send(JSON.stringify({ type: 'action', name, params }));
        }
        this.onAction(name, params);
    }

    onMessage(name: string, value: any) {
        if (value) {
            store.dispatch(updateSyncStorage({ [name]: value }));
        }
    }

    onAction(name: string, params?: Record<string, any>) {
        if (name) {
            store.dispatch(updateSyncAction({ name, params }));
        }
    }
}

export const wsApi = new SocketApi();
