import { ControlProps } from './settings.module';

export type SettingValue = number | number[] | string | string[];

export type GameStatus =
    | 'start'
    | 'settings'
    | 'finish'
    | 'info'
    | 'game'
    | 'waiting';

export type TimeDirection = 'right' | 'left';
export type IGameStateSettings = Record<string, SettingValue>;
export type StarCalculationMode = 'speed' | 'correct' | 'speed-correct-mode';

export type InfoSetting = {
    title: string;
    texts: string[];
    fullRow?: boolean;
};

export type StartGameProps = {
    title: string;
    subTitle1: string;
    subTitle2?: string;
    subTitle3?: string;
    titleBottom: string;
};

export type GameData = {
    title: string;
    timeDirection: TimeDirection;
    infoSettings: InfoSetting[];
    settings: ControlProps[];
    start: StartGameProps;
    startTable?: { text: string; value: SettingValue }[];
    starCalculationMode?: StarCalculationMode;
    showLevel?: boolean;
};

export interface IGameState {
    status: GameStatus;
    settings: IGameStateSettings;
    gameName: string;
    gameSection: string;
    task: [];
    result: {
        correctAnswers: number;
        allAnswers: number;
        time: number;
        stars: number;
        bestSpeed?: number;
    };
    spriteChange: undefined;
    section: string;
    state: object;
    currentTime: number;
    timeDirection: TimeDirection;
    starCalculationMode?: StarCalculationMode;
    data: Partial<GameData>;
    syncStorage: Record<string, any>;
    syncAction: Partial<{
        name: string;
        params: Record<string, any>;
    }>;
    level?: number;
}
