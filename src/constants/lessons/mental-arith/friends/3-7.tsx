import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_7: ILesson[] = [
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
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 6". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 6". Однозначные. Двузначные',
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
        secondTitle: 'Тема "Друг 5"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 5 (рыбки 5-5)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/7/ma/friends7.6/friend5.jpg'),
            },
            {
                title: 'Правило Друг 5 (+5)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 5 (+5)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/7/ma/friends7.6/gif1/plus5.gif'),
                imageWidth: 480,
            },
            {
                title: 'Правило Друг 5 (-5)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 5 (-5)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/7/ma/friends7.6/gif2/minus5.gif'),
                imageWidth: 480,
            },
        ]
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 5". Однозначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
                //реальные игры['countExamples']
            }
        ],
    },


    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
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
                title: 'Закрепили счет по теме "Друг 6" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 6" на физическом абакусе (двузначные)',
            },
            {
                title: 'Изучили правило "Друг 5"',
                imgUrl: [createPath(
                    '/assets/img/lessons/friends-img/7/ma/friends7.6/friend5.jpg'
                ),
                    createPath(
                        '/assets/img/lessons/friends-img/7/ma/friends7.6/gif1/plus5.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/7/ma/friends7.6/gif2/minus5.gif'
                    ),
                ],
                imgWidth: 680
            },
            {
                title: 'Освоили правило "Друг 5" на физическом абакусе (однозначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Друг 5', LESSONS_MENTAL_ARITH_FRIENDS_7];