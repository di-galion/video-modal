import { FC, useEffect, useState } from 'react';
import { ControlPropsOf } from '../../../typings/settings.module.ts';
import { useGameSettings} from '../../../hooks/game.ts';
import { useValue } from '../../../hooks/game';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper.tsx';
import styles from './styles.module.scss';

type SettingsProps = ControlPropsOf<'items'>;

const SettingItems: FC<SettingsProps> = ({
    title,
    settings = { defaultValue: 1 },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();
    const [value, setValue] = useState<number>(
        (gameSettings[reduxKey] as number) || settings.defaultValue || 2,
    );


    useValue(reduxKey, value);

    const onChangeHandler = (v: number) => {
        if (!disabled) {
            setValue(v);
        }
    };

    useEffect(() => {
        if (settings.update) {
            setValue(gameSettings[reduxKey] || settings.defaultValue || 2);
        }
    }, [settings.update]);

    const items = [2, 3, 4];

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.settingsContainer}>
                {' '}
                <div className={styles.circleButtons}>
                    {' '}
                    {items.map((item) => (
                        <button
                            key={item}
                            className={`${styles.circleButton} ${value === item ? styles.active : ''}`}
                            onClick={() => onChangeHandler(item)}
                            disabled={disabled}
                        >
                            <span className={styles.buttonText}>{item}</span>{' '}
                        </button>
                    ))}
                </div>
            </div>
        </SettingsWrapper>
    );
};

export default SettingItems;
