import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_5: ILesson[] = [
    {
        title: 'Приветствие',
        secondTitle: '',
        status: true,
        index: 0,
        name: 'image',
        url: createPath('/assets/img/lessons/brother-img/1/ma/hello/hello.jpg'),
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 1,
        name: 'game',
        games: ['bricks'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 6". Однозначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
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
        secondTitle: 'Изучение темы "Друг 6". Однозначные',
        status: true,
        index: 4,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 7" Двузначные',
        status: true,
        index: 5,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Friends,
            '15.Демонстрация примера по теме «Друг 7» (Двузначные)..mp4'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 7". Двузначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['countExamples'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 6" Двузначные',
        status: true,
        index: 7,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Friends,
            '16.Демонстрация примера по теме «Друг 6» (Двузначные)..mp4'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 6". Двузначные',
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
        games: ['bricks'],
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
                title: 'Закрепили счет по теме "Друг 7" и "Друг 6" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами "Друг 7" и "Друг 6" на воображаемом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Друг 7" и "Друг 6" на физическом абакусе (двузначные)',
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

export default ['Друг 7, 6', LESSONS_MENTAL_ARITH_FRIENDS_5];
