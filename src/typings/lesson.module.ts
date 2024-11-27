export type SimpleLessonName =
    | 'lesson1'
    | 'lesson2'
    | 'lesson3'
    | 'lesson4'
    | 'welcome'
    | 'empty'
    | 'task'
    | 'signs'
    | 'canvas'
    | 'MAO_video_present'
    | 'MaoStatisticsLesson';

export type GameLessonName = 'game';

export type SimpleTaskLessonName = 'simpleTask';

export type SchetyLessonName = 'schety';

export type GameLessonItem = {
    name: string;
    imgUrl: string;
    title: string;
};

export type LessonName =
    | SimpleLessonName
    | GameLessonName
    | SimpleTaskLessonName
    | SchetyLessonName;

interface IBaseLesson {
    title: string;
    secondTitle: string;
    status: boolean;
    index: number;
    bad?: boolean;
}

export interface ISimpleLesson extends IBaseLesson {
    name: LessonName;
}

export type LessonGameStatus = 'success' | 'fail' | 'notStarted';

export type GameLessonMode = 'list' | 'game';

export interface IGameLesson extends IBaseLesson {
    name: GameLessonName | SchetyLessonName;
    games: string[];
}

export interface ISimpleTaskLesson extends IBaseLesson {
    name: SimpleTaskLessonName;
    task: string;
}

export type ILesson = IGameLesson | ISimpleLesson | ISimpleTaskLesson;
