import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { MdOutlineSettings } from 'react-icons/md';
import { LevelWrapper } from './level-wrapper/LevelWrapper';

export const GameWrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.content}>
            <div className={styles.content__inner}>
                <div className={styles.content__game_resolver}>
                    <div className={styles.content__game_container}>
                        <div className={styles.content__game_wrapper}>
                            <LevelWrapper>{children}</LevelWrapper>
                        </div>
                    </div>
                    <div className={styles.content__bottom}>
                        <div className={styles.content__bottom_button_wrapper}>
                            <button className={styles.content__bottom_button}>
                                <span>
                                    <MdOutlineSettings
                                        data-settings
                                        color="rgba(0, 0, 0, 0.65)"
                                    />
                                </span>
                                <span>Настройки</span>
                                <span>
                                    <MdOutlineSettings
                                        data-settings
                                        color="rgba(0, 0, 0, 0.65)"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
