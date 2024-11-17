import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

type SettingRatiosProps = ControlPropsOf<'ratios'>;

export const SettingRatios: FC<SettingRatiosProps> = ({
    title,
    settings = {
        values: [1, 2, 3, 4],
    },
    reduxKey,
    disabled,
}) => {
    const [value, setValue] = useValue(
        reduxKey,
        settings.defaultValue || (settings.values && settings.values[0]) || 1
    );

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.ratios}>
                    {(settings.values || []).map((item) => {
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
