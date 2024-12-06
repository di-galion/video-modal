import { CloudType } from '../api/http/api';
import { MultTableItemsType } from '../components/mult-table/MultTable';

export type SimpleLessonName =
    | 'lesson1'
    | 'lesson2'
    | 'lesson3'
    | 'lesson4'
    | 'empty'
    | 'signs'
    | 'canvas'
    | 'MaoStatisticsLesson';

export type GameLessonName = 'game';

export type SimpleTaskLessonName = 'simpleTask';

export type VideoLessonName = 'video';

export type ImageLessonName = 'image';

export type PanelLessonName = 'panels';

export type TotalLessonName = 'total';

export interface PanelLessonItemBase {
    title: string;
    imageWidth?: number;
    stage?: boolean;
    stageTitle?: string;
    height?: number;
}

export interface PanelLessonItemVideo extends PanelLessonItemBase {
    type: 'video';
    url: string | [CloudType, string];
}

export interface PanelLessonItemImage extends PanelLessonItemBase {
    type: 'image';
    url: string;
}

export interface PanelLessonItemGames extends PanelLessonItemBase {
    type: 'games';
    games: string[];
}

export interface PanelLessonItemMultTable extends PanelLessonItemBase {
    type: 'multTable';
    itemsType: MultTableItemsType;
}

export type IPanelLessonItem =
    | PanelLessonItemVideo
    | PanelLessonItemImage
    | PanelLessonItemGames
    | PanelLessonItemMultTable;

export interface IPanelLesson extends IBaseLesson {
    name: PanelLessonName;
    items: IPanelLessonItem[];
}

export type ITotalLessonItem = {
    title: string;
    imgUrl?: string | string[];
    imgWidth?: number;
};

export interface ITotalLesson extends IBaseLesson {
    name: TotalLessonName;
    items: ITotalLessonItem[];
}

export interface ITotalLesson extends IBaseLesson {
    name: TotalLessonName;
    items: ITotalLessonItem[];
}

export type GameLessonItem = {
    name: string;
    imgUrl: string;
    title: string;
};

export type LessonName =
    | SimpleLessonName
    | GameLessonName
    | SimpleTaskLessonName
    | VideoLessonName
    | PanelLessonName
    | ImageLessonName
    | TotalLessonName;

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

export interface IVideoLesson extends IBaseLesson {
    name: VideoLessonName;
    url: string | [CloudType, string];
}

export interface IImageLesson extends IBaseLesson {
    name: ImageLessonName;
    url: string;
}

export interface IGameLesson extends IBaseLesson {
    name: GameLessonName;
    games: string[];
}

export interface ISimpleTaskLesson extends IBaseLesson {
    name: SimpleTaskLessonName;
    task: string;
}

export type ILesson =
    | IGameLesson
    | ISimpleLesson
    | ISimpleTaskLesson
    | IVideoLesson
    | IPanelLesson
    | IImageLesson
    | ITotalLesson;
