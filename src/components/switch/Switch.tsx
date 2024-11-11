import { useEffect, useRef, useState } from 'react';
import ReactSwitch from 'react-switch';
import './style.scss';
import styles from './styles.module.scss';

const Switch = ({
    defaultValue = false,
    onChange = () => {},
}: {
    defaultValue: boolean;
    onChange: (value: boolean) => void;
}) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        if (value) {
            const el = ref.current?.querySelector('.react-switch-handle');
            setTimeout(() => {
                el?.setAttribute(
                    'style',
                    'transform:translateX(20px) !important'
                );
            }, 10);
        }
        onChange(value);
    }, [value]);

    const ref = useRef<HTMLDivElement>(null);

    const handleChange = (checked: boolean) => {
        setValue(checked);
    };

    return (
        <div ref={ref} className={styles.div}>
            <ReactSwitch
                // handleDiameter={100}
                onColor={'#5e72d9'}
                offColor="#888888"
                height={16}
                width={33}
                borderRadius={5}
                boxShadow="box-shadow: 1px 1px 1px #7f86a8, -0.5px -0.5px 1px #a8acc4 "
                onChange={handleChange}
                checked={value}
            />
        </div>
    );
};

export default Switch;
