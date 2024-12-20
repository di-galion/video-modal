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
        secondTitle: 'Закрепление темы "Друг+Брат 8". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 8". Однозначные. Двузначные',
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
        secondTitle: 'Тема Друг+Брат 7',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Правило. Друг+Брат 7 (+7)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг+Брат 7 (+7)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.6/1.gif'
                ),
            },
            {
                title: 'Правило. Друг+Брат 7 (-7)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг+Брат 7 (-7)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.6/2.gif'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 7". Однозначные',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема Друг+Брат 6',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Правило. Друг+Брат 6 (+6)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг+Брат 6 (+6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.8/1.gif'
                ),
            },
            {
                title: 'Правило. Друг+Брат 6 (-6)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Друг+Брат 6 (-6)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.8/2.gif'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 6". Однозначные',
        status: true,
        index: 8,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: [],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг + Брат 8" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Друг + Брат 8" на физическом абакусе и воображаемом абакусе (двузначные)',
            },
            {
                title: 'Изучили правило "Друг + Брат 7"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.11/punkt3/1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.11/punkt3/2.gif'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Освоили счет с правилом "Друг + Брат 7" на физическом абакусе абакусе (однозначные)',
            },
            {
                title: 'Изучили правило "Друг + Брат 6"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.11/punkt5/1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/anzan-img/4/ma/friendandbrother4.11/punkt5/2.gif'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Освоили счет с правилом "Друг + Брат 6" на физическом абакусе абакусе (однозначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг + Брат 7,6', LESSONS_MENTAL_ARITH_ANZAN];
