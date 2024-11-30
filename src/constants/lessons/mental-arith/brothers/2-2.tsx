import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_BROTHER_2: ILesson[] = [
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
        secondTitle: 'Тема "Брат 1". Однозначные.',
        status: true,
        index: 1,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),


    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Однозначные',
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
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Однозначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 1"',
        status: true,
        index: 7,
        name: 'game',
        games: ['flashCards']
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Двузначные',
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
        ]
    },

    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Брат-1". Двузначные',
        status: true,
        index: 10,
        name: 'game',
        games: ['flashCards'],
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
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
        index: 13,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 0 - 4', LESSONS_MENTAL_ARITH_BROTHER_2];
