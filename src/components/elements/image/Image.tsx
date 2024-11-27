import { FC } from 'react';
import styles from './styles.module.scss';

export const Image: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <div className={styles.imgWrapper}>
        <img {...props} className={styles.imgWrapper__img} />
    </div>
);
