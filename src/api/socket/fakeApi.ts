// import {
//     updateSyncAction,
//     updateSyncStorage,
// } from '../../store/game-data/GameData';
// import { store } from '../../store/store';
// import { WsApi } from './baseApi';
//
// export class WsFakeApi implements WsApi {
//     private increment = 0;
//
//     sendMessage(name: string, value: any) {
//         setTimeout(() => {
//             this.onMessage(name, value);
//         }, 100);
//     }
//
//     sendAction(name: string) {
//         setTimeout(() => {
//             this.onAction(name);
//         }, 100);
//     }
//
//     onMessage(name: string, value: any) {
//         if (value) {
//             // скопировать
//             store.dispatch(updateSyncStorage({ [name]: value } as any));
//         }
//     }
//
//     onAction(name: string) {
//         if (name) {
//             this.increment++;
//             // скопировать
//             store.dispatch(
//                 updateSyncAction({ name, increment: this.increment } as any)
//             );
//         }
//     }
// }
//
// export const wsApi = new WsFakeApi();
