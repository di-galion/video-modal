import { ILesson } from '../typings/lesson.module';

export const LESSONS: ILesson[] = [
    {
        title: 'Проверка знаний',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'task',
    },
    {
        title: 'Проверка знаний',
        secondTitle: 'Реши задачи с микробами на состав числа 10',
        status: true,
        index: 1,
        name: 'game',
        games: [
            {
                name: 'laboratory',
                title: 'Лаборатория',
                imgUrl: '/assets/img/gameCovers/laboratory.png',
            },
        ],
        gameStatus: {
            laboratory: 'notStarted',
        },
    },
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'welcome',
    },
    {
        title: 'Знакомство с цифрами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 3,
        name: 'lesson4',
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: false,
        index: 4,
        name: 'lesson1',
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 5,
        name: 'lesson1',
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 6,
        name: 'lesson1',
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 7,
        name: 'lesson1',
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 8,
        name: 'lesson1',
    },
];

export const LESSON_COUNT = LESSONS.length;
