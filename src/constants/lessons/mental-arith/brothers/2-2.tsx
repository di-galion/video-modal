import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_2: ILesson[] = [
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
        secondTitle: 'Тема "Брат 1". Однозначные.',
        status: true,
        index: 1,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Brothers,
            'Занятие 2.1 «Брат 1». Разминка 1.mp4'
        ),
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 2,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Однозначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Однозначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },

    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема "Брат 1"',
        status: true,
        index: 7,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 1". Двузначные',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Brothers,
                    'Занятие 2.2 «Брат 1. Двузначные». Разминка 1..mp4'
                ),
            },

            {
                title: 'Игра',
                type: 'games',
                games: ['countExamples'],
                //реальные игры['countExamples']
            },
        ],
    },

    {
        title: 'Игра с Флешкартами',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Брат-1". Двузначные',
        status: true,
        index: 10,
        name: 'game',
        games: ['countExamples'],
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 11,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 12,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Брат 1" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Брат 1" на физическом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 1" на воображаемом абакусе (двузначные)',
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

export default ['Брат 1', LESSONS_MENTAL_ARITH_BROTHER_2];
