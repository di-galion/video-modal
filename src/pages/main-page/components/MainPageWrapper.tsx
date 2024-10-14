import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const MainPageWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.wrapper}>
        <div className={styles.inner}>
            <div className={styles.content}>
                <div className={styles.lesson}>
                    <div id={'inner'} className={styles.lesson__inner}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
