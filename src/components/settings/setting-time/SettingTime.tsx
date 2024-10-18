import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import classNames from 'classnames';
import { toTimeFormat } from '../../../utils';
import styles from './styles.module.scss';
import { ControlPropsOf } from '../../game/game/Settings.module';
import { useChangeGameSetting, useGameSettings } from '../../../hooks/game';

interface SettingsTimeProps extends ControlPropsOf<'time'> {
    title: string;
}

export const SettingTime: FC<SettingsTimeProps> = ({
    title,
    settings = {
        min: 30,
        max: 150,
        step: 30,
        defaultValue: 30,
    },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();

    const [value, setValue] = useState(
        Number(gameSettings[reduxKey]) || settings.defaultValue || settings.min
    );

    useChangeGameSetting(reduxKey, value);

    const onPrevClick = () => {
        if (value > settings.min) {
            setValue(value - settings.step);
        }
    };

    const onNextClick = () => {
        if (value < settings.max) {
            setValue(value + settings.step);
        }
    };

    useEffect(() => {
        if (settings.update) {
            setValue(
                Number(gameSettings[reduxKey]) ||
                    settings.defaultValue ||
                    settings.min
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.update]);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_disabled]: value == settings.min,
                    })}
                    onClick={onPrevClick}
                />
                <div className={styles.input}>
                    <span className={styles.input__time}>
                        {toTimeFormat(value)}
                    </span>
                </div>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_right]: true,
                        [styles.icon_disabled]: value == settings.max,
                    })}
                    onClick={onNextClick}
                />
            </div>
        </SettingsWrapper>
    );
};
