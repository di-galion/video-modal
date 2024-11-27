import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

interface StatisticsProps {
    color?: string;
    backgroundColor: string;
    progress: number;
    max: number;
    progressColor: string;
}

export const Statistics: FC<PropsWithChildren<StatisticsProps>> = ({
    color = 'white',
    backgroundColor,
    progress,
    max,
    children,
    progressColor,
}) => {
    return (
        <div className={styles.statistics} style={{ color, backgroundColor }}>
            <div className={styles.statistics__content}>
                <div className={styles.statistics__top}>{children}</div>
                <div className={styles.statistics__info}>
                    {progress} / {max}
                </div>
                <div className={styles.statistics__progress}>
                    <div
                        className={styles.statistics__value}
                        style={{
                            width: `${((max - progress) / max) * 100}%`,
                            backgroundColor: progressColor,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};
