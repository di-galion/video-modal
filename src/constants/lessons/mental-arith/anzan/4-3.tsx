import { ILesson } from '../../../../typings/lesson.module';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_ANZAN: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/hello.jpg'),
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 8". Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 8". Однозначные',
        status: true,
        index: 3,
        name: 'game',
        games: [],
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
        secondTitle:
            'Изучение темы "Друг+Брат 9". Изучение темы "Друг+Брат 8". Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг + Брат 8" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг + Брат 8" на физическом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Друг + Брат 8" на воображаемом абакусе (двузначные)',
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

export default ['Друг + Брат 9,8', LESSONS_MENTAL_ARITH_ANZAN];
