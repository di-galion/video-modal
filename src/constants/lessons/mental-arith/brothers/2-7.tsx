import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_BROTHER_7: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/brother-img/1/ma/hello/hello.jpg'),
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 3"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ]
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные',
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
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards','flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 3". Однозначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Брат 3". Двузначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 1. Круглые десятки',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 2. Правило в десятках',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 4. Любые числа',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ]
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 3"',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ]
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 3". Двузначные',
        status: true,
        index: 9,
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
                games: ['flashCards']
                //реальные игры['countExamples']
            },
        ],
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards','flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },

    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'MaoStatisticsLesson',
    }
];

export default ['Брат 3', LESSONS_MENTAL_ARITH_BROTHER_7];