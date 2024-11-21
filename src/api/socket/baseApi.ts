export interface WsApi {
    sendMessage(data: Record<string, string>): void;
    onMessage(data: Record<string, string>): void;
    sendAction(name: string, params?: Record<string, any>): void;
    onAction(name: string, params?: Record<string, any>): void;
    connect(): void;
}
