export type SettingValue = number;

export type GameStatus = 'start' | 'settings' | 'finish' | 'info';

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
    currentTime: number;
}
