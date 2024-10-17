import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Game } from './game/Game';
import { SettingsButton } from './settings-button/SettingsButton';

export const GameWrapper: FC<PropsWithChildren> = ({ children }) => {
    const handleTimeout = () => {};
    const handleSettings = () => {};

    return (
        <div className={styles.content}>
            <div className={styles.content__inner}>
                <div className={styles.content__game_resolver}>
                    <div className={styles.content__game_container}>
                        <div className={styles.content__game_wrapper}>
                            <Game onTimeOut={handleTimeout}>{children}</Game>
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
