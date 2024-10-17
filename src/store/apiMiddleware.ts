import { PayloadAction, ThunkMiddleware } from '@reduxjs/toolkit';
import { ApiStatus, setApiState } from './api-status-data/apiStatusData';

type ApiStatusAction = PayloadAction<{ apiStatus: ApiStatus }>;

export const apiMiddleware: ThunkMiddleware = () => (next) => (action) => {
    console.log((action as ApiStatusAction).payload);
    next(action);
    if ((action as ApiStatusAction).payload?.apiStatus === 'error') {
        next({
            type: setApiState.type,
            payload: 'error',
        });
    }
};
