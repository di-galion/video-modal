import classNames from 'classnames';
import { useAccount } from '../../hooks/account';
import Video from '../video/Video';
import styles from './styles.module.scss';
import { useThemeName } from '../../hooks/theme';

export const VideoSection = () => {
    const {
        me: { name: userName, online },
    } = useAccount();

    const themeName = useThemeName();

    return (
        <div className={styles.top}>
            <Video />

            <div className={styles.info}>
                <p className={styles.info__text}>
                    {userName}
                    <span
                        className={classNames(styles.info__status, {
                            [styles.info__status_red]: !online,
                        })}
                    ></span>
                </p>
                <p>
                    <span>Тема:</span> {themeName}
                </p>
            </div>
        </div>
    );
};
