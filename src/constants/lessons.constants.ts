export type LessonName =
    | 'lesson1'
    | 'lesson2'
    | 'lesson3'
    | 'lesson4'
    | 'game'
    | 'empty';

export { LESSONS_MAP } from './lessonsMap';

export interface ILesson {
    title: string;
    secondTitle: string;
    status: boolean;
    index: number;
    bad?: boolean;
    name: LessonName;
}

export const LESSONS: ILesson[] = [
    {
        title: 'Проверка знаний',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'game',
    },
    {
        title: 'Знакомство с Ментальной арифметикой',
        secondTitle: 'Видеопрезентация',
        status: true,
        index: 1,
        name: 'lesson2',
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Цифры 0-4 на счетах. Однозначные',
        status: false,
        index: 2,
        name: 'lesson3',
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
