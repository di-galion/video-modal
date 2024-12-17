import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_1: ILesson[] = [
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
        secondTitle: 'Тема "просто"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 4',
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
        games: ['bricks'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные.',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },
    {
        title: 'Знакомство с темой братья',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Брат 1 (1-4 крокодильчики)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                ),
            },
            {
                title: 'Брат 2 (2-3 бегемотики)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/2.jpg'
                ),
            },
            {
                title: 'Брат 3 (3-2 жирафы)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/3.jpg'
                ),
            },
            {
                title: 'Брат 4 (4-1 тигрята)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/4.jpg'
                ),
            },
        ],
    },
    {
        title: 'Игра на состав числа 5 "Лаборатория"',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 8,
        name: 'game',
        games: ['laboratory'],
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Брат 1',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Правило. Брат 1 (+1)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '1. Знакомство с правилом «Брат 1» (+1)..mp4'
                ),
            },
            {
                title: 'Брат 1 (+1)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.10/gif1.brat1+1/plus1.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило. Брат 1 (-1)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '2.Знакомство с правилом «Брат 1» (-1)..mp4'
                ),
            },
            {
                title: 'Брат 1 (-1)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.10/gif2.brat1-1/minus1.gif'
                ),
                imageWidth: 480,
            },
        ],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 1"',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 1. «Брат 1». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 1. «Брат 1». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 1. «Брат 1». Разминка 3..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 1". Однозначные.',
        status: true,
        index: 11,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '3.Демонстрация примера по теме «Брат 1» (Однозначные)..mp4'
                ),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
            },
        ],
    },

    {
        title: 'Игра с Флешкартами',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 12,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Брат-1". Однозначные.',
        status: true,
        index: 13,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 1". Двухзначные.',
        status: true,
        index: 14,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 1. Круглые десятки',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '4.Демонстрация примера по теме «Брат 1» (Круглые десятки)..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 2. Правило в десятках',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '5.Демонстрация примера по теме «Брат 1» (Правило в десятках)..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '6.Демонстрация примера по теме «Брат 1» (Зеркальный)..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 4. Любые числа',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    '7.Демонстрация примера по теме «Брат 1» (Двузначные)..mp4'
                ),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
            },
        ],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 15,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 16,
        name: 'total',
        items: [
            {
                title: 'познакомились с темой "Братья"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/2.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/3.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/4.jpg'
                    ),
                ],
                imgWidth: 720,
            },
            {
                title: 'Изучили правило "Брат 1"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.10/gif1.brat1+1/plus1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.10/gif2.brat1-1/minus1.gif'
                    ),
                ],
                imgWidth: 400,
            },
            {
                title: 'Освоили счет с правилом "Брат 1" на физическом абакусе (однозначные)',
                imgWidth: 800,
            },
            {
                title: 'Освоили счет с правилом "Брат 1" на воображаемом абакусе (однозначные)',
                imgWidth: 800,
            },
            {
                title: 'Освоили счет с правилом "Брат 1" на физическом абакусе (двузначные)',
                imgWidth: 800,
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 17,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Брат 1', LESSONS_MENTAL_ARITH_BROTHER_1];
