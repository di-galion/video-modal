import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_10: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Друг 5". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 5". Однозначные. Двузначные',
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
        secondTitle: 'Тема "Друг 4"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 4 (пчелы 4-6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend4.jpg'
                ),
            },
            {
                title: 'Правило Друг 4 (+4)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '21.Знакомство с правилом «Друг 4» (+4)..mp4'
                ),
            },
            {
                title: 'Друг 4 (+4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/7/ma/friends7.6/gif1/plus5.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 4 (-4)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '22.Знакомство с правилом «Друг 4» (-4)..mp4'
                ),
            },
            {
                title: 'Друг 4 (-4)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/7/ma/friends7.6/gif2/minus5.gif'
                ),
                imageWidth: 480,
            },
            // ассеты не верные нужных пока нет
        ],
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 4". Однозначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '23.Демонстрация примера по теме «Друг 4» (Однозначные).mp4'
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
        index: 7,
        name: 'game',
        games: ['bricks'],
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
                title: 'Закрепили счет по теме "Друг 5" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 5" на физическом абакусе (двузначные)',
            },
            {
                title: 'Изучили правило "Друг 4"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/1/ma/friends1.13/punkt1/friend4.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/7/ma/friends7.6/gif1/plus5.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/7/ma/friends7.6/gif1/plus5.gif'
                    ),
                ],
                imgWidth: 680,
            },
            {
                title: 'Освоили правило "Друг 4" на физическом абакусе (однозначные)',
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

export default ['Друг 4', LESSONS_MENTAL_ARITH_FRIENDS_10];
