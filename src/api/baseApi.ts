export interface BaseApi {
    get<Response>(url: string, useToken?: boolean): Promise<Response>;

    post<Request, Response>(
        url: string,
        data?: Request,
        useToken?: boolean
    ): Promise<Response>;
}
