import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const GameStageWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.start}>
            <div className={styles.start__wrapper}>
                <div className={styles.start__content}>{children}</div>
            </div>
        </div>
    );
};
