import { LESSONS } from '../../constants/lessons.constants';
import { BaseApi } from './baseApi';
import { URL_LESSONS } from './urls';

const fakeData: Record<string, () => Promise<any>> = {
    [URL_LESSONS]: () => Promise.resolve(LESSONS),
};

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
