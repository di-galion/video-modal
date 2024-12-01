import { REFRESH_TOKEN } from './token.constants';
import { IAuthResponse, ILoginRequest } from './auth.types';
// @ts-ignore
import Cookies from 'js-cookie';

import { jwtDecode } from 'jwt-decode';
import { instance } from './api.interceptors';
import { removeFromStorage, saveToStorage } from './auth.helper';

export const AuthService = {
    login: async (data: ILoginRequest) => {
        const response = await instance({
            method: 'POST',
            url: '/api/token/',
            data,
        });

        if (response.data.access) saveToStorage(response.data, true);

        const decodedHeader: any = jwtDecode(response.data.access);

        return { ...response.data, id: decodedHeader.user_id };
    },

    async getProfile(id: number) {
        const response = await instance.get<string>(`/api/users/${id}/`);

        return response.data;
    },

    logout: async () => {
        removeFromStorage();
    },

    async getNewTokens() {
        const refreshToken = Cookies.get(REFRESH_TOKEN);

        const response = await instance.post<string, { data: IAuthResponse }>(
            '/api/token/refresh/',
            { refresh: refreshToken }
        );
        if (response.data.access) saveToStorage(response.data);

        response.data.access;
        return response;
    },

    // async checkAuthSever() {
    // 	try {
    // 		const response = await instanceServer({
    // 			method: 'GET',
    // 			url: `${BASE_ULR}api/user_profiles/`,
    // 		})
    // 		return response.data
    // 	} catch (e) {}
    // },
};
