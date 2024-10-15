import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const LevelWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.level}>
        <div className={styles.level__inner}>
            <div className={styles.level__content}>{children}</div>
        </div>
    </div>
);
