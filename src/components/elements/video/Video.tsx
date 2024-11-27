import { FC } from 'react';
import styles from './styles.module.scss';

export const Video: FC<React.VideoHTMLAttributes<HTMLVideoElement>> = (
    props
) => (
    <div className={styles.videoWrapper}>
        <video {...props} className={styles.videoWrapper__video} />
    </div>
);
