import { FC, PropsWithChildren } from 'react';
import { useGameFinish, useGameName, useGameStatus } from '../../../hooks/game';
import styles from './styles.module.scss';
import { SettingsButton } from '../settings-button/SettingsButton';
import { TimerProvider } from '../../timer/TimerProvider';
import { GameHeader } from '../game-header/GameHeader';

export const GameWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [status, setStatus] = useGameStatus();
    const finish = useGameFinish();
    const [gameName] = useGameName();

    const handleSettings = () => {
        setStatus('settings');
    };

    return (
        <TimerProvider onTimeout={finish}>
            <div className={styles.content}>
                <div className={styles.content__inner}>
                    <div className={styles.content__game_resolver}>
                        <div className={styles.content__game_container}>
                            <div
                                className={styles.content__game_wrapper}
                                data-game={gameName}
                            >
                                <div className={styles.level}>
                                    <div className={styles.level__inner}>
                                        {status === 'game' && <GameHeader />}
                                        <div className={styles.level__content}>
                                            {children}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content__bottom}>
                            <div
                                className={
                                    styles.content__bottom_button_wrapper
                                }
                            >
                                <SettingsButton onClick={handleSettings} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TimerProvider>
    );
};
