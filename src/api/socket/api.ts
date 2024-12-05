import {
    resetUserCount,
    setReady,
    showNotification,
} from '../../store/account-data/accountData';
import {
    updateSyncAction,
    updateSyncStorage,
} from '../../store/game-data/gamesData';
import { store } from '../../store/store';
import { getAccessToken } from '../http/auth.helper';
import { WsSystemAction } from './constants';

export class SocketApi {
    socket: WebSocket | null = null;
    ready: boolean = false;

    connect(room: string) {
        console.log('connect');

        //const room = sessionStorage.getItem('ROOM');
        if (!room) {
            store.dispatch(
                showNotification({
                    text: 'Не удалось поключиться. Нет комнаты.',
                    type: 'error',
                })
            );
        }
        this.socket = new WebSocket(
            `${import.meta.env.VITE_SOCKET_SERVER}${room}`
        );

        if (this.socket) {
            this.socket.onopen = () => {
                console.log('[open] Соединение установлено');
                const token = getAccessToken();
                this.socket?.send(`Bearer ${token}`);
                this.ready = true;
                this.sendAction(WsSystemAction.UserEnter);
            };
        }

        if (this.socket) {
            this.socket.onmessage = (event) => {
                console.log(
                    `[message] Данные получены с сервера: ${event.data}`
                );
                const { name, data, type, params } = JSON.parse(event.data);
                if (type === 'message') {
                    this.onMessage(data);
                } else if (type === 'action') {
                    this.onAction(name, params);
                }
            };
        }

        if (this.socket) {
            this.socket.onclose = (event) => {
                this.ready = false;
                //this.socket?.close();
                this.socket = null;

                if (event.wasClean) {
                    console.log(
                        `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
                    );
                } else {
                    console.log('[close] Соединение прервано');
                }

                store.dispatch(resetUserCount());
                store.dispatch(setReady(false));

                /*if (event.reason === 'Another connection received') {
                    this.connect();
                    return;
                }*/

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

    sendMessage(data: Record<string, string>) {
        if (this.socket && this.ready) {
            this.socket.send(JSON.stringify({ type: 'message', data }));
        }
        this.onMessage(data);
    }

    sendAction(name: string, params?: Record<string, any>, self = true) {
        if (this.socket && this.ready) {
            this.socket.send(JSON.stringify({ type: 'action', name, params }));
        }
        if (self) {
            this.onAction(name, params);
        }
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

export const wsApi = new SocketApi();
