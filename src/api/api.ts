import { ILesson } from '../constants/lessons.constants';
import { BaseApi } from './baseApi';
import { FakeApi } from './fakeApi';
import { URL_LESSONS } from './urls';

class Api {
    constructor(private usedApi: BaseApi) {}

    fetchLessons() {
        return this.usedApi.get<ILesson[]>(URL_LESSONS);
    }
}

export default new Api(new FakeApi());
