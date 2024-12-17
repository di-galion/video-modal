import { ILesson } from '../../../../typings/lesson.module';
import { createPath } from '../../../../utils/createPath';

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
        games: ['bricks'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 6". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 6". Однозначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
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
            'Изучение темы "Друг+Брат 7". Изучение темы "Друг+Брат 6". Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг + Брат 6" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг + Брат 6" на физическом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилами по теме "Друг + Брат 6" на воображаемом абакусе (двузначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг + Брат 7,6', LESSONS_MENTAL_ARITH_ANZAN];
