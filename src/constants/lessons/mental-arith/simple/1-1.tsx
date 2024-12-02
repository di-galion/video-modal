import api, { CloudType } from '../../../../api/http/api.ts';
import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';

const LESSONS_MENTAL_ARITH_SIMPLE: ILesson[] = [
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
        url: api.getCloudVideoUrl(CloudType.Simple, 'Знакомство.mp4'),
    },
    {
        title: 'Знакомство со счетами',
        secondTitle: 'Изучение элементов абакуса',
        status: true,
        index: 2,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация абакуса',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '1. Изучение элементов абакуса.mp4'
                ),
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
        title: 'Знакомство с цифрами',
        secondTitle: 'Цифры 0-4 на счетах. Однозначные',
        status: true,
        index: 3,
        name: 'panels',
        items: [
            {
                title: 'Способы обнуления абакуса',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '2. Способы обнуления абакуса.mp4'
                ),
            },
            {
                title: 'Флешкарта 0',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/1.4/fleshkart0.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 1',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/1.4/fleshkart1.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 2',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/1.4/fleshkart2.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 3',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/1.4/fleshkart3.jpg'
                ),
                imageWidth: 400,
            },
            {
                title: 'Флешкарта 4',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/schety/1.4/fleshkart4.jpg'
                ),
                imageWidth: 400,
            },
        ],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 4,
        games: ['flashCards'],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто 0-4"',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Действие +1 -1',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/1.6/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 1',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 1. «Просто 0-4». Разминка 1..mp4'
                ),
            },
            {
                title: 'Действие +2 -2',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/1.6/2.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 1. «Просто 0-4». Разминка 2..mp4'
                ),
            },
            {
                title: 'Действие +3 -3',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/1.6/3.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 1. «Просто 0-4». Разминка 3..mp4'
                ),
            },
            {
                title: 'Действие +4 -4',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/1.6/4.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 1. «Просто 0-4». Разминка 4..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 0-4". Однозначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '4. Демонстрация примера по теме Просто 4.mp4'
                ),
            },
            {
                title: 'Игра',
                type: 'games',
                games: [],
            },
        ],
    },
    {
        title: 'Включение воображения',
        secondTitle: 'Работа с визуализацией',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Визуализация ЦВЕТОЧНЫЙ РАЙ взрослые',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Визуализация КОРАБЛЬ взрослые',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Визуализация КОСМОС школьники',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Визуализация ПОДВОДНЫЙ МИР школьники',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
        ],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Тема "Просто 0-4". Однозначные',
        status: true,
        name: 'game',
        index: 8,
        games: ['flashCards'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 9,
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'total',
        items: [
            {
                title: 'Изучили элементы абакуса',
                imgUrl: createPath(
                    '/assets/img/lessons/schety/1.11/abacus.jpg'
                ),
                imgWidth: 720,
            },
            {
                title: 'Познакомились с цифрами от 0 до 4 на абакусе',
                imgUrl: [
                    createPath('/assets/img/lessons/schety/1.4/fleshkart0.jpg'),
                    createPath('/assets/img/lessons/schety/1.4/fleshkart1.jpg'),
                    createPath('/assets/img/lessons/schety/1.4/fleshkart2.jpg'),

                    createPath('/assets/img/lessons/schety/1.4/fleshkart3.jpg'),
                    createPath('/assets/img/lessons/schety/1.4/fleshkart4.jpg'),
                ],
                imgWidth: 400,
            },
            {
                title: 'Изучили правило работы на абакусе в пределах 4',
                imgUrl: [
                    createPath('/assets/img/lessons/schety/1.6/1.gif'),
                    createPath('/assets/img/lessons/schety/1.6/2.gif'),
                    createPath('/assets/img/lessons/schety/1.6/3.gif'),
                    createPath('/assets/img/lessons/schety/1.6/4.gif'),
                ],
                imgWidth: 400,
            },
            {
                title: 'Освоили счет по теме "Просто 4" на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто 4" на воображаемом абакусе',
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

export default ['Просто 0 - 4', LESSONS_MENTAL_ARITH_SIMPLE];
