import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const PageTitle = (props: PropsWithChildren) => {
    return (
        <div className={styles.pageTitleWrapper}>
            <div className={styles.pageTitle}>{props.children}</div>
        </div>
    );
};
