import Video from '../video/Video';
import styles from './styles.module.scss';

export const VideoSection = () => (
    <div className={styles.top}>
        <Video />

        <div className={styles.info}>
            <p className={styles.info__text}>
                Ксения Сайфуллаева
                <span className={styles.info__status}></span>
            </p>
            <p>
                <span>Тема:</span> Просто 0 - 4
            </p>
        </div>
    </div>
);
