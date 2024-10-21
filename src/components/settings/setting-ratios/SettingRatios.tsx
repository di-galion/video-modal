import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { useChangeGameSetting, useGameSettings } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

interface SettingsRatioProps extends ControlPropsOf<'ratios'> {
    title: string;
}

export const SettingRatios: FC<SettingsRatioProps> = ({
    title,
    settings = {
        values: [1, 2, 3, 4],
    },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();

    const [value, setValue] = useState(
        Number(gameSettings[reduxKey]) ||
            settings.defaultValue ||
            (settings.values && settings.values[0]) ||
            1
    );

    useEffect(() => {
        setValue(
            Number(gameSettings[reduxKey]) ||
                settings.defaultValue ||
                (settings.values && settings.values[0]) ||
                1
        );
    }, [settings]);

    useChangeGameSetting(reduxKey, value);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.ratios}>
                    {(settings.values || []).map((item) => {
                        console.log(item, value);
                        return (
                            <button
                                key={item}
                                onClick={() => setValue(item)}
                                className={classNames(styles.button, {
                                    [styles.button_active]: value === item,
                                })}
                            >
                                <span>{item}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </SettingsWrapper>
    );
};
