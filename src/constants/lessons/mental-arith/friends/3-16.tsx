import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_16: ILesson[] = [
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
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 2". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 2". Однозначные. Двузначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['flashCards'],
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
        secondTitle: 'Тема "Друг 1"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 1 (кораблики 1-9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/16/ma/friends16.6/friend1.jpg'
                ),
            },
            {
                title: 'Правило Друг 1 (+9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '33.Знакомство с правилом «Друг 1» (+1)..mp4'
                ),
            },
            {
                title: 'Друг 1 (+9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/16/ma/friends16.6/gif1/plus1.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 1 (-9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '34.Знакомство с правилом «Друг 1» (-1)..mp4'
                ),
            },
            {
                title: 'Друг 1 (-9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/16/ma/friends16.6/gif2/minus1.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 1". Однозначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '35.Демонстрация примера по теме «Друг 1» (Однозначные)..mp4'
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
        index: 7,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг 2" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 2" на физическом абакусе (двузначные)',
            },
            {
                title: 'Изучили  правило "Друг 1"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/16/ma/friends16.6/friend1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/16/ma/friends16.6/gif1/plus1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/16/ma/friends16.6/gif2/minus1.gif'
                    ),
                ],
                imgWidth: 680,
            },
            {
                title: 'Освоили счет с правилом "Друг 1" на физическом абакусе (однозначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг 1', LESSONS_MENTAL_ARITH_FRIENDS_16];
