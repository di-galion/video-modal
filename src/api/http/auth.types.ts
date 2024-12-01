import { IUser } from './user.types';

export interface IAuthResponse extends ITokens {
    user: IUser;
}
export interface ITokens {
    access: string;
    refresh: string;
}

export interface IRegisterRequest {
    email: string;
    password: string;
    user_name: string;
    user_phone?: string;
    user_place?: string;
    position_at_work?: string;
    company_name?: string;
    company_inn?: string;
}

export interface ILoginRequest {
    email: string;
    password: string | number;
}
