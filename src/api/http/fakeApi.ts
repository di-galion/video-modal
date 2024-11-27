import { BaseApi } from './baseApi';

const fakeData: Record<string, () => Promise<any>> = {};

export class FakeApi implements BaseApi {
    get<Response>(url: string, _useToken: boolean = true) {
        return fakeData[url]() as Response;
    }

    post<Request, Response>(
        url: string,
        _data?: Request,
        _useToken: boolean = true
    ) {
        return fakeData[url]() as Response;
    }
}
