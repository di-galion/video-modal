import { EnumLessonName } from './lessonsMap';

export { LESSONS_MAP, EnumLessonName } from './lessonsMap';

export interface ILesson {
    title: string;
    secondTitle: string;
    status: boolean;
    index: number;
    bad?: boolean;
    name: EnumLessonName;
}

export const LESSONS: ILesson[] = [
    {
        title: 'Проверка знаний',
        secondTitle: '',
        status: true,
        index: 0,
        name: EnumLessonName.Laboratory,
    },
    {
        title: 'Знакомство с Ментальной арифметикой',
        secondTitle: 'Видеопрезентация',
        status: true,
        index: 1,
        name: EnumLessonName.Lesson2,
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Цифры 0-4 на счетах. Однозначные',
        status: false,
        index: 2,
        name: EnumLessonName.Lesson3,
    },
    {
        title: 'Знакомство с цифрами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 3,
        name: EnumLessonName.Lesson4,
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: false,
        index: 4,
        name: EnumLessonName.Lesson1,
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 5,
        name: EnumLessonName.Lesson1,
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 6,
        name: EnumLessonName.Lesson1,
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 7,
        name: EnumLessonName.Lesson1,
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: false,
        index: 8,
        name: EnumLessonName.Lesson1,
    },
];

export const LESSON_COUNT = LESSONS.length;
