import { ControlProps, ControlPropsOf } from '../typings/settings.module';
import { SettingLevel } from '../components/settings/setting-level/SettingLevel';
import { SettingRange } from '../components/settings/setting-range/SettingRange';
import { SettingRatios } from '../components/settings/setting-ratios/SettingRatios';
import { SettingSliding } from '../components/settings/setting-sliding/SettingSliding';
import { SettingSpeed } from '../components/settings/setting-speed/SettingSpeed';
import { SettingTime } from '../components/settings/setting-time/SettingTime';
import { Laboratory } from '../components/games/laboratory/Laboratory';
import { MultTable } from '../components/games/mult-table/MultTable';
import { MountainTrail } from '../components/games/mountain-trail/MountainTrail';
import { ReactElement } from 'react';
import SettingsNumOfRows from '../components/settings/setting-num-of-rows/SettingNumOfRows';
import SettingTips from '../components/settings/setting-tips/SettingTips';
import { SettingMultiSelect } from '../components/settings/setting-multi-select/SettingMultiSelect';
import { Invasion } from '../components/games/invasion/Invasion';
import { FlashCards } from '../components/games/flash-cards/FlashCards';
import { imagePath } from '../utils/imagePath';

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
    multiSelect: () => (
        <SettingMultiSelect
            {...(item as ControlPropsOf<'multiSelect'>)}
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
    numberOfRows: () => (
        <SettingsNumOfRows
            {...(item as ControlPropsOf<'numberOfRows'>)}
            key={item.reduxKey}
        />
    ),
    tips: () => (
        <SettingTips
            {...(item as ControlPropsOf<'tips'>)}
            key={item.reduxKey}
        />
    ),
});

export const GAME_MAP: Record<string, () => ReactElement> = {
    laboratory: () => <Laboratory />,
    multTable: () => <MultTable />,
    mountainTrail: () => <MountainTrail />,
    invasion: () => <Invasion />,
    flashCards: () => <FlashCards />,
};

export const GAME_DATA_MAP: Record<string, { image: string; title: string }> = {
    laboratory: {
        image: imagePath('/assets/img/gameCovers/laboratory.png'),
        title: 'Лаборатория',
    },
    multTable: {
        image: imagePath('/assets/img/gameCovers/multTable.png'),
        title: 'Таблица умножения',
    },
    mountainTrail: {
        image: imagePath('/assets/img/gameCovers/mountainTrail.png'),
        title: 'Горная тропа',
    },
    invasion: {
        image: imagePath('/assets/img/gameCovers/invasion.png'),
        title: 'Вторжение',
    },
    flashCards: {
        image: imagePath('/assets/img/gameCovers/flashCards.png'),
        title: 'Флеш-карты',
    },
};
