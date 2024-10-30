import { FC } from 'react';
import { toTimeFormat } from '../../../utils';
import styles from './styles.module.scss';

interface TimerProps {
    time: number;
    color: string;
}

export const Timer: FC<TimerProps> = ({ time, color }) => {
    return (
        <div style={{ color }}>
            <div className={styles.timer}>
                <span></span>
                <div className={styles.timer__value}>
                    {time >= 0 ? toTimeFormat(time) : ''}
                </div>
            </div>
        </div>
    );
};
