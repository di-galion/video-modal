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
        secondTitle: 'Тема "Просто 555"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 555». Разминка 1.mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 555». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 555». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 555». Разминка 4..mp4'
                ),
            },
        ],
    },
    {
        title: 'Игра на счет',
        secondTitle: 'На выбор: тема "Просто 99" или "Просто 555"',
        status: true,
        index: 2,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Просто 555". Трехзначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
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
        secondTitle: 'Закрепление темы "Просто 99". Двузначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: 'З',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },
    {
        title: 'Знакомство с новой темой',
        secondTitle: 'Тема "Просто 999". Трехзначные',
        status: true,
        index: 7,
        name: 'image',
        url: createPath('/assets/img/lessons/schety/8.8/fleshkart999.jpg'),
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
        secondTitle: 'Тема "Просто 999"',
        status: true,
        index: 9,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 999 (зеркальный)',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '26. Демонстрация примера по теме Просто 999 (зеркальный).mp4'
                ),
            },
            {
                title: 'Разминка 1',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 999». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 999». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 8. «Просто 999». Разминка 3..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 999". Трехзначные',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Simple,
                    '27. Демонстрация примера по теме Просто 999.mp4'
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
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 11,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle:
            'Тема "Просто 9". Тема "Просто 99". Однозначные. Двухначные',
        status: true,
        name: 'game',
        index: 12,
        games: ['countExamples'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 13,
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 14,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Просто 555" на физическом абакусе',
            },
            {
                title: 'Закрепили счет по теме "Просто 99" на воображаемом абакусе',
            },
            {
                title: 'Изучили правила счета в пределах 999 на абакусе',
                imgUrl: createPath('/assets/img/lessons/schety/8.8/1.gif'),

                imgWidth: 300,
            },
            {
                title: 'Освоили счет по теме "Просто 999" на физическом абакусе',
            },
            {
                title: 'Успешно завершили тему "Просто"!',
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

export default ['Просто до 999', LESSONS_MENTAL_ARITH_SIMPLE];
