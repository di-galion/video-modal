import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_20: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Переход 50"',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Переход 50"',
        status: true,
        index: 4,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Переход 100"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Правило. Переход 100 (+5)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '40.Знакомство с правилом «Переход 100» (+5)..mp4'
                ),
            },
            {
                title: 'Переход 100 (+5)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/20/ma/cross20.6/gif1/crossing-hundred-plus.gif'
                ),
                imageWidth: 480,
            },
            {
                title: 'Правило. Переход 100 (-5)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '41.Знакомство с правилом «Переход 100» (-5)..mp4'
                ),
            },
            {
                title: 'Переход 100 (-5)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/friends-img/20/ma/cross20.6/gif2/crossing-hundred-minus.gif'
                ),
                imageWidth: 480,
            },
        ],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Переход 100"',
        status: true,
        index: 6,
        name: 'image',
        url: createPath(
            '/assets/img/lessons/friends-img/19/files/ma/lessons/universal/universal.5.1.jpg'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Переход 100"',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    '42.Демонстрация примера по теме «Переход 100»..mp4'
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
        index: 8,
        name: 'game',
        games: ['bricks'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Переход 50" на физическом и воображаемом абакусе',
            },
            {
                title: 'Закрепили счет по теме "Переход 50" на физическом абакусе',
            },
            {
                title: 'Изучили  правило "Переход 100"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/20/ma/cross20.6/gif1/crossing-hundred-plus.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/20/ma/cross20.6/gif2/crossing-hundred-minus.gif'
                    ),
                ],
                imgWidth: 480,
            },
            {
                title: 'Освоили счет с правилом "Переход 100" на физическом абакусе',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Переход через 100', LESSONS_MENTAL_ARITH_FRIENDS_20];
