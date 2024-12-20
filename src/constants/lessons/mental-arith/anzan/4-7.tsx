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
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление "Друг+Брат 6". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление "Друг+Брат 6". Однозначные. Двузначные',
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
        title: 'Изучение новой темы',
        secondTitle:
            'Тема "Анзан". Только сложение. Однозначные с промежуточным двузначным ответом',
        status: true,
        index: 5,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Анзан". Только сложение',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 7,
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
                title: 'Закрепили счет по теме "Друг + Брат 6" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг + Брат 6" на физическом и воображаемом абакусе (двузначные)',
            },
            {
                title: 'Познакомились с темой "Анзан"',
            },
            {
                title: 'Освоили счет по теме "Анзан", подтема "Сложение" на физическом абакусе (однозначные с промежуточным двузначным ответом)',
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

export default ['Только сложение', LESSONS_MENTAL_ARITH_ANZAN];
