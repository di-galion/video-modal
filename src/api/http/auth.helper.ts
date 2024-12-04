import { ACCESS_TOKEN, REFRESH_TOKEN, USER } from './token.constants';
import { IAuthResponse } from './auth.types';

import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const saveToStorage = (data: IAuthResponse, saveRefresh = false) => {
    Cookies.set(ACCESS_TOKEN, data.access, { expires: 7 });
    if (saveRefresh) {
        Cookies.set(REFRESH_TOKEN, data.refresh, { expires: 7 });
    }

    const decodedHeader: any = jwtDecode(data.access);

    const user = {
        // statuses: decodedHeader.statuses,
        id: decodedHeader.user_id,
        //username: decodedHeader.username,
        //fullName: decodedHeader.full_name,
    };
    localStorage?.setItem(USER, JSON.stringify(user));
};

export const removeFromStorage = () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
    localStorage?.removeItem(USER);
};

export const getAccessToken = () => {
    return Cookies.get(ACCESS_TOKEN);
};

export const getUserIdFromStorage = () => {
    if (typeof window !== 'undefined') {
        return Number(JSON.parse(localStorage?.getItem(USER) || '{}').id);
    }
};
