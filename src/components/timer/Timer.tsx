import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { toTimeFormat } from '../../utils';
import styles from './styles.module.scss';

interface TimerProps {
    time: number;
    onFinish: () => void;
    color: string;
}

export const Timer: FC<TimerProps> = ({ time, onFinish, color }) => {
    const seconds = useRef(time);
    const [value, setValue] = useState(time);

    const change = useCallback(() => {
        if (!seconds.current) {
            onFinish();
            return false;
        }
        seconds.current--;
        setValue(seconds.current);
        return true;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!change()) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    return (
        <div style={{ color }}>
            <div className={styles.timer}>
                <span></span>
                <div className={styles.timer__value}>{toTimeFormat(value)}</div>
            </div>
        </div>
    );
};
