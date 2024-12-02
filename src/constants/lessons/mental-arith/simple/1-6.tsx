import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';
import api, { CloudType } from '../../../../api/http/api.ts';

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
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто 55"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 55». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 55». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 55». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 55». Разминка 4..mp4'
                ),
            },
        ],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: [],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Просто 55". Двузначные',
        status: true,
        index: 3,
        name: 'game',
        games: [],
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
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Просто 55". Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Просто 99". Двузначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Действие +7 -6',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/6.8/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +70 -60',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/6.8/2.jpg'),
                imageWidth: 400,
            },
        ],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'game',
        games: [],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Действие +99 -99',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/6.10/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Разминка 1',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 99». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 99». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 99». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 6. «Просто 99». Разминка 4..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 99". Двузначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 99 (зеркальный)',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '17. Демонстрация примера по теме Просто 99 (зеркальный) (1).mp4'
                ),
            },
            {
                title: 'Демонстрация примера 99',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '18. Демонстрация примера по теме Просто 99.mp4'
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
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 11,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Тема "Просто 99". Двузначные',
        status: true,
        name: 'game',
        index: 12,
        games: ['flashCards'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 13,
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 14,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Просто 55" на физическом и воображаемом абакусе',
            },
            {
                title: 'Познакомились с числами в пределах 99 на абакусе',
            },
            {
                title: 'Изучили правила счета в пределах 99 на абакусе',
                imgUrl: createPath(
                    '/assets/img/lessons/schety/6.15/fleshkart99.jpg'
                ),
                imgWidth: 400,
            },
            {
                title: 'Освоили счет по теме "Просто" в пределах 99 на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто" в пределах 99 на воображаемом абакусе',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 15,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 5', LESSONS_MENTAL_ARITH_SIMPLE];
