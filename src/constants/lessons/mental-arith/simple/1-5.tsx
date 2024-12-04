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
        secondTitle: 'Тема "Просто". Круглые десятки и числа от 10 до 19',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5. «Просто. Круглые десятки и числа от 10 до 19». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5. «Просто. Круглые десятки и числа от 10 до 19». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5. «Просто. Круглые десятки и числа от 10 до 19». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5. «Просто. Круглые десятки и числа от 10 до 19». Разминка 4..mp4'
                ),
            },
            {
                title: 'Разминка 5',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5. «Просто. Круглые десятки и числа от 10 до 19». Разминка 5..mp4'
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
        secondTitle:
            'Закрепление темы "Просто". Круглые десятки и числа от 10 до 19. Двузначные',
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
        secondTitle:
            'Закрепление темы "Просто". Круглые десятки и числа от 10 до 19. Двухначные',
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
        secondTitle: 'Тема "Просто 44" и "Просто 55". Двузначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Действие и -44 и +44',
                type: 'image',
                url: '',
                imageWidth: 300,
            },
            {
                title: 'Действие и -55 и +55',
                type: 'image',
                url: '',
                imageWidth: 300,
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
        secondTitle: 'Тема "Просто 44-55"',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5.1«Просто 44-55». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5.2 «Просто 44-55». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 5.3 «Просто 44-55». Разминка 3..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 44 (зеркальный)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '13. Демонстрация примера по теме Просто 44 (зеркальный).mp4'
                ),
            },
            {
                title: 'Демонстрация примера 55 (зеркальный)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '14. Демонстрация примера по теме Просто 55 (зеркальный).mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 44-45". Двузначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 44',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '15. Демонстрация примера по теме Просто 44.mp4'
                ),
            },
            {
                title: 'Демонстрация примера 55',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '16. Демонстрация примера по теме Просто 55.mp4'
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
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 11,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Тема "Просто 44-45". Двузначные',
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
                title: 'Закрепили счет по теме "Просто 10-90" на физическом и воображаемом абакусе',
            },
            {
                title: 'Познакомились с числами в пределах 55 на абакусе',
            },
            {
                title: 'Познакомились правила счета в пределах 55 на абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто" в пределах 55 на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто" в пределах 55 на воображаемом абакусе',
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

export default ['Просто до 55', LESSONS_MENTAL_ARITH_SIMPLE];
