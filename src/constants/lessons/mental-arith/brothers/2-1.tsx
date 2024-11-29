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
        title: 'Разминка на абакусе: Тема "просто"',
        secondTitle: '',
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
        name: 'panels',
        items: [
            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['flashCards'],
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
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 0 - 4', LESSONS_MENTAL_ARITH_BROTHER_1];

