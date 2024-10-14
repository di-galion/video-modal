import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const LeftPanelWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.panel}>
        <div className={styles.panel__inner}>
            <div className={styles.panel__content}>{children}</div>
        </div>
    </div>
);
