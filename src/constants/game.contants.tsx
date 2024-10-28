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
import { MultTable } from '../components/games/mult-table/MultTable';
import { MountainTrail } from '../components/games/mountain-trail/MountainTrail';

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
    multTable: [
        {
            type: 'range',
            title: 'Количество ответов',
            reduxKey: 'count',
            settings: {
                max: 30,
                min: 10,
                step: 1,
                update: false,
                variant: 'speed',
                defaultValue: 10,
            },
        },
        {
            type: 'sliding',
            title: 'Выбор действия',
            reduxKey: 'actionType',
            settings: {
                values: ['Умножение', 'Деление', 'Случайно'],
            },
        },
    ],
    mountainTrail: [
        {
            type: 'range',
            title: 'Количество ответов',
            reduxKey: 'count',
            settings: {
                max: 20,
                min: 3,
                step: 1,
                update: false,
                variant: 'speed',
                defaultValue: 3,
            },
        },
    ],
});

export const INFO_SETTINGS = (gameName: string) => {
    switch (gameName) {
        case 'laboratory':
            return [
                {
                    title: 'Правила игры',
                    texts: [
                        'В каждой пробирке хранится несколько микробов, сколько – на ней написано. Найди ту пробирку, которой не хватает до 10 микробов в лаборатории.',
                    ],
                    fullRow: true,
                },
                {
                    title: 'Уровень',
                    texts: [
                        'В зависимости от уровня изменяются правила игры:',
                        '1 - Тема "Братья"',
                        '2 - Тема "Друзья"',
                    ],
                },
                {
                    title: 'Время игры',
                    texts: ['Общая продолжительность игры'],
                },
                {
                    title: 'Режим',
                    texts: [
                        'В зависимости от режима изменяется количество правильных ответов, необходимое для успешного завершения игры',
                    ],
                },
            ];
        case 'multTable':
            return [
                {
                    title: 'Уровень',
                    texts: [
                        'В зависимости от уровня изменяются правила игры',
                        '1 - Решение примеров не на скорость. Решаем примеры и клавишей Enter включаем следующий.',
                        '2 - Решение примеров на скорость. Скорость - это время появления следующего примера. Если решили быстрее, можно включить кнопкой Entr следующий пример.',
                    ],
                },
                {
                    title: 'Количество ответов',
                    texts: ['Общее количество примеров для одной игры'],
                },
                {
                    title: 'Тема',
                    texts: ['Выбор множителя для табличных случаев умножения'],
                },
                {
                    title: 'Скорость',
                    texts: ['Скорость игры'],
                },
                {
                    title: 'Выбор действия',
                    texts: ['Выбор множителя для табличных случаев умножения'],
                },
            ];
        default:
            return [];
    }
};

export const GAME_MAP: Record<string, () => React.ReactElement> = {
    laboratory: () => <Laboratory />,
    multTable: () => <MultTable />,
    mountainTrail: () => <MountainTrail />,
};
