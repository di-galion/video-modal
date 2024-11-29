import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <div className={styles.imgWrapper}>
        <img
            {...props}
            className={classNames(styles.imgWrapper__img, props.className)}
        />
    </div>
);
