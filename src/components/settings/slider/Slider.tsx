import Slider from 'rc-slider';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import { ISettingsOf } from '../../game/game/Settings.module';

interface SliderCustomProps extends Partial<ISettingsOf<'level'>> {
    onChange: (value: number) => void;
}

const SliderCustom: FC<SliderCustomProps> = ({
    min = 1,
    max = 5,
    step = 1,
    defaultValue,
    onChange,
    variant = 'speed',
    value,
}) => {
    const onChangeHandler = (value: number | number[]) => {
        onChange(Array.isArray(value) ? value[0] : value);
    };
    const [marks, setMarks] = useState({});
    useEffect(() => {
        const marksObj: Record<number, number> = {};
        for (let i = 0; i < max - min + 1; i++) {
            marksObj[min + i] = min + i;
        }
        setMarks(marksObj);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={variant}>
            <div className={styles.controlSlider}>
                <Slider
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                    marks={marks}
                />
            </div>
        </div>
    );
};

export default SliderCustom;
