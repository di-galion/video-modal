import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import SliderCustom from '../slider/Slider';
import styles from './styles.module.scss';
import { useChangeGameSetting, useGameSettings } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

interface SettingsRangeProps extends ControlPropsOf<'range'> {
    title: string;
}

export const SettingRange: FC<SettingsRangeProps> = ({
    title,
    settings = {
        min: 1,
        max: 8,
        step: 1,
        update: false,
        defaultValue: 1,
    },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();

    const [value, setValue] = useState(
        Number(gameSettings[reduxKey]) || settings.defaultValue || 1
    );

    useChangeGameSetting(reduxKey, value);

    const onChangeHandler = (v: number) => {
        setValue(v);
    };

    useEffect(() => {
        if (settings.update) {
            setValue(gameSettings[reduxKey] || settings.defaultValue || 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.update]);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div id={String(settings.update)} className={styles.wrapper}>
                <SliderCustom
                    value={value}
                    {...settings}
                    onChange={onChangeHandler}
                />
            </div>{' '}
        </SettingsWrapper>
    );
};
