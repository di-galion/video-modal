import { ILesson } from '../../../../typings/lesson.module.ts';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';
import { CloudType } from '../../../../api/http/api.ts';

const LESSONS_MENTAL_ARITH_FRIENDS_14: ILesson[] = [
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
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
        //реальные игры ['bricks', 'gifts', 'kaleidoscope','vitaMIX']
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Закрепление темы "Друг 2". Однозначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['flashCards'],
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
        secondTitle: 'Изучение темы "Друг 2"',
        status: true,
        index: 4,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 3" Двузначные',
        status: true,
        index: 5,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Friends,
            '31.Демонстрация примера по теме «Друг 3» (Двузначные)..mp4'
        ),
    },

    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 3". Двузначные',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },
    {
        title: 'Изучение новой темы',
        secondTitle: 'Тема "Друг 2". Двузначные',
        status: true,
        index: 7,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Friends,
            '32.Демонстрация примера по теме «Друг 2» (Двузначные)..mp4'
        ),
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Друг 2". Двузначные',
        status: true,
        index: 8,
        name: 'game',
        games: ['flashCards'],
        //реальные игры['countExamples']
    },

    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 9,
        name: 'game',
        games: ['flashCards', 'flashCards', 'flashCards', 'flashCards'],
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
                title: 'Закрепили счет по теме "Друг 3" и "Друг 2" на физическом абакусе (однозначные)',
            },
            {
                title: 'Освоили счет с правилами "Друг 3" и "Друг 2" на воображаемом абакусе (двузначные)',
            },
            {
                title: 'Освоили счет с правилом "Друг 3" и "Друг 2" на физическом абакусе (двузначные)',
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

export default ['Друг 3, 2', LESSONS_MENTAL_ARITH_FRIENDS_14];
