import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_4: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Друг 8". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 8". Однозначные. Двузначные',
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
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 7"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 7 (тюльпаны 7-3)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.11/punkt3/friend7.jpg'
                ),
            },
            {
                title: 'Правило Друг 7 (+7)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '9.Знакомство с правилом «Друг 7» (+7)..mp4'
                ),
            },
            {
                title: 'Друг 7 (+7)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.6/gif1/plus7.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 7 (-7)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '10.Знакомство с правилом «Друг 7» (-7)..mp4'
                ),
            },
            {
                title: 'Друг 7 (-7)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.6/gif2/minus7.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 7". Однозначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '11.Демонстрация примера по теме «Друг 7» (Однозначные).mp4'
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
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 6"',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Друг 6 (шарики 6-4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.8/friend6.jpg'
                ),
            },
            {
                title: 'Правило Друг 6 (+6)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '12.Знакомство с правилом «Друг 6» (+6)..mp4'
                ),
            },
            {
                title: 'Друг 6 (+6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.8/gif1/plus6.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 6 (-6)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '13.Знакомство с правилом «Друг 6» (+6)..mp4'
                ),
            },
            {
                title: 'Друг 6 (-6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/4/ma/friends4.8/gif2/minus6.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 6". Однозначные',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '14.Демонстрация примера по теме «Друг 6» (Однозначные).mp4'
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
        index: 9,
        name: 'game',
        games: ['bricks'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг 8" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 8" на физическом абакусе (двузначные)',
            },
            {
                title: 'Изучили правило "Друг 7"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.11/punkt3/friend7.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.6/gif1/plus7.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.6/gif2/minus7.gif'
                    ),
                ],
            },
            {
                title: 'Освоили правило "Друг 7" на физическом абакусе (однозначные)',
            },
            {
                title: 'Изучили правило "Друг 6"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.8/friend6.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.8/gif1/plus6.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/4/ma/friends4.8/gif2/minus6.gif'
                    ),
                ],
                imgWidth: 680,
            },
            {
                title: 'Освоили правило "Друг 6" на физическом абакусе (однозначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг 7, 6', LESSONS_MENTAL_ARITH_FRIENDS_4];
