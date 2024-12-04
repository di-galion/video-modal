import { ILesson } from '../../../../typings/lesson.module';
import { createPath } from '../../../../utils/createPath';

const LESSONS_MENTAL_ARITH_ADDON_2: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/hello.jpg'),
    },
    {
        title: 'Счет на физическом абакусе. Определение уровня обучения',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на воображаемом абакусе. Определение уровня обучения',
        secondTitle: '',
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
        title: 'Разминка на абакусе',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'image',
        url: createPath('/assets/img/lessons/ma_addon/universal.5.1.jpg'),
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: '',
        status: true,
        index: 5,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards', 'completeRow'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'game',
        games: [],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'total',
        items: [
            {
                title: 'Определили уровень обучения',
                imgUrl: createPath(
                    '/assets/img/lessons/ma_addon/conclusion1.jpg'
                ),
                imgWidth: 400,
            },
            {
                title: 'Познакомились с онлайн-обакусом в приложении',
                imgUrl: createPath(
                    '/assets/img/lessons/ma_addon/conclusion2.jpg'
                ),
                imgWidth: 600,
            },
            {
                title: 'Познакомились с режимом Touch',
                imgUrl: createPath(
                    '/assets/img/lessons/ma_addon/conclusion.gif'
                ),
                imgWidth: 800,
            },
            {
                title: 'Познакомились с развивающими и увлекательными играми',
                imgUrl: createPath(
                    '/assets/img/lessons/ma_addon/conclusion4.jpg'
                ),
                imgWidth: 800,
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Занятие для определения уровня', LESSONS_MENTAL_ARITH_ADDON_2];
