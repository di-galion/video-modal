import { CloudType } from '../../../../api/http/api';
import { ILesson } from '../../../../typings/lesson.module';
import {
    createCloudVideoUrl,
    createPath,
} from '../../../../utils/createPath.ts';

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
        secondTitle: 'Закрепление темы "Анзан". Случайные числа. Однозначные',
        status: true,
        index: 2,
        name: 'game',
        games: ['countExamples'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Закрепление темы "Анзан". Случайные числа. Однозначные',
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
        title: 'Счет на физическом абакусе',
        secondTitle: 'Изучение темы "Анзан". Случаные числа. Двузначные',
        status: true,
        index: 5,
        name: 'video',
        url: createCloudVideoUrl(
            CloudType.Anzan,
            '20.Демонстрация примера по теме «Анзан. Случайные числа» (Двузначные)..mp4'
        ),
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        index: 6,
        name: 'game',
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 7,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Анзан", подтема "Случаные числа" на физическом и воображаемом абакусе (однозначные с промежуточным двузначным ответом)',
            },
            {
                title: 'Освоили счет по теме "Анзан", подтема "Случаные числа" на физическом абакусе (однозначные с промежуточным двузначным ответом)',
            },
            {
                title: 'Успешно завершили тему "Анзан"!',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Случайные числа', LESSONS_MENTAL_ARITH_ANZAN];
