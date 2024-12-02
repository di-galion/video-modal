import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

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
        secondTitle: 'Тема "Просто 0-4"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто 9». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто 9». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто 9». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто 9». Разминка 4..mp4'
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
        secondTitle: 'Закрепление темы "Просто 9". Однозначные',
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
        secondTitle: 'Закрепление темы "Просто 9". Однозначные',
        status: true,
        index: 5,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: 'З',
        status: true,
        index: 6,
        name: 'game',
        games: [],
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Просто". Круглые десятки',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Число 10',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +10 -10',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 20',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +20 -20',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/2.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 30',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +30 -30',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/3.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 40',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +40 -40',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/4.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 50',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +50 -50',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/5.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 60',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +60 -60',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/6.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 70',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +70 -70',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/7.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 80',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +80 -80',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/8.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 90',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +90 -90',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.8/9.gif'),
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
        games: ['flashCards'],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто". Круглые десятки',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто. Круглые десятки». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто. Круглые десятки». Разминка 2..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто". Круглые десятки. Двузначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '10. Демонстрация примера по теме Просто 10-90.mp4'
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
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Просто". Числа от 10 до 19',
        status: true,
        index: 11,
        name: 'panels',
        items: [
            {
                title: 'Число 11',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +11 -11',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 12',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +12 -12',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/2.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 13',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +13 -13',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/3.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 14',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +14 -14',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/4.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 15',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +15 -15',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/5.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 16',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +16 -16',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/6.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 17',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +17 -17',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/7.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 18',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +18 -18',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/8.gif'),
                imageWidth: 400,
            },
            {
                title: 'Число 19',
                type: 'video',
                url: createPath('/assets/video/720.mp4'),
            },
            {
                title: 'Действие +19 -19',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/4.12/9.gif'),
                imageWidth: 400,
            },
        ],
    },
    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 12,
        games: ['flashCards'],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Просто". Числа от 10 до 19',
        status: true,
        index: 13,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто. Числа от 10 до 19». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 4. «Просто. Числа от 10 до 19». Разминка 2..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто" Числа от 10 о 19. Двузначные',
        status: true,
        index: 14,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '12. Демонстрация примера по теме Просто 11-19.mp4'
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
        index: 15,
        games: ['flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle:
            'Тема "Просто". Круглые десятки и числа от 10 о 19. Двузначные',
        status: true,
        index: 16,
        name: 'game',
        games: [],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 17,
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 18,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Просто 9" на физическом и воображаемом абакусе',
            },
            {
                title: 'Познакомились с круглыми дясятками на абакусе',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard10.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard20.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard30.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard40.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard50.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard60.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard70.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard80.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard90.jpg'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Познакомились с числами 10-19 на абакусе',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard10.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard11.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard12.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard13.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard14.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard15.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard16.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard17.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard18.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/4.19/flashkard19.jpg'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Изучили правила счета двузначных чисел',
                imgUrl: [
                    createPath('/assets/img/lessons/schety/4.19/19.gif'),
                    createPath('/assets/img/lessons/schety/4.19/90.gif'),
                ],
            },
            {
                title: 'Освоили счет по теме "Просто 10-90" (круглые десятки) на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто 10-90" (круглые десятки) на воображаемом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто 10-19" на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто 10-19" на воображаемом абакусе',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 19,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто 10-19', LESSONS_MENTAL_ARITH_SIMPLE];
