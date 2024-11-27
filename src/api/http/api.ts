import { ILesson } from '../../typings/lesson.module';
import { BaseApi } from './baseApi';
import { FakeApi } from './fakeApi';
import { URL_LESSONS } from './urls';

class Api {
    constructor(private usedApi: BaseApi) {}

    fetchLessons(theme: string) {
        return this.usedApi.get<ILesson[]>(`${URL_LESSONS}/${theme}`);
    }
}

export default new Api(new FakeApi());
