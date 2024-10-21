import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { useChangeGameSetting, useGameSettings } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

interface SettingsSliderProps extends ControlPropsOf<'sliding'> {
    title: string;
}

export const SettingSliding: FC<SettingsSliderProps> = ({
    title,
    settings = {
        values: [1, 2, 4],
        defaultValue: 0,
        update: false,
    },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();

    const [value, setValue] = useState(
        Number(gameSettings[reduxKey]) || settings.defaultValue || 0
    );

    useChangeGameSetting(reduxKey, value);

    const onPrevClick = () => {
        if (value !== 0) {
            setValue(value - 1);
        }
    };

    const onNextClick = () => {
        if (value !== settings.values.length - 1) {
            setValue(value + 1);
        }
    };

    useEffect(() => {
        if (settings.update) {
            setValue(
                Number(gameSettings[reduxKey]) || settings.defaultValue || 0
            );
        }
    }, [settings.update]);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_disabled]: value == 0,
                    })}
                    onClick={onPrevClick}
                />
                <div className={styles.input}>
                    <span className={styles.input__time}>
                        {settings.values[value]}
                    </span>
                </div>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_right]: true,
                        [styles.icon_disabled]:
                            value == settings.values.length - 1,
                    })}
                    onClick={onNextClick}
                />
            </div>
        </SettingsWrapper>
    );
};
