import { FC } from 'react';
import SettingsWrapper from '../settings-wrapper/SettingsWrapper';

import SliderCustom from '../slider/Slider';
import styles from './styles.module.scss';
import { useValue } from '../../../hooks/game';
import { ControlPropsOf } from '../../../typings/settings.module';

type SettingsRangeProps = ControlPropsOf<'range'>;

export const SettingRange: FC<SettingsRangeProps> = ({
    title,
    settings = {
        min: 1,
        max: 8,
        step: 1,
        update: false,
        defaultValue: 1,
    },
    reduxKey,
    disabled,
}) => {
    const [value, setValue] = useValue(
        reduxKey,
        (settings.defaultValue as number) || 1
    );

    const onChangeHandler = (v: number) => {
        setValue(v);
    };

    return (
        <SettingsWrapper disabled={disabled} title={title}>
            <div id={String(settings.update)} className={styles.wrapper}>
                <SliderCustom
                    value={value}
                    {...settings}
                    onChange={onChangeHandler}
                />
            </div>{' '}
        </SettingsWrapper>
    );
};
