import { CONTROLS_MAP, GAME_SETTINGS_MAP } from '../constants/game.contants';
import { IStateSettings } from '../store/game-data/GameData.module';

export const renderSettings = (
    gameName: string,
    settings: IStateSettings = {}
) => {
    if (gameName) {
        const gameSettings = GAME_SETTINGS_MAP(settings);
        if (gameSettings) {
            const gameSetting = gameSettings[gameName];
            if (gameSetting) {
                return gameSetting.map((controlSettings) => {
                    const controls = CONTROLS_MAP(controlSettings) || {};
                    const control = controls[controlSettings.type];
                    return control ? control() : null;
                });
            }
        }
    }
    return null;
};
