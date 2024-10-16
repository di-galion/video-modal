import classNames from 'classnames';
import { useAccount } from '../../hooks/account';
import Video from '../video/Video';
import styles from './styles.module.scss';

export const VideoSection = () => {
    const {
        me: { name, online },
    } = useAccount();

    return (
        <div className={styles.top}>
            <Video />

            <div className={styles.info}>
                <p className={styles.info__text}>
                    {name}
                    <span
                        className={classNames(styles.info__status, {
                            [styles.info__status_red]: !online,
                        })}
                    ></span>
                </p>
                <p>
                    <span>Тема:</span> Просто 0 - 4
                </p>
            </div>
        </div>
    );
};
