import InputNumber from 'rc-input-number';
import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';
import SliderCustom from '../slider/Slider';
import './styles.css';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

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
    const [value, setValue] = useValue(
        reduxKey,
        (settings.defaultValue as number) || 1
    );

    const onChangeHandler = (v: number | null) => {
        setValue(v || 1);
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div className={styles.wrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.inputContent}>
                        <InputNumber
                            onChange={(newValue) => {
                                setValue((newValue as number) || 1);
                            }}
                            className={styles.inputWrapper__input}
                            controls={true}
                            required
                            {...settings}
                            defaultValue={undefined}
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
