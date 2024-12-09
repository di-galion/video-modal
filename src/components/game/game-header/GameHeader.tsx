import { useGame, useGameData } from '../../../hooks/game';
import { Timer } from '../../elements/timer/Timer';
import { Star } from '../../star/Star';
import { useTimer } from '../../timer/useTimer';
import styles from '../game-wrapper/styles.module.scss';
import { Level } from '../level/Level';

export const GameHeader = () => {
    const { time } = useTimer();
    const { level } = useGame();
    const { showLevel } = useGameData();

    return (
        <div className={styles.level__top_panel}>
            <Timer time={time} color="rgb(23, 127, 77)" />
            {showLevel && <Level level={level} />}
            <Star />
        </div>
    );
};
