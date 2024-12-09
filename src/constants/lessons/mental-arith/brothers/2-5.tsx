import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_BROTHER_5: ILesson[] = [
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
        secondTitle: 'Тема "Брат 2"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 1. Круглые десятки',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    'Занятие 5. «Брат 2». Разминка 1..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 2. Правило в десятках',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    'Занятие 5. «Брат 2». Разминка 2..mp4'
                ),
            },
            {
                title: 'Демонстрация примера 3. Зеркальный',
                type: 'video',
                url: createCloudVideoUrl(
                    CloudType.Friends,
                    'Занятие 5. «Брат 2». Разминка 3..mp4'
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
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Брат 2". Однозначные. Двузначные',
        status: true,
        index: 3,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },
    {
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },

    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Брат 2". Однозначные',
        status: true,
        index: 5,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
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
        title: 'Игры с флешкартами',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['flashCards', 'treasureValley', 'pearlDivers','antiqueShop']
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Изучение темы "Брат 2". Двузначные',
        status: true,
        index: 8,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: ['flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 10,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Брат 2" на физическом и воображаемом абакусе (однозначные)',
            },
            {
                title: 'Закрепили счет по теме "Брат 2" на физическом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Брат 2" на воображаемом абакусе (двузначные)',
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

export default ['Брат 2', LESSONS_MENTAL_ARITH_BROTHER_5];
