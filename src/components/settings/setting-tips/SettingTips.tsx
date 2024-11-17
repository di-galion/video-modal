import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { ControlPropsOf } from '../../../typings/settings.module';
import { useValue } from '../../../hooks/game';

type SettingHintsProps = ControlPropsOf<'tips'>;

const SettingTips: FC<SettingHintsProps> = ({
    title,
    settings = {
        hints: false,
        update: false,
    },
    reduxKey,
    disabled,
}) => {
    const [hintsEnabled, setHintsEnabled] = useValue(
        reduxKey,
        Number(settings.hints || false)
    );

    const handleToggle = () => {
        setHintsEnabled(Number(!hintsEnabled));
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={Boolean(hintsEnabled)}
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
