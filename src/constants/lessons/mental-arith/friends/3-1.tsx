import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_1: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/brother-img/1/ma/hello/hello.jpg'),
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'game',
        games: ['bricks'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Братья". Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Братья". Однозначные. Двузначные',
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
        title: 'Знакомство с темой "Друзья"',
        secondTitle: 'Тема "Брат 4". Однозначные',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 1 (кораблики 1-9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend1.jpg'
                ),
            },
            {
                title: 'Друг 2 (лягушки 2-8)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend2.jpg'
                ),
            },
            {
                title: 'Друг 3 (гномы 3-7)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend3.jpg'
                ),
            },
            {
                title: 'Друг 4 (пчелы 4-6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend4.jpg'
                ),
            },
            {
                title: 'Друг 5 (рыбки 5-5)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend5.jpg'
                ),
            },
            {
                title: 'Друг 6 (шарики 6-4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend6.jpg'
                ),
            },
            {
                title: 'Друг 7 (тюльпаны 7-3)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend7.jpg'
                ),
            },
            {
                title: 'Друг 8 (попугаи 8-2)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend8.jpg'
                ),
            },
            {
                title: 'Друг 9 (обезьяны 9-1)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend9.jpg'
                ),
            },
        ],
    },
    {
        title: 'Игра на состав числа 10 "Лаборатория"',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['laboratory'],
    },

    {
        title: 'Изучение новой темы"',
        secondTitle: 'Тема "Друг 9"',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Друг 9 (обезьяны 9-1)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend9.jpg'
                ),
            },
            {
                title: 'Правило Друг 9 (+9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '1.Знакомство с правилом «Друг 9» (+9)..mp4'
                ),
            },
            {
                title: 'Друг 9 (+9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.8/gif1/plus9.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 9 (-9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '2.Знакомство с правилом «Друг 9» (-9)..mp4'
                ),
            },
            {
                title: 'Друг 9 (-9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.8/gif2/minus9.gif'
                ),
                imageWidth: 480,
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 9". Однозначные',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '3.Демонстрация примера по теме «Друг 9» (Однозначные)..mp4'
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
        title: 'Изучение новой темы"',
        secondTitle: 'Тема "Друг 8"',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Друг 8 (попугаи 8-2)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend8.jpg'
                ),
            },
            {
                title: 'Правило. Друг 8 (+8)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '4.Знакомство с правилом «Друг 8» (+8)..mp4'
                ),
            },
            {
                title: 'Друг 8 (+8)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.10/gif1/plus8.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило. Друг 8 (-8)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '5.Знакомство с правилом «Друг 8» (+8)..mp4'
                ),
            },
            {
                title: 'Друг 8 (-8)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.10/gif2/minus8.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 8". Однозначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '5.Знакомство с правилом «Друг 8» (+8)..mp4'
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
        index: 11,
        name: 'game',
        games: ['bricks'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'total',
        items: [
            {
                title: 'познакомились с темой "Друзья"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend2.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend3.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend4.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend5.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend6.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend7.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend8.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend9.jpg'
                    ),
                ],
                imgWidth: 720,
            },
            {
                title: 'Изучили правило "Друг 9"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.8/gif1/plus9.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.8/gif2/minus9.gif'
                    ),
                ],
                imgWidth: 400,
            },
            {
                title: 'Освоили счет с правилом "Друг 9" на физическом абакусе (однозначные)',
            },
            {
                title: 'Изучили правило "Друг 8"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.10/gif1/plus8.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.10/gif2/minus8.gif'
                    ),
                ],
                imgWidth: 400,
            },
            {
                title: 'Освоили счет с правилом "Друг 8" на физическом абакусе (однозначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 13,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг 9, 8', LESSONS_MENTAL_ARITH_FRIENDS_1];
