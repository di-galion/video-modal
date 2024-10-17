import { FC } from 'react';
import styles from './styles.module.scss';

export const Star: FC = () => {
    return (
        <div>
            <div className={styles.star}>
                <span></span>
                <div className={styles.progress_bar}>
                    <div className={styles.progress_bar_stylemarks}>
                        <div
                            className={styles.progress_bar_stylemark}
                            style={{ left: '50%' }}
                        ></div>
                        <div
                            className={styles.progress_bar_stylemark}
                            style={{ left: '70%' }}
                        ></div>
                        <div
                            className={styles.progress_bar_stylemark}
                            style={{ left: '90%' }}
                        ></div>
                    </div>
                    <div className={styles.progress_bar_styleprogress}>
                        <span
                            className={styles.progress_bar_styleline_wrapp}
                        ></span>
                        <span
                            className={styles.progress_bar_styleline}
                            style={{
                                width: '0%',
                            }}
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
