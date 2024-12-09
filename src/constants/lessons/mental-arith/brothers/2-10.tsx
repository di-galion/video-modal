import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_10: ILesson[] = [
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
        secondTitle: 'Тема "Брат 4"',
        status: true,
        index: 1,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Brothers,
            'Занятие 10. «Брат 4». Разминка 1..mp4'
        ),
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
        secondTitle: 'Закрепление темы "Брат 4". Однозначные',
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
        secondTitle: 'Изучение темы "Брат 4". Однозначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Брат 4". Духзначные',
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
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '27.Демонстрация примера по теме «Брат 4» (Зеркальный).mp4'
                ),
            },
            {
                title: 'Демонстрация примера 4. Любые числа',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '28.Демонстрация примера по теме «Брат 4» (Двузначные)..mp4'
                ),
            },
        ],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 4"',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 10.1 «Брат 4. Двузначные». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 10.2 «Брат 4. Двузначные». Разминка 1..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 4". Двузначные',
        status: true,
        index: 9,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
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
                title: 'Закрепили счет по теме "Брат 4" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 4" на воображаемом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 4" на физическом абакусе (двузначные)',
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

export default ['Брат 4', LESSONS_MENTAL_ARITH_BROTHER_10];
