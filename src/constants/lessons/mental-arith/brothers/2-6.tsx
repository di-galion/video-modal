import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_6: ILesson[] = [
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
        secondTitle: 'Тема "Брат 2"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 6. «Брат 2». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 6. «Брат 2». Разминка 2..mp4'
                ),
            },
        ],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 2". Однозначные. Двузначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 2". Однозначные. Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Брат 2". Двузначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Брат 3 (3-2 жирафы)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/6/ma/brothers6.8/image1.jpg'
                ),
            },
            {
                title: 'Правило. Брат 3 (+3)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '15.Знакомство с правилом «Брат 3» (+3)..mp4'
                ),
            },
            {
                title: 'Брат 3 (+3)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/6/ma/brothers6.8/gif1.brat3/plus3.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило. Брат 3 (-3)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '16.Знакомство с правилом «Брат 3» (-3)..mp4'
                ),
            },
            {
                title: 'Брат 2 (-3)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/6/ma/brothers6.8/gif2.brat3/minus3.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 3"',
        status: true,
        index: 8,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Brothers,
            'Занятие 6. «Брат 3». Разминка 1..mp4'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 2". Однозначные. Двузначные',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '17.Демонстрация примера по теме «Брат 3» (Однозначные).mp4'
                ),
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
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
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
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
                title: 'Закрепили счет по теме "Брат 2" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Брат 2" на физическом и воображаемом абакусе (двузначные)',
            },
            {
                title: 'изучили правило "Брат 3"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/brother-img/6/ma/brothers6.8/image1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/6/ma/brothers6.8/gif1.brat3/plus3.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/6/ma/brothers6.8/gif2.brat3/minus3.gif'
                    ),
                ],
                imgWidth: 680,
            },
            {
                title: 'Освоили счет с правилом "Брат 3" на физическом абакусе (однозначные)',
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

export default ['Брат 3', LESSONS_MENTAL_ARITH_BROTHER_6];
