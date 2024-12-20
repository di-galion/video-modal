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
        games: [],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Анзан". Случайные числа. Однозначные',
        status: true,
        index: 2,
        name: 'game',
        games: [],
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
        title: 'Изучение новой темы',
        secondTitle:
            'Тема "Анзан". Случайные числа. Однозначные с промежуточным двузначным ответом',
        status: true,
        index: 4,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Анзан". Случаные числа. Однозначные',
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
        index: 7,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Анзан", подтема "Случаные числа" на физическом абакусе (однозначные с промежуточным двузначным ответом)',
            },
            {
                title: 'Освоили счет по теме "Анзан", подтема "Случаные числа" на воображаемом абакусе (однозначные с промежуточным двузначным ответом)',
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

export default ['Случайные числа', LESSONS_MENTAL_ARITH_ANZAN];
