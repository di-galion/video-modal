import { useMemo } from 'react';
import {
    useGameData,
    useGameResult,
    useGameSettings,
    useGameStatus,
} from '../../../hooks/game';
import { toTimeFormat } from '../../../utils';
import { GameWrapper } from '../game-wrapper/GameWrapper';
import { Stars } from './stars/Stars';
import styles from './styles.module.scss';

export const GameFinish = () => {
    const result = useGameResult();
    const [, setStatus] = useGameStatus();
    const { level = 1 } = useGameSettings();

    const handleClick = () => {
        setStatus('start');
    };

    const { title = '' } = useGameData() || {};

    const starCount = useMemo(
        () => Math.floor((result.correctAnswers / result.allAnswers) * 3),
        [result]
    );

    return (
        <GameWrapper>
            <div className={styles.finish}>
                <p className={styles.finish__title}>{title}</p>
                <p className={styles.finish__level}>Уровень {level}</p>
                <div
                    className={styles.finish__innerBlock}
                    style={{ marginTop: 40 }}
                >
                    <div className={styles.finish__rate}>
                        <Stars count={starCount} />
                    </div>
                    <p className={styles.finish__inner_text}>
                        {starCount
                            ? 'Молодец! Задание выполнено.'
                            : 'Задание не выполнено, попробуй еще раз.'}
                    </p>
                </div>
                <div className={styles.finish__bottomBlock}>
                    <div>
                        <div>
                            <p className={styles.finish__right_answers}>
                                <span>Количество верных ответов: </span>
                                <span className={styles.finish__value}>
                                    {result.correctAnswers}/{result.allAnswers}
                                </span>
                            </p>
                        </div>
                        <span className={styles.finish__info_time}>
                            Время игры:{' '}
                            <span className={styles.finish__value}>
                                {toTimeFormat(result.time)}
                            </span>
                        </span>
                        <div className={styles.finish__text}>
                            Результат сохранен<span>.</span>
                        </div>
                    </div>
                </div>
                <button
                    className={styles.finish__buttons}
                    onClick={handleClick}
                >
                    <span>Ок</span>
                </button>
            </div>
        </GameWrapper>
    );
};
