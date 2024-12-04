import axios from 'axios';

import { getAccessToken, removeFromStorage } from './auth.helper';
import { AuthService } from './auth.service';
import { errorCatch } from './api.helper';

export const BASE_URL = import.meta.env.VITE_SERVER_URL;

const options = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const instance = axios.create(options);

instance.interceptors.request.use((config) => {
    const token = getAccessToken();

    // if (!config.headers.Authorization) {
    config.headers.Authorization = token ? `Bearer ${token}` : null;
    // }
    return config;
});

let refreshingFunc: any = undefined;

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        const originalRequest = error.config;

        if (
            (error?.response?.status === 401 ||
                error?.response?.status === 403 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'Token is invalid or expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry &&
            originalRequest.url !== '/api/token/refresh/'
        ) {
            originalRequest._isRetry = true;
            try {
                if (!refreshingFunc)
                    refreshingFunc = AuthService.getNewTokens();

                const { data } = await refreshingFunc;
                originalRequest.headers.Authorization = `Bearer ${data.access}`;

                return instance.request(originalRequest);
            } catch (error) {
                removeFromStorage();
                refreshingFunc = await AuthService.logout();
                throw errorCatch(error);
            }
        }

        throw error;
    }
);
