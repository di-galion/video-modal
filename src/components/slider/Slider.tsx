import LargeVariant from './large-variant/LargeVariant';
import SmallVariant from './small-variant/SmallVariant';
import './styles.css';

const SliderCustom = ({
    min = 1,
    max = 100,
    step = 1,
    defaultValue = 1,
    withValue = true,
    onChange = (_value: number) => {},
    variant = 'lg',
    ...rest
}) => {
    const onChangeHandler = (value: number) => {
        onChange(value);
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
