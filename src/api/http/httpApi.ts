import { BaseApi } from './baseApi';

type Method = 'POST' | 'GET' | 'DELETE';

export class Api implements BaseApi {
    constructor(private getToken: () => string) {}

    request<Request, Response>(
        url: string,
        method: Method,
        data?: Request,
        useToken: boolean = true
    ): Promise<Response> {
        const obj: RequestInit = {
            body: data ? JSON.stringify(data) : undefined,
            method,
        };

        if (useToken) {
            obj.headers = { Authorization: `Bearer ${this.getToken()}` };
        }

        return fetch(`${import.meta.env.VITE_SERVER_URL}${url}`, obj)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                return json as Response;
            })
            .catch(() => {
                return Promise.reject();
            });
    }

    get<Response>(url: string, useToken: boolean = true) {
        return this.request<void, Response>(url, 'GET', undefined, useToken);
    }

    post<Request, Response>(
        url: string,
        data?: Request,
        useToken: boolean = true
    ) {
        return this.request<Request, Response>(url, 'GET', data, useToken);
    }
}
