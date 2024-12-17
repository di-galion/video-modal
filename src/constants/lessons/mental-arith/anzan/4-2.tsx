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
        secondTitle:
            'Закрепление темы "Друг+Брат 9". Закрепление темы "Друг+Брат 8. Однозначные',
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
            'Изучение темы "Друг+Брат 9". Изучение темы "Друг+Брат 8. Однозначные',
        status: true,
        index: 4,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг+Брат 9. Двузначные',
        status: true,
        index: 5,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '7.Демонстрация примера по теме «Друг+Брат 9» (Двузначные)..mp4'
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
        secondTitle: 'Изучение темы "Друг+Брат 8. Двузначные',
        status: true,
        index: 6,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Anzan,
                    '8.Демонстрация примера по теме «Друг+Брат 8» (Двузначные)..mp4'
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
        index: 7,
        name: 'game',
        games: ['bricks'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Друг + Брат 9" + "Друг + Брат 8" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами "Друг + Брат 9" и "Друг + Брат 8" на воображаемом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами "Друг + Брат 9" + "Друг + Брат 8" на физическом абакусе (двузначные)',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Друг + Брат 9,8', LESSONS_MENTAL_ARITH_ANZAN];
