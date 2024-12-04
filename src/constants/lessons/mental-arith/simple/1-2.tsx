import { CloudType } from '../../../../api/http/api.ts';
import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_SIMPLE: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/welcome/welcome.png'),
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто 0-4"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 0-4». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 0-4». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 0-4». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 0-4». Разминка 4..mp4'
                ),
            },
            {
                title: 'Разминка 5',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 0-4». Разминка 5..mp4'
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
        games: [],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Просто 0-4"',
        status: true,
        index: 3,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 4,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Просто 0-4"',
        status: true,
        index: 5,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Просто 5". Однозначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Флешкарта 5',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/2.8/fleshkart5.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 6',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/2.8/fleshkart6.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 7',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/2.8/fleshkart7.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 8',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/2.8/fleshkart8.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 9',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/2.8/fleshkart9.jpg'
                ),
                imageWidth: 400,
            },
        ],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'game',
        games: [],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто 5"',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Цифра 5',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '5. Знакомство с цифрой 5 (1).mp4'
                ),
            },
            {
                title: 'Действие +5 -5',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/2.10/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 5». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 2. «Просто 5». Разминка 2..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 5". Однозначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '6. Демонстрация примера по теме Просто 5.mp4'
                ),
            },
            {
                title: 'Игра',
                type: 'games',
                games: [],
            },
        ],
    },
    {
        title: 'Игра с ФК',
        secondTitle: 'Тема "Просто 0-4". Однозначные',
        status: true,
        name: 'game',
        index: 11,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Тема "Просто 5". Однозначные',
        status: true,
        name: 'game',
        index: 12,
        games: ['flashCards'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 13,
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 14,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Просто 4" на физическом воображаемом абакусе',
            },
            {
                title: 'Изучили элементы абакуса',
                imgUrl: [
                    createPath('/assets/img/lessons/schety/2.8/fleshkart5.jpg'),
                    createPath('/assets/img/lessons/schety/2.8/fleshkart6.jpg'),
                    createPath('/assets/img/lessons/schety/2.8/fleshkart7.jpg'),
                    createPath('/assets/img/lessons/schety/2.8/fleshkart8.jpg'),
                    createPath('/assets/img/lessons/schety/2.8/fleshkart9.jpg'),
                ],
                imgWidth: 400,
            },
            {
                title: 'Изучили правила счета в пределах пяти',
                imgUrl: createPath('/assets/img/lessons/schety/2.10/1.gif'),
                imgWidth: 400,
            },
            {
                title: 'Освоили счет по теме "Просто 5" на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто 5" на воображаемом абакусе',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 15,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 5', LESSONS_MENTAL_ARITH_SIMPLE];
