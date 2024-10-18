import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { ControlPropsOf } from '../../game/game/Settings.module';
import { useChangeGameSetting } from '../../../hooks/game';

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
    const [value, setValue] = useState(
        settings.defaultValue || settings.values[0]
    );

    useChangeGameSetting(reduxKey, value);

    const onPrevClick = () => {
        const index = settings.values.indexOf(value as never);
        if (index !== 0) {
            setValue(settings.values[index - 1]);
        }
    };

    const onNextClick = () => {
        const index = settings.values.indexOf(value as never);
        if (index !== settings.values.length - 1) {
            setValue(settings.values[index + 1]);
        }
    };

    useEffect(() => {
        setValue(settings.defaultValue || settings.values[0]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings.update]);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_disabled]: value == settings.values[0],
                    })}
                    onClick={onPrevClick}
                />
                <div className={styles.input}>
                    <span className={styles.input__time}>{value}</span>
                </div>
                <button
                    className={classNames(styles.icon, {
                        [styles.icon_right]: true,
                        [styles.icon_disabled]:
                            value ==
                            settings.values[settings.values.length - 1],
                    })}
                    onClick={onNextClick}
                />
            </div>
        </SettingsWrapper>
    );
};
