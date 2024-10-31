import { io, Socket } from 'socket.io-client';
import { updateSyncAction, updateSyncStorage } from '../../store/game-data/GameData';
import { store } from '../../store/store';
import { WsApi } from './baseApi';

export class WsSocketApi implements WsApi {
    private socket: Socket;
    private increment = 0;

    constructor(url: string) {

        this.socket = io(url, {
            reconnection: true,
            reconnectionAttempts: 10,
            reconnectionDelay: 3000,
            transports: ['websocket'],
            secure: true
        });


        this.socket.on('connect', () => {
            console.info('Connected to WebSocket server');
        });

        this.socket.on('disconnect', (reason) => {
            console.warn(`Disconnected from WebSocket server${reason}`);
        });


        this.socket.on('connect_error', (err) => {
            console.error('WebSocket connect error:', err)
        })

        this.socket.on('message', (data: any) => {
            this.onMessage(data);
        });
    }

    sendMessage(name: string, value: any) {
        this.socket.emit('message', JSON.stringify({ name, value }));
    }

    sendAction(name: string) {
        this.increment++;
        this.socket.emit('action', JSON.stringify({ name, increment: this.increment }));
    }

    private onMessage(data: any) {
        try {
            const parsedData = JSON.parse(data);
            const { name, value, type } = parsedData;

            if (type === 'updateStorage') {
                store.dispatch(updateSyncStorage({ [name]: value }));
            } else if (type === 'action') {
                store.dispatch(updateSyncAction({ name, increment: this.increment }));
            }
        } catch (error) {
            console.error('Failed to parse incoming message', error);
        }
    }
}

export const wsApi = new WsSocketApi('http://localhost:3000/');