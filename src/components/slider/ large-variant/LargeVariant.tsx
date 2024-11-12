import Slider from 'rc-slider';
import { useState } from 'react';
import styles from '../styles.module.scss';
import './styles.scss';

const LargeVariant = ({
    min = 1,
    max = 100,
    step = 1,
    defaultValue = 1,
    withValue = true,
    onChange = (_value: number) => {},
    ...rest
}) => {
    const [sound, setSound] = useState(defaultValue);
    const onChangeHandler = (value: number | number[]) => {
        onChange(value as number);
        setSound(value as number);
    };

    return (
        <div id={'lg'} className={styles.controlSlider}>
            <div>
                <Slider
                    min={min}
                    max={max}
                    step={step}
                    defaultValue={defaultValue}
                    onChange={onChangeHandler}
                    {...rest}
                />
            </div>
            {withValue && <div className={styles.value}>{sound}</div>}
        </div>
    );
};

export default LargeVariant;
