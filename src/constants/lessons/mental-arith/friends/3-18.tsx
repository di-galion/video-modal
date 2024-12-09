import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_18: ILesson[] = [
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
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные',
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
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },


    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг 1" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг 1" на физическом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Друг 1" на воображаемом абакусе (двузначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Друг 1', LESSONS_MENTAL_ARITH_FRIENDS_18];