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
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двухзначные',
        status: true,
        index: 2,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двухзначные',
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
        title: 'Разминка',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'image',
        url: createPath('/assets/img/lessons/ma_addon/universal.5.1.jpg'),
    },
    {
        title: 'Изучение общей темы',
        secondTitle: 'Тема Друг+Брат 9',
        status: true,
        index: 2,
        name: 'panels',
        items: [
            {
                title: 'Правило. Друг+Брат 9 (+9)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг+Брат 9 (+9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.6/1.gif'
                ),
            },
            {
                title: 'Планка',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/img/planka.gif'),
            },
            {
                title: 'Ряды',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/img/ryady.gif'),
            },
            {
                title: 'Земные косточки',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/img/kostochki.gif'),
            },
            {
                title: 'Небесные косточки',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/img/nebesnye_kostochki.gif'
                ),
            },
            {
                title: 'Абакус',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/img/abacus.jpg'),
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
            },
        ],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'game',
        games: ['flashCards', 'completeRow'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: [],
    },

    {
        title: 'Разминка',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'image',
        url: createPath('/assets/img/lessons/ma_addon/universal.5.1.jpg'),
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'game',
        games: ['flashCards', 'completeRow'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на общее развитие',
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

export default ['Друг + Брат 9,8', LESSONS_MENTAL_ARITH_ANZAN];
