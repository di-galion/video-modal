export type SimpleLessonName =
    | 'lesson1'
    | 'lesson2'
    | 'lesson3'
    | 'lesson4'
    | 'welcome'
    | 'empty'
    | 'task'
    | 'signs'
    | 'canvas';

export type GameLessonName = 'game';

export type SimpleTaskLessonName = 'simpleTask';

export type GameLessonItem = {
    name: string;
    title: string;
    imgUrl: string;
};

export type LessonName =
    | SimpleLessonName
    | GameLessonName
    | SimpleTaskLessonName;

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
    name: GameLessonName;
    games: GameLessonItem[];
}

export interface ISimpleTaskLesson extends IBaseLesson {
    name: SimpleTaskLessonName;
    task: string;
}

export type ILesson = IGameLesson | ISimpleLesson | ISimpleTaskLesson;
