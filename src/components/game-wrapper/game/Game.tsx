import { FC, PropsWithChildren } from 'react';
import { Timer } from '../../timer/Timer';
import { Star } from '../../star/Star';
import { useGameSettings, useGameStatus } from '../../../hooks/game';
import styles from './styles.module.scss';
import { useTicker } from '../../../utils/ticker';
import { useActions } from '../../../hooks/useActions';
import { SettingsButton } from '../settings-button/SettingsButton';

export const Game: FC<PropsWithChildren> = ({ children }) => {
    const { time = 30 } = useGameSettings();

    const { setPageStatus, setCurrentTime } = useActions();
    const [status, setStatus] = useGameStatus();

    const handleTimeout = () => {
        setPageStatus('finish');
        setCurrentTime(time);
    };

    const handleSettings = () => {
        setStatus('settings');
    };

    const currentTime = useTicker({ time, onFinish: handleTimeout });

    return (
        <div className={styles.content}>
            <div className={styles.content__inner}>
                <div className={styles.content__game_resolver}>
                    <div className={styles.content__game_container}>
                        <div className={styles.content__game_wrapper}>
                            <div className={styles.level}>
                                <div className={styles.level__inner}>
                                    {status === 'start' ? (
                                        <div
                                            className={styles.level__top_panel}
                                        >
                                            <Timer
                                                time={currentTime}
                                                color="rgb(23, 127, 77)"
                                            />
                                            <Star />
                                        </div>
                                    ) : null}
                                    <div className={styles.level__content}>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content__bottom}>
                        <div className={styles.content__bottom_button_wrapper}>
                            <SettingsButton onClick={handleSettings} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
