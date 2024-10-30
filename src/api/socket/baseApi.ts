export interface WsApi {
    sendMessage(name: string, data: any): void;
    onMessage(name: string, data: any): void;
}
