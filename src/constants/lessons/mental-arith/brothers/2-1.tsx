import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_BROTHER_1: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/brother-img/1/ma/hello/hello.jpg'),
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "просто"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ]
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные.',
        status: true,
        index: 3,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['completeRow','flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },
    {
        title: 'Знакомство с темой братья',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Брат 1 (1-4 крокодильчики)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'),
            },
            {
                title: 'Брат 2 (2-3 бегемотики)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.8/2.jpg'),
            },
            {
                title: 'Брат 3 (3-2 жирафы)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.8/3.jpg'),
            },
            {
                title: 'Брат 4 (4-1 тигрята)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.8/4.jpg'),
            },
        ]
    },
    {
        title: 'Игра на состав числа 5 "Лаборатория"',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 8,
        name: 'game',
        games: ['laboratory'],
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Брат 1',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Правило. Брат 1 (+1)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Брат 1 (+1)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.10/gif1.brat1+1/plus1.gif'),
            },
            {
                title: 'Правило. Брат 1 (-1)',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Брат 1 (-1)',
                type: 'image',
                url: createPath('/assets/img/lessons/brother-img/1/ma/brothers1.10/gif2.brat1-1/minus1.gif'),
            },
        ]
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 1"',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ]
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 1". Однозначные.',
        status: true,
        index: 11,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
            }
        ]
    },

    {
        title: 'Игра с Флешкартами',
        secondTitle: 'Закрепление темы "просто". Двухзначные. Трехзначные',
        status: true,
        index: 12,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Брат-1". Однозначные.',
        status: true,
        index: 13,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Брат 1". Двухзначные.',
        status: true,
        index: 14,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 1. Круглые десятки',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 2. Правило в десятках',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Демонстрация примера 4. Любые числа',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
            }
        ]
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 15,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 16,
        name: 'total',
        items: [
            {
                title: 'познакомились с темой братья',
                imgUrl: [createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/brother-img/1/ma/brothers1.8/1.jpg'
                    )],
                imgWidth:800,
            },
            {
                title: '',
                imgUrl: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/2.jpg'
                ),
                imgWidth: 800,
            },
            {
                title: 'Познакомились с режимом Touch',
                imgUrl: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/3.jpg'
                ),
                imgWidth: 800,
            },
            {
                title: 'Познакомились с развивающими и увлекательными играми',
                imgUrl: createPath(
                    '/assets/img/lessons/brother-img/1/ma/brothers1.8/4.jpg'
                ),
                imgWidth: 800,
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 17,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Брат 1', LESSONS_MENTAL_ARITH_BROTHER_1];

