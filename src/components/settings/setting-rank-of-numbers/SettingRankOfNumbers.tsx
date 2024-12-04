import { FC } from 'react';
import { useValue } from '../../../hooks/game';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import RankSlider from "../rank-slider/RankSlider.tsx";
import { ControlPropsOf } from '../../../typings/settings.module';
import { useState } from "react";

interface SettingRankOfNumbersProps extends ControlPropsOf<'rankOfNumbers'> {
    title: string;
}

const SettingRankOfNumbers: FC<SettingRankOfNumbersProps> = ({
                                                                 title,
                                                                 settings = {
                                                                     min: 1,
                                                                     max: 3,
                                                                     step: 1,
                                                                     defaultValue: 1,
                                                                     values: ['1', '10', '100'],
                                                                 },
                                                                 reduxKey,
                                                                 disabled,
                                                             }) => {
    const [value, setValue] = useValue(reduxKey, settings.defaultValue || 0);
    const [previousValue, setPreviousValue] = useState<number | null>(null);

    const onChangeHandler = (newValue: number) => {
        let newRankValue = '0';

        if (newValue === 0) {
            if (previousValue === 0) {
                newRankValue = '2';
            } else {
                newRankValue = '1';
            }
        } else if (newValue === 1) {
            newRankValue = '0';
        }

        setValue(newRankValue);
        setPreviousValue(newValue);
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <RankSlider
                    value={value}
                    min={settings.min}
                    max={settings.max}
                    step={settings.step}
                    onChange={onChangeHandler}
                    customValues={settings.values}
                />
            </div>
        </SettingsWrapper>
    );
};

export default SettingRankOfNumbers;