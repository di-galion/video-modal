export type SettingValue = string | number;

export type GameStatus = 'start' | 'settings' | 'finish';

export interface IStateSettings {
    [reduxKey: string]: SettingValue;
}

export interface IGameState {
    status: GameStatus;
    settings: IStateSettings;
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
}
