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
import { createPath } from '../utils/createPath';
import { AboriginalsRiddles } from '../components/games/abarigens-riddles/aboriginalsRiddles';
import { ShadowTheater } from '../components/games/shadow-theater/ShadowTheater.tsx';
import SettingItems from "../components/settings/setting-items/SettingItems.tsx";
import { DartGame } from "../components/games/dart/Dart.tsx";
import { PuzzleAbacus } from "../components/games/collect-abacus/PuzzleAbacus.tsx";
import { CompleteRow } from "../components/games/complete-row/CompleteRow.tsx";
import SettingRankOfNumbers from "../components/settings/setting-rank-of-numbers/SettingRankOfNumbers.tsx";
import {CountExamples} from "../components/games/count-examples/countExamples.tsx";

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
    items: () => (
        <SettingItems {...(item as ControlPropsOf<'items'>)}
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
    rankOfNumbers: () => (
        <SettingRankOfNumbers
            {...(item as ControlPropsOf<'rankOfNumbers'>)}
            key={item.reduxKey}
        />
    )
});

export const GAME_MAP: Record<string, () => ReactElement> = {
    laboratory: () => <Laboratory />,
    multTable: () => <MultTable />,
    mountainTrail: () => <MountainTrail />,
    invasion: () => <Invasion />,
    flashCards: () => <FlashCards />,
    aboriginalsRiddles: () => <AboriginalsRiddles />,
    shadowTheater: () => <ShadowTheater />,
    dart: () => <DartGame/>,
    puzzleAbacus: () => <PuzzleAbacus/>,
    completeRow: () => <CompleteRow/>,
    countExamples: () => <CountExamples/>,
};

export const GAME_DATA_MAP: Record<string, { image: string; title: string }> = {
    laboratory: {
        image: createPath('/assets/img/gameCovers/laboratory.png'),
        title: 'Лаборатория',
    },
    multTable: {
        image: createPath('/assets/img/gameCovers/multTable.png'),
        title: 'Таблица умножения',
    },
    mountainTrail: {
        image: createPath('/assets/img/gameCovers/mountainTrail.png'),
        title: 'Горная тропа',
    },
    invasion: {
        image: createPath('/assets/img/gameCovers/invasion.png'),
        title: 'Вторжение',
    },
    flashCards: {
        image: createPath('/assets/img/gameCovers/flashCards.png'),
        title: 'Флеш-карты',
    },
    aboriginalsRiddles: {
        image: createPath('/assets/img/gameCovers/aboriginalsRiddles.png'),
        title: 'Загадки аборигенов',
    },
    shadowTheater: {
        image: createPath('/assets/img/gameCovers/shadow.png'),
        title: 'Театр теней',
    },
    dart: {
        image: createPath('/assets/img/gameCovers/dart.png'),
        title: 'Парк развлечений',
    },
    completeRow: {
        image: createPath('/assets/img/gameCovers/completeRow.png'),
        title: 'Тайная пещера'
    },
    puzzleAbacus: {
        image: createPath('/assets/img/gameCovers/puzzleAbacus.png'),
         title: 'Собери абакус'
    },
    countExamples: {
        image: createPath('/assets/img/gameCovers/countingExamples.png'),
        title: 'Счет примеров'
    }
};
