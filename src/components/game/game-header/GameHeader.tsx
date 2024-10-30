import { Timer } from '../../elements/timer/Timer';
import { Star } from '../../star/Star';
import { useTimer } from '../../timer/useTimer';
import styles from '../game-wrapper/styles.module.scss';

export const GameHeader = () => {
    const { time } = useTimer();

    return (
        <div className={styles.level__top_panel}>
            <Timer time={time} color="rgb(23, 127, 77)" />
            <Star />
        </div>
    );
};
