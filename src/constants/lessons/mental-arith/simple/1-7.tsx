import { ILesson } from '../../../../typings/lesson.module.ts';
import { createPath } from '../../../../utils/createPath.ts';
import api, { CloudType } from '../../../../api/http/api.ts';

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
        secondTitle: 'Тема "Просто 99"',
        status: true,
        index: 1,
        name: 'panels',
        items: [
            {
                title: 'Разминка 1',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7. «Просто 99». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7. «Просто 99». Разминка 2..mp4'
                ),
            },
            {
                title: 'Разминка 3',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7. «Просто 99». Разминка 3..mp4'
                ),
            },
            {
                title: 'Разминка 4',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7. «Просто 99». Разминка 4..mp4'
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
        secondTitle: 'Закрепление темы "Просто 99". Двузначные',
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
        secondTitle: 'Закрепление темы "Просто 99". Двузначные',
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
        secondTitle: 'Тема "Просто". Круглые сотни. Трехзначные',
        status: true,
        index: 7,
        name: 'panels',
        items: [
            {
                title: 'Числа 100 900',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '19. Знакомство с числами 100-900.mp4'
                ),
            },
            {
                title: 'Действие +100 -100',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/1.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +200 -200',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/2.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +300 -300',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/3.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +400 -400',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/4.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +500 -500',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/5.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +600 -600',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/6.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +700 -700',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/7.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +800 -800',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/8.gif'),
                imageWidth: 400,
            },
            {
                title: 'Действие +900 -900',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.8/9.gif'),
                imageWidth: 400,
            },
        ],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: '',
        status: true,
        index: 8,
        name: 'panels',
        items: [
            {
                title: 'Разминка',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7. «Просто. Круглые сотни». Разминка 1.mp4'
                ),
            },
            {
                title: 'Демонстрация примера. Круглые сотни',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '20. Демонстрация примера по теме 100-900.mp4'
                ),
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
        title: 'Правила работы с трехзначными чисдами',
        secondTitle: 'Движения рук при счете на абабусе',
        status: true,
        index: 10,
        name: 'panels',
        items: [
            {
                title: 'Правила работы ведущей руки',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '21. Правила счета примеров с трехзначными числами.mp4'
                ),
            },
            {
                title: 'Правила счета. Ведущая рука правая',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.17/pravaya.gif'),
                imageWidth: 400,
            },
            {
                title: 'Правила счета. Ведущая рука левая',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.17/levaya.gif'),
                imageWidth: 400,
            },
            {
                title: 'Правила счета. Направление при счете',
                type: 'image',
                url: createPath('/assets/img/lessons/schety/7.17/pravila.gif'),
                imageWidth: 400,
            },
            {
                title: 'Демонстрация примера. Ведущая рука правая',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '22. Демонстрация примера. Ведущая рука правая.mp4'
                ),
            },
            {
                title: 'Демонстрация примера. Ведущая рука левая',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '23. Демонстрация примера. Ведущая рука левая.mp4'
                ),
            },
        ],
    },
    {
        title: 'Разминка на абакусе',
        secondTitle: 'Тема просто "555"',
        status: true,
        index: 11,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера 555 (зеркальный)',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '24. Демонстрация примера по теме Просто 555 (зеркальный).mp4'
                ),
            },
            {
                title: 'Разминка 1',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7.1 «Просто 555». Разминка 1..mp4'
                ),
            },
            {
                title: 'Разминка 2',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    'Занятие 7.2 «Просто 555». Разминка 2..mp4'
                ),
            },
        ],
    },
    {
        title: 'Счет на физическом абакусе',
        secondTitle: 'Тема "Просто 555". Трехзначные',
        status: true,
        index: 12,
        name: 'panels',
        items: [
            {
                title: 'Демонстрация примера',
                type: 'video',
                url: api.getCloudVideoUrl(
                    CloudType.Simple,
                    '25. Демонстрация примера по теме Просто 555.mp4'
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
        index: 13,
        games: ['flashCards'],
    },
    {
        title: 'Счет на воображаемом абакусе',
        secondTitle: 'Тема "Просто 99". Двухначные',
        status: true,
        name: 'game',
        index: 14,
        games: ['flashCards'],
    },
    {
        title: 'Игра на счет',
        secondTitle: '',
        status: true,
        name: 'game',
        index: 15,
        games: ['flashCards'],
    },
    {
        title: 'Заключение',
        secondTitle: '',
        status: true,
        index: 16,
        name: 'total',
        items: [
            {
                title: 'Закрепили счет по теме "Просто 99" на физическом и воображаемом абакусе',
            },
            {
                title: 'Познакомились с числами 100-900 на абакусе',
                imgUrl: [
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart100.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart200.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart300.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart400.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart500.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart600.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart700.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart800.jpg'
                    ),
                    createPath(
                        '/assets/img/lessons/schety/7.17/fkeshkart900.jpg'
                    ),
                ],
                imgWidth: 300,
            },
            {
                title: 'Изучили правила счета трехзначных чисел 100-900 (круглые сотни) на абакусе',
                imgUrl: createPath('/assets/img/lessons/schety/7.17/900.gif'),
                imgWidth: 400,
            },
            {
                title: 'Познакомились с правилами работы ведущей руки при выполнении действий с треззначными числами на абакусе',
                imgUrl: [
                    createPath('/assets/img/lessons/schety/7.17/pravaya.gif'),
                    createPath('/assets/img/lessons/schety/7.17/levaya.gif'),
                ],
                imgWidth: 400,
            },
            {
                title: 'Познакомились с порядком выполнения действий "сложение" и "вычитание" на абакусе',
                imgUrl: createPath(
                    '/assets/img/lessons/schety/7.17/pravila.gif'
                ),
                imgWidth: 400,
            },
            {
                title: 'Изучили правила счета в пределах 555 на абакусе',
                imgUrl: createPath('/assets/img/lessons/schety/7.17/555.gif'),
                imgWidth: 400,
            },
            {
                title: 'Освоили счет по теме "Просто 100-900" (круглые сотни) на физическом абакусе',
            },
            {
                title: 'Освоили счет по теме "Просто" в пределах 555 на физическом абакусе',
            },
        ],
    },
    {
        title: 'Статистика',
        secondTitle: '',
        status: true,
        index: 17,
        name: 'MaoStatisticsLesson',
    },
];

export default ['Просто до 555', LESSONS_MENTAL_ARITH_SIMPLE];
