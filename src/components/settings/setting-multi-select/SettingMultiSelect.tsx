import { FC, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import styles from './styles.module.scss';
import { useChangeGameSetting, useGameSettings } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';
import classNames from 'classnames';
import { getArray } from '../../../utils';

type SettingsMultiSelectProps = ControlPropsOf<'multiSelect'>;

export const SettingMultiSelect: FC<SettingsMultiSelectProps> = ({
    title,
    settings = {
        values: [1, 2, 3, 4],
    },
    reduxKey,
    disabled,
}) => {
    const gameSettings = useGameSettings();

    const [value, setValue] = useState<number[]>(
        (gameSettings[reduxKey] as number[]) ||
            (getArray(settings.defaultValue).length &&
                getArray(settings.defaultValue)) ||
            (settings.values && [settings.values[0]]) || [1]
    );

    useChangeGameSetting(reduxKey, value);

    const handleChange = (currentValue: number) => {
        if (value.includes(currentValue)) {
            setValue((value) => value.filter((v) => v !== currentValue));
        } else {
            setValue((value) => [...value, currentValue]);
        }
    };

    const handleSelectAll = () => {
        if (settings.values?.length === value.length) {
            setValue(() => []);
        } else {
            setValue(() => [...getArray(settings.values)]);
        }
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <label className={classNames(styles.label, styles.label_all)}>
                    Выбрать все
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={value.length === settings.values?.length}
                        name={`${reduxKey}all`}
                        onChange={() => handleSelectAll()}
                    />
                </label>
                {(settings.values || []).map((val) => (
                    <label key={`${reduxKey}${val}`} className={styles.label}>
                        {val}
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            checked={value.includes(val)}
                            name={`${reduxKey}${val}`}
                            onChange={() => handleChange(val)}
                        />
                    </label>
                ))}
            </div>
        </SettingsWrapper>
    );
};
