import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import { Timer } from '../../timer/Timer';
import { Star } from '../../star/Star';
import { useGameSettings } from '../../../hooks/game';

interface GameProps {
    onTimeOut: () => void;
}

export const Game: FC<PropsWithChildren<GameProps>> = ({
    children,
    onTimeOut,
}) => {
    const { time } = useGameSettings();

    return (
        <div className={styles.level}>
            <div className={styles.level__inner}>
                <div className={styles.level__top_panel}>
                    <Timer
                        time={Number(time) || 30}
                        onFinish={onTimeOut}
                        color="rgb(23, 127, 77)"
                    />
                    <Star />
                </div>
                <div className={styles.level__content}>{children}</div>
            </div>
        </div>
    );
};
