import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_9: ILesson[] = [
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
                    'Занятие 9. «Брат 3». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 9. «Брат 3». Разминка 2..mp4'
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
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные. Двузначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные. Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
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
        secondTitle: 'Тема "Брат 4". Однозначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Брат 4 (4-1 тигрята)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/9/ma/brothers9.12/punkt3/picture1/brother4.jpg'
                ),
            },
            {
                title: 'Правило. Брат 4 (+4)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '22.Знакомство с правилом «Брат 4» (+4)..mp4'
                ),
            },
            {
                title: 'Брат 4 (+4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/9/ma/brothers9.8/gif1.brat4/plus4.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило. Брат 4 (-4)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '23.Знакомство с правилом «Брат 4» (-4)..mp4'
                ),
            },
            {
                title: 'Брат 4 (-4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/9/ma/brothers9.8/gif2.brat4/minus4.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 4"',
        status: true,
        index: 8,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Brothers,
            'Занятие 9. «Брат 4». Разминка 1..mp4'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 4". Однозначные',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '24.Демонстрация примера по теме «Брат 4» (Однозначные).mp4'
                ),
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
                title: 'Закрепили счет по теме "Брат 3" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Брат 3" на физическом и воображаемом абакусе (двузначные)',
            },
            {
                title: 'изучили правило "Брат 4"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/brother-img/9/ma/brothers9.12/punkt3/picture1/brother4.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/9/ma/brothers9.8/gif1.brat4/plus4.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/9/ma/brothers9.8/gif2.brat4/minus4.gif'
                    ),
                ],
                imgWidth: 680,
            },
            {
                title: 'Освоили счет с правилом "Брат 4" на физическом абакусе (однозначные)',
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

export default ['Брат 4', LESSONS_MENTAL_ARITH_BROTHER_9];
