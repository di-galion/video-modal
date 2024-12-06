import { ILesson } from '../../../typings/lesson.module';
import { createPath } from '../../../utils/createPath';

const LESSONS_MULT_TABLE_1: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/welcome/welcome.png'),
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
        name: 'panels',
        items: [
            {
                type: 'multTable',
                itemsType: 'OneDigit',
                title: 'Реши примеры',
                stage: true,
            },
            {
                type: 'multTable',
                itemsType: 'TwoDigits',
                title: 'Реши примеры',
                stage: true,
            },
        ],
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

export default ['таблица умножения', LESSONS_MULT_TABLE_1];
