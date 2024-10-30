export interface WsData {
    'multTable/initData': number[][];
    'multTable/click': null;
}

export type WsActionName = keyof WsData;

export interface WsAction<Name extends WsActionName = WsActionName> {
    name: Name;
    data: WsData[Name];
}

export type WsApiMessageCallback<Name extends WsActionName = WsActionName> = (
    data: WsData[Name]
) => void;

export class WsApi {
    sendMessage<Name extends WsActionName>(name: Name, data: WsData[Name]) {}

    onMessage<Name extends WsActionName>(
        name: Name,
        callback: WsApiMessageCallback<Name>
    ) {}
}

function doing() {
    const api = new WsApi();
    api.sendMessage('multTable/initData', []);
    api.sendMessage('multTable/click', null);

    api.onMessage('multTable/initData', (data) => {
        console.log(data);
    });
}

export const wsApi = new WsApi();
