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
        games: ['bricks'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 8". Однозначные. Двузначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на общее развитие',
        secondTitle: '',
        status: true,
        index: 3,
        name: 'game',
        games: ['shadowTheater', 'dart', 'aboriginalsRiddles'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle:
            'Изучение темы "Друг+Брат 7". Изучение темы "Друг+Брат 6". Однозначные',
        status: true,
        index: 4,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг+Брат 7". Двузначные',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '15.Демонстрация примера по теме «Друг+Брат 7» (Двузначные)..mp4'
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
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг+Брат 6". Двузначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '16.Демонстрация примера по теме «Друг+Брат 6» (Двузначные)..mp4'
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
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг+Брат 7". Однозначные',
        status: true,
        index: 7,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг + Брат 7" и "Друг + Брат 6" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами по теме "Друг + Брат 7" и "Друг + Брат 6" на воображаемом абакусе (одноначные)',
            },
            {
                title: 'Освоили счет с правилами по теме "Друг + Брат 7" и "Друг + Брат 6" на физическом абакусе (одноначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг + Брат 7,6', LESSONS_MENTAL_ARITH_ANZAN];
