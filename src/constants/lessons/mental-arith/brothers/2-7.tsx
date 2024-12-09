import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_7: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/brother-img/1/ma/hello/hello.jpg'),
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 3"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 7.1 «Брат 3». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ],
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },

    {
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Брат 3". Двузначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 1. Круглые десятки',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 2. Правило в десятках',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '19.Демонстрация примера по теме «Брат 3» (Правило в десятках)..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '20.Демонстрация примера по теме «Брат 3» (Зеркальный)..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 4. Любые числа',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '21.Демонстрация примера по теме «Брат 3» (Двузначные)..mp4'
                ),
            },
        ],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 3"',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 7. «Брат 3. Двузначные». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 7.2 «Брат 3. Двузначные». Разминка 2..mp4'
                ),
            },
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 3". Двузначные',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
                //реальные игры['countExamples']
            },
        ],
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Брат 3" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 3" на воображаемом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 3" на физическом абакусе (двузначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Брат 3', LESSONS_MENTAL_ARITH_BROTHER_7];
