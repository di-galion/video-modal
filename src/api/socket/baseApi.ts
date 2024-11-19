export interface WsApi {
    sendMessage(name: string, data: any): void;
    onMessage(name: string, data: any): void;
    sendAction(name: string, params?: Record<string, any>): void;
    onAction(name: string, params?: Record<string, any>): void;
    connect(): void;
}
