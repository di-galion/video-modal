import { FC } from 'react';
import styles from './styles.module.scss';

interface ImageProps {
    src: string;
    alt?: string;
}

export const Image: FC<ImageProps> = ({ src, alt = '' }) => (
    <div className={styles.imgWrapper}>
        <img className={styles.imgWrapper__img} src={src} alt={alt} />
    </div>
);
