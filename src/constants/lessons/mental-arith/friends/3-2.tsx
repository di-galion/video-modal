import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_2: ILesson[] = [
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
        secondTitle: 'Закрепление темы "Друг 9". Закрепление темы "Друг 8". Однозначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
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
        secondTitle: 'Изучение темы "Друг 9". Изучение темы "Друг 8". Однозначные',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Друг 9". Двузначные',
        status: true,
        index: 5,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 9". Двузначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Друг 8". Двузначные',
        status: true,
        index: 7,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 8". Двузначные',
        status: true,
        index: 8,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
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
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг 9" и "Друг 8" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами "Друг 9" и "Друг 8" на воображаемом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Друг 9" и "Друг 8" на физическом абакусе (двузначные)',
            },
        ],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Друг 9, 8', LESSONS_MENTAL_ARITH_FRIENDS_2];