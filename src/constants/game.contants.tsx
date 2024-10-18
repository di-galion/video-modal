import {
    ControlProps,
    ControlPropsOf,
    IGameDataSettings,
} from '../components/settings-wrap/settings-wrap/Settings.module';
import { SettingLevel } from '../components/settings/setting-level/SettingLevel';
import { SettingRange } from '../components/settings/setting-range/SettingRange';
import { SettingRatios } from '../components/settings/setting-ratios/SettingRatios';
import { SettingSliding } from '../components/settings/setting-sliding/SettingSliding';
import { SettingSpeed } from '../components/settings/setting-speed/SettingSpeed';
import { SettingTime } from '../components/settings/setting-time/SettingTime';

export const CONTROLS_MAP = (item: ControlProps) => ({
    level: () => <SettingLevel {...(item as ControlPropsOf<'level'>)} />,
    range: () => <SettingRange {...(item as ControlPropsOf<'range'>)} />,
    ratios: () => <SettingRatios {...(item as ControlPropsOf<'ratios'>)} />,
    time: () => <SettingTime {...(item as ControlPropsOf<'time'>)} />,
    sliding: () => <SettingSliding {...(item as ControlPropsOf<'sliding'>)} />,
    speed: () => <SettingSpeed {...(item as ControlPropsOf<'speed'>)} />,
});

export const GAME_SETTINGS_MAP: (
    gameSettings: IGameDataSettings
) => Record<string, ControlProps[]> = () => ({
    laboratory: [
        {
            type: 'time',
            title: 'Время игры',
            reduxKey: 'time',
            settings: {
                max: 300,
                min: 30,
                step: 30,
                update: false,
            },
        },
        {
            type: 'sliding',
            title: 'Режим',
            reduxKey: 'mode',
            settings: {
                values: ['Легкий', 'Средний', 'Сложный', 'Экстрим'],
            },
        },
    ],
});
