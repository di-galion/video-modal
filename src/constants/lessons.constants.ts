import { ILesson } from '../typings/lesson.module';

const LESSONS_MULT_TABLE: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'welcome',
    },
    {
        title: 'Проверка знаний',
        secondTitle: 'Реши задачи с микробами на состав числа 10',
        status: true,
        index: 1,
        name: 'game',
        games: ['laboratory'],
    },
    {
        title: 'Проверка знаний',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'task',
    },
    {
        title: 'Что такое Умножение',
        secondTitle:
            'В аквариуме 5 стаек с рыбками. В каждой стайке - 3 рыбки. Запиши решение с помощью сложения и реши задачу.',
        status: true,
        index: 3,
        name: 'simpleTask',
        task: 'mult',
    },
    {
        title: 'Арифметические знаки',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'signs',
    },
    {
        title: 'Реши задачу',
        secondTitle:
            'Айти в затерянном городе нашел площадь с тотемами. Всего тотемов было 5. Каждый тотем состоял из двух камней, и каждый камень - это изображение животного. Помоги АйТи узнать, сколько животных спряталось в тотемах всего?',
        status: true,
        index: 5,
        name: 'simpleTask',
        task: 'taskMult',
    },
    {
        title: 'Разбор задач',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'canvas',
    },
    {
        title: 'Игра на счет',
        secondTitle: 'Таблица умножения',
        status: true,
        index: 7,
        name: 'game',
        games: ['multTable'],
    },
];

const LESSONS_MENTAL_ARITH: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'welcome',
    },
    {
        title: 'Знакомство с Ментальной арифметикой: Видеопрезентация',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'MAO_video_present',
    },
    {
        title: 'Знакомство со счетами: Изучение элементов абакуса',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'schety',
        games: ['flashCards'],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'MaoStatisticsLesson',
    },
];

const LESSONS: Record<string, { themeName: string; lessons: ILesson[] }> = {
    'mult-table': {
        themeName: 'Таблица умножения',
        lessons: LESSONS_MULT_TABLE,
    },
    'mental-arithmetics': {
        themeName: 'Ментальная арифметика',
        lessons: LESSONS_MENTAL_ARITH,
    },
};

export function getLessons(theme: string) {
    return LESSONS[theme] || [];
}
