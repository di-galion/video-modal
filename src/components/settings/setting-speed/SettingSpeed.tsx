import InputNumber from 'rc-input-number';
import { FC, useEffect, useState } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import SliderCustom from '../slider/Slider';
import './styles.css';
import styles from './styles.module.scss';
import { useChangeGameSetting } from '../../../hooks/game';
import { ControlPropsOf } from '../../game/game/Settings.module';

interface SettingsSpeedProps extends ControlPropsOf<'speed'> {
    title: string;
}

export const SettingSpeed: FC<SettingsSpeedProps> = ({
    title,
    settings = {
        min: 1,
        max: 8,
        step: 1,
        defaultValue: 1,
        update: false,
    },
    reduxKey,
    disabled,
}) => {
    const [value, setValue] = useState(settings.defaultValue || 1);

    useChangeGameSetting(reduxKey, value);

    const onChangeHandler = (v: number | null) => {
        setValue(v || 1);
    };
    useEffect(() => {
        setValue(settings.defaultValue || 1);
    }, [settings.update]);

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.inputContent}>
                        <InputNumber
                            onChange={(newValue) => {
                                setValue(newValue || 1);
                            }}
                            className={styles.inputWrapper__input}
                            controls={true}
                            required
                            {...settings}
                            value={value}
                        />
                    </div>
                    <div className={styles.block}>сек.</div>
                </div>
                <SliderCustom
                    value={value}
                    {...settings}
                    onChange={onChangeHandler}
                />
            </div>
        </SettingsWrapper>
    );
};
