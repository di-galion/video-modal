import Slider from 'rc-slider';
import { useState } from 'react';
import styles from '../styles.module.scss';
import './styles.scss';

const SmallVariant = ({
    min = 1,
    max = 100,
    step = 1,
    defaultValue = 1,

    withValue = true,
    onChange = (_value: number) => {},
}) => {
    const [sound, setSound] = useState(defaultValue);

    const onChangeHandler = (value: number | number[]) => {
        onChange(value as number);
        setSound(value as number);
    };

    return (
        <div id={'sm'} className={styles.controlSlider}>
            <div>
                <Slider
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                />
            </div>
            {withValue && <div className={styles.value}>{sound}</div>}
        </div>
    );
};

export default SmallVariant;
