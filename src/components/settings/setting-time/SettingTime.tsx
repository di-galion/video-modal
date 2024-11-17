import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import classNames from 'classnames';
import { toTimeFormat } from '../../../utils';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

type SettingsTimeProps = ControlPropsOf<'time'>;

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
    const [value, setValue] = useValue(
        reduxKey,
        (settings.defaultValue as number) || settings.min
    );

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
