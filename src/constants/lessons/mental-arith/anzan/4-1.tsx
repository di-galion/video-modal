import { ILesson } from '../../../../typings/lesson.module';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

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
        games: ['flashCards'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двухзначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Друг 1". Однозначные. Двухзначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
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
        index: 5,
        name: 'image',
        url: createPath('/assets/img/lessons/ma_addon/universal.5.1.jpg'),
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема Друг+Брат 9',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Правило. Друг+Брат 9 (+9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '1.Знакомство с правилом «Друг+Брат 9» (+9)..mp4'
                ),
            },
            {
                title: 'Друг+Брат 9 (+9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.6/1.gif'
                ),
            },
            {
                title: 'Правило. Друг+Брат 9 (-9)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '2.Знакомство с правилом «Друг+Брат 9» (-9)..mp4'
                ),
            },
            {
                title: 'Друг+Брат 9 (-9)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.6/2.gif'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг+Брат 9". Однозначные',
        status: true,
        index: 7,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Anzan,
            '3.Демонстрация примера по теме «Друг+Брат 9» (Однозначные)..mp4'
        ),
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема Друг+Брат 8',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Правило. Друг+Брат 8 (+8)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '3.Демонстрация примера по теме «Друг+Брат 9» (Однозначные)..mp4'
                ),
            },
            {
                title: 'Друг+Брат 8 (+8)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.8/1.gif'
                ),
            },
            {
                title: 'Правило. Друг+Брат 8 (-8)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '4.Знакомство с правилом «Друг+Брат 8» (+8)..mp4'
                ),
            },
            {
                title: 'Друг+Брат 8 (-8)',
                type: 'image',
                url: createPath(
                    '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.8/2.gif'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг+Брат 8". Однозначные',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '5.Знакомство с правилом «Друг+Брат 8» (-8)..mp4'
                ),
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
            },
        ],
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг+Брат 8". Однозначные ',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '6.Демонстрация примера по теме «Друг+Брат 8» (Однозначные)..mp4'
                ),
            },
            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
            },
        ],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'total',
        items: [
            {
                title: 'Изучили правило "Друг + Брат 9"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.11/punkt1/1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.11/punkt1/2.gif'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Освоили счет с правилом "Друг + Брат 9" на физическом абакусе (однозначные)',
            },
            {
                title: 'Изучили правило "Друг + Брат 8"',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.11/punkt3/1.gif'
                    ),
                    createPath(
                        '/assets/img/lessons/anzan-img/1/ma/friendandbrother1.11/punkt3/2.gif'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Освоили счет с правилом "Друг + Брат 8" на физическом абакусе (однозначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 13,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг + Брат 9,8', LESSONS_MENTAL_ARITH_ANZAN];
