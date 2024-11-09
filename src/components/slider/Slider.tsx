import { useState } from 'react';
import LargeVariant from './ large-variant/LargeVariant';
import SmallVariant from './ small-variant/SmallVariant';
import './styles.css';
const SliderCustom = ({
    min = 1,
    max = 100,
    step = 1,
    defaultValue = 1,
    withValue = true,
    onChange = (value: number) => {},
    variant = 'lg',
    ...rest
}) => {
    console.log(max);

    const [sound, setSound] = useState(defaultValue);

    const onChangeHandler = (value: number) => {
        onChange(value);
        setSound(value);
    };

    if (variant === 'sm') {
        return (
            <SmallVariant
                min={min}
                max={max}
                withValue={withValue}
                step={step}
                defaultValue={defaultValue}
                onChange={onChangeHandler}
                {...rest}
            />
        );
    }

    return (
        <LargeVariant
            min={min}
            max={max}
            withValue={withValue}
            step={step}
            defaultValue={defaultValue}
            onChange={onChangeHandler}
            {...rest}
        />
    );
};

export default SliderCustom;
