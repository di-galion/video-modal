import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_BROTHER_3: ILesson[] = [
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
        secondTitle: 'Тема "Брат 1"',
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
            {
                title: 'Разминка 3',
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
        secondTitle: 'Закрепление темы "Брат 1". Однозначные. Двузначные.',
        status: true,
        index: 3,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards','flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Однозначные. Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
        //игры ок
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Брат 2". Однозначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Брат 2 (2-3 бегемотики)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.17/punkt1/brother2.jpg'),
            },
            {
                title: 'Правило. Брат 2 (+2)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Брат 2 (+2)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/3/ma/brothers3.8/gif1.brat2/plus2.gif'),
            },
            {
                title: 'Правило. Брат 2 (-2)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },{
                title: 'Брат 2 (-2)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/3/ma/brothers3.8/gif2.brat2/minus2.gif'),
            },
        ]
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 2"',
        status: true,
        index: 1,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),

    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 2". Однозначные.',
        status: true,
        index: 11,
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
        ]
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 15,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 16,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 0 - 4', LESSONS_MENTAL_ARITH_BROTHER_3];
