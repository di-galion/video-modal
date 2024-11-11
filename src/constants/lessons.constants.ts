import { ILesson } from '../typings/lesson.module';

export const LESSONS: ILesson[] = [
    /*{
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'welcome',
    },*/
    {
        title: 'Игры',
        secondTitle: 'Таблица умножения',
        status: true,
        index: 0,
        name: 'game',
        games: [
            {
                title: 'Горная тропа',
                name: 'mountainTrail',
                imgUrl: '/assets/img/gameCovers/mountainTrail.png',
            },
            {
                title: 'Таблица умножения',
                name: 'multTable',
                imgUrl: '/assets/img/gameCovers/multTable.png',
            },
            {
                title: 'Вторжение',
                name: 'invasion',
                imgUrl: '/assets/img/gameCovers/invasion.png',
            },
        ],
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
                imgUrl: '/assets/img/gameCovers/laboratory.png',
                title: 'Лаборатория',
            },
        ],
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
        games: [
            {
                name: 'multTable',
                imgUrl: '/assets/img/gameCovers/multTable.png',
                title: 'Таблица умножения',
            },
        ],
    },
];

export const LESSON_COUNT = LESSONS.length;
