import { IGameStateSettings } from '../typings/game.module';

export const GAME_START_DATA_TABLE = (
    settings: IGameStateSettings,
    gameName: string
) => {
    switch (gameName) {
        case 'mountainTrail':
            return [
                { text: 'Тема', value: 1 },
                { text: 'Скорость', value: settings.speed },
            ];
    }
    return null;
};
