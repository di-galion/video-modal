import {
    ControlProps,
    ControlPropsOf,
    IControlSetting,
} from '../typings/settings.module';
import { SettingLevel } from '../components/settings/setting-level/SettingLevel';
import { SettingRange } from '../components/settings/setting-range/SettingRange';
import { SettingRatios } from '../components/settings/setting-ratios/SettingRatios';
import { SettingSliding } from '../components/settings/setting-sliding/SettingSliding';
import { SettingSpeed } from '../components/settings/setting-speed/SettingSpeed';
import { SettingTime } from '../components/settings/setting-time/SettingTime';
import { Laboratory } from '../components/games/laboratory/Laboratory';

export const CONTROLS_MAP = (item: ControlProps) => ({
    level: () => (
        <SettingLevel
            {...(item as ControlPropsOf<'level'>)}
            key={item.reduxKey}
        />
    ),
    range: () => (
        <SettingRange
            {...(item as ControlPropsOf<'range'>)}
            key={item.reduxKey}
        />
    ),
    ratios: () => (
        <SettingRatios
            {...(item as ControlPropsOf<'ratios'>)}
            key={item.reduxKey}
        />
    ),
    time: () => (
        <SettingTime
            {...(item as ControlPropsOf<'time'>)}
            key={item.reduxKey}
        />
    ),
    sliding: () => (
        <SettingSliding
            {...(item as ControlPropsOf<'sliding'>)}
            key={item.reduxKey}
        />
    ),
    speed: () => (
        <SettingSpeed
            {...(item as ControlPropsOf<'speed'>)}
            key={item.reduxKey}
        />
    ),
});

export const GAME_SETTINGS_MAP: (
    gameSettings: IControlSetting
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const INFO_SETTINGS = () => {
    //if (true) {
    return [
        {
            title: 'Уровень',
            texts: [
                'В зависимости от уровня изменяются правила игры:',
                '1 - Появляются ФК только заданного разряда',
                '2 - Появляются ФК любого разряда',
            ],
        },
        {
            title: 'Разряд чисел',
            texts: [
                'Выбор между однозначными, двузначными или трехзначными числами',
                '1 - однозначные',
                '10 - двузначные',
                '100 - трехзначные',
            ],
        },
        {
            title: 'Подтема',
            texts: [
                '1 — однозначные:',
                'от 0 до выбранного значения',
                '',
                '10 — двузначные',
                '10-90 круглые десятки (10, 20, 30, ..., 90)',
                '10-19 числа от 10 до 19 (10, 11, 12, ...,19)',
                '10-99 все двузначные числа',
                '',
                '100 — трехзначные',
                '100-900 круглые сотни (100, 200, 300, ..., 900)',
                '100-999 все трехзначные числа',
            ],
        },
        {
            title: 'Время игры',
            texts: ['Общая продолжительность игры'],
        },
        {
            title: 'Стартовая скорость',
            texts: ['Выбор длительности показа первой ФК'],
        },
        {
            title: 'Режим',
            texts: [
                'В зависимости от режима изменяется количество правильных ответов, необходимое для успешного завершения игры',
            ],
        },
    ];
    //}
};

export const GAME_MAP: Record<string, () => React.ReactElement> = {
    laboratory: () => <Laboratory />,
};
