import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ControlPropsOf } from '../../../typings/settings.module';
import { useChangeGameSetting } from '../../../hooks/game';

interface SettingHintsProps extends ControlPropsOf<'tips'> {
    title: string;
    hints?: boolean;
}

const SettingTips: FC<SettingHintsProps> = ({
    title,
    settings = {
        hints: false,
        update: false,
    },
    reduxKey,
    disabled,
}) => {
    const [hintsEnabled, setHintsEnabled] = useState(settings.hints || false);

    useEffect(() => {
        if (settings.update) {
            setHintsEnabled(settings.hints || false);
        }
    }, [settings.update]);

    useChangeGameSetting(reduxKey, hintsEnabled);

    const handleToggle = () => {
        setHintsEnabled((prev) => !prev);
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={hintsEnabled}
                        onChange={handleToggle}
                        disabled={disabled}
                    />
                    <span
                        className={classNames(styles.slider, {
                            [styles.slider_enabled]: hintsEnabled,
                        })}
                    />
                </label>
                <div className={styles.status}>{hintsEnabled}</div>
            </div>
        </SettingsWrapper>
    );
};

export default SettingTips;
