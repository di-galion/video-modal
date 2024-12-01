import { instance } from './api.interceptors';

export enum CloudType {
    Simple,
    Brothers,
    Friends,
    Anzan,
}

class Api {
    async get<Response>(url: string) {
        return (await instance.get<any, { data: Response }>(url)).data;
    }

    async getCloudVideoUrl(type: CloudType, fileName: string) {
        const map: Record<CloudType, string[]> = {
            [CloudType.Simple]: [
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F1.Просто%2FРазминка%2FВидео%2F',
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F1.Просто%2FВидео%2F',
            ],
            [CloudType.Brothers]: [
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F2.Братья%2FРазминка%2FВидео%2F',
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F2.Братья%2FВидео%2F',
            ],
            [CloudType.Friends]: [
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F3.Друзья%2FВидео%2F',
            ],
            [CloudType.Anzan]: [
                '%2FМатериалы%2FМентальная%20арифметика%20онлайн%2F4.Анзан%2FВидео%2F',
            ],
        };

        const request = map[type].map((url) =>
            this.get<{ files: Array<{ name: string; url: string }> }>(
                `/api/cloud${url}`
            )
        );

        const response = await Promise.all(request);

        for (let data of response) {
            const result = data.files.find((value) => value.name === fileName);
            if (result) {
                return result.url;
            }
        }
    }
}

export default new Api();
