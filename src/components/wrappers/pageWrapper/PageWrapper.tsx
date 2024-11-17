import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const PageWrapper = (props: PropsWithChildren) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.inner}>{props.children}</div>
            </div>
        </div>
    );
};
