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
};
