export type SimpleLessonName =
    | 'lesson1'
    | 'lesson2'
    | 'lesson3'
    | 'lesson4'
    | 'welcome'
    | 'empty';

export type GameLessonName = 'game';

export type GameLessonItem = {
    name: string;
    title: string;
    imgUrl: string;
};

export type LessonName = SimpleLessonName | GameLessonName;

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
    gameStatus: Record<string, LessonGameStatus>;
}

export type ILesson = IGameLesson | ISimpleLesson;
