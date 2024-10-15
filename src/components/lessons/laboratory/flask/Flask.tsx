import { FC } from 'react';
import styles from './styles.module.scss';

interface FlaskProps {
    index: number;
    count: number;
    onClick: (count: number) => void;
}

export const Flask: FC<FlaskProps> = ({ count, index, onClick }) => {
    return (
        <div
            className={styles.flask}
            data-num={index}
            onClick={() => onClick(count)}
        >
            <span className={styles.flask__text}>{count}</span>
        </div>
    );
};
