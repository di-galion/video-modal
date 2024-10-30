import { CONTROLS_MAP } from '../constants/game.contants';
import { ControlProps } from '../typings/settings.module';

export const renderSettings = (gameSetting: ControlProps[]) => {
    if (gameSetting) {
        return gameSetting.map((controlSettings) => {
            const controls = CONTROLS_MAP(controlSettings) || {};
            const control = controls[controlSettings.type];
            return control ? control() : null;
        });
    }

    return null;
};
