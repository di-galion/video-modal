import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
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
    const [value, setValue] = useValue(
        reduxKey,
        (settings.defaultValue as number) || 0
    );

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
