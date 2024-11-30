import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_19: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двузначные',
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
        secondTitle: 'Тема "Переход 50"',
        status: true,
        index: 5,
        name: 'panels',
        items: [

            {
                title: 'Правило. Переход 50 (+5)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Переход 50 (+5)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/19/ma/cross19.6/gif1/crossing-fifty-plus.gif'),
                imageWidth: 480,
            },
            {
                title: 'Правило. Переход 50 (-5)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Переход 50 (-5)',
                type: 'image',
                url: createPath('/assets/img/lessons/friends-img/19/ma/cross19.6/gif2/crossing-fifty-minus.gif'),
                imageWidth: 480,
            },
        ]
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Переход 50"',
        status: true,
        index: 6,
        name: 'image',
        url: createPath('/assets/img/lessons/friends-img/19/files/ma/lessons/universal/universal.5.1.jpg'),
    },


    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Переход 50"',
        status: true,
        index: 7,
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
        index: 8,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
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
                title: 'Закрепили счет по теме "Друг 1" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 1" на физическом абакусе (двузначные)',
            },
            {
                title: 'Изучили  правило "Переход 50"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/friends-img/19/ma/cross19.6/gif1/crossing-fifty-plus.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/friends-img/19/ma/cross19.6/gif2/crossing-fifty-minus.gif'
                    ),
                ],
                imgWidth: 480
            },
            {
                title: 'Освоили счет с правилом "Переход 50" на физическом абакусе',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Переход через 50', LESSONS_MENTAL_ARITH_FRIENDS_19];