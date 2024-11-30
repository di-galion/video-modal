import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_13: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Друг 4". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 4". Однозначные. Двузначные',
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
        secondTitle: 'Тема "Друг 3"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Друг 3 (гномы 3-7)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.6/friend3.jpg'),
            },
            {
                title: 'Правило Друг 3 (+3)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 3 (+3)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.6/gif1/plus3.gif'),
            },
            {
                title: 'Правило Друг 3 (-3)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 3 (-3)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.6/gif2/minus3.gif'),
            },
        ]
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 3". Однозначные',
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
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 2"',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Друг 2 (лягушки 2-8)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.8/friend2.jpg'),
            },
            {
                title: 'Правило Друг 2 (+2)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 2 (+2)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.8/gif1/plus2.gif'),
            },
            {
                title: 'Правило Друг 2 (-2)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг 2 (-2)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/13/ma/friends13.8/gif2/minus2.gif'),
            },
        ]
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 2". Однозначные',
        status: true,
        index: 8,
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
        index: 9,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Друг 3, 2', LESSONS_MENTAL_ARITH_FRIENDS_13];