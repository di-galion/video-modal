import Slider from 'rc-slider';
import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import { SettingsOf } from "../../../typings/settings.module.ts";

interface SliderCustomProps extends Partial<SettingsOf<'level'>> {
    variant?: string;
    onChange: (value: number) => void;
    customValues?: string[];
}

const RankSlider: FC<SliderCustomProps> = ({
                                                 min = 1,
                                                 max = 5,
                                                 step = 1,
                                                 defaultValue,
                                                 onChange,
                                                 customValues,
                                             }) => {
    const [value, setValue] = useState<number>(defaultValue || min);

    const onChangeHandler = (value: number | number[]) => {
        const newValue = Array.isArray(value) ? value[0] : value;
        setValue(newValue);

        if (customValues) {
            onChange(Number(customValues[newValue]));
        } else {
            onChange(newValue);
        }
    };

    const [marks, setMarks] = useState<{ [key: number]: React.ReactNode }>({});

    useEffect(() => {
        if (customValues) {
            const customMarks: { [key: number]: React.ReactNode } = {};
            customValues.forEach((val, index) => {
                customMarks[index] = (
                    <span className={`${styles.customMark}`} style={{ left: `${(index / (customValues.length - 1)) * 100}%` }}>
                        {val}
                    </span>
                );
            });
            setMarks(customMarks);
        } else {
            setMarks({
                [min]: (
                    <span className={`${styles.customMark} ${styles.markLeft}`}>
                        {min}
                    </span>
                ),
                [max]: (
                    <span className={`${styles.customMark} ${styles.markRight}`}>
                        {max}
                    </span>
                ),
            });
        }
    }, [min, max, customValues]);

    return (
        <div className={styles.sliderContainer}>
            <Slider
                value={customValues ? value : value}
                min={customValues ? 0 : min}
                max={customValues ? customValues.length - 1 : max}
                step={customValues ? 1 : step}
                onChange={onChangeHandler}
                marks={marks}
            />
        </div>
    );
};

export default RankSlider;