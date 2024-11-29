import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_PROSTO_0_4: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/welcome/welcome.png'),
    },
    {
        title: 'Знакомство с Ментальной арифметикой: Видеопрезентация',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'video',
        url: createPath('/assets/video/720.mp4'),
    },
    {
        title: 'Знакомство со счетами: Изучение элементов абакуса',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация абакуса',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Рамка',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/img/ramka.gif'),
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
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 0 - 4', LESSONS_MENTAL_ARITH_PROSTO_0_4];
