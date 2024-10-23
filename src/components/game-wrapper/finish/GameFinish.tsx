import { useGameResult, useGameStatus } from '../../../hooks/game';
import { useLessonCurrentGame } from '../../../hooks/lessons';
import styles from './styles.module.scss';

const Star = () => (
    <span className={styles.finish__complete}>
        <svg viewBox="0 0 193.5 200">
            <defs>
                <linearGradient
                    id="prefix__a"
                    x1="-562.3"
                    y1="-783.5"
                    x2="-744.6"
                    y2="-843.5"
                    gradientTransform="matrix(.85 .52 -.52 .85 208 1126)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#e5912f"></stop>
                    <stop offset="0.1" stopColor="#e8a330"></stop>
                    <stop offset="0.2" stopColor="#eab131"></stop>
                    <stop offset="0.3" stopColor="#ebb931"></stop>
                    <stop offset="0.5" stopColor="#ebbb31"></stop>
                    <stop offset="0.6" stopColor="#edc343"></stop>
                    <stop offset="0.7" stopColor="#eec850"></stop>
                    <stop offset="0.7" stopColor="#eeca55"></stop>
                    <stop offset="0.8" stopColor="#edc445"></stop>
                    <stop offset="0.8" stopColor="#ecbf3a"></stop>
                    <stop offset="0.9" stopColor="#ebbc33"></stop>
                    <stop offset="1" stopColor="#ebbb31"></stop>
                </linearGradient>
            </defs>
            <g>
                <path
                    d="M109 194.2l-36.7-40.8A7.2 7.2 0 0066 151l-54.4 7a7.2 7.2 0 01-7.1-10.7L32 100a7.2 7.2 0 00.3-6.7L8.7 43.6a7.2 7.2 0 018-10L70.3 45a7.2 7.2 0 006.5-1.8l39.8-37.7a7.2 7.2 0 0112.1 4.5l5.7 54.6a7.2 7.2 0 003.7 5.5l48.2 26.3a7.2 7.2 0 01-.5 12.9l-50.2 22.2a7.2 7.2 0 00-4.1 5.3l-10.1 53.9a7.2 7.2 0 01-12.4 3.5z"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="7"
                    fill="url(#prefix__a)"
                ></path>
            </g>
        </svg>
    </span>
);

export const GameFinish = () => {
    const result = useGameResult();

    const [, setStatus] = useGameStatus();

    const handleClick = () => {
        setStatus('start');
    };

    const { title = '' } = useLessonCurrentGame() || {};

    return (
        <div className={styles.finish}>
            <p className={styles.finish__title}>{title}</p>
            <p className={styles.finish__level}>Уровень 2</p>
            <div
                className={styles.finish__innerBlock}
                style={{ marginTop: 40 }}
            >
                <div className={styles.finish__rate}>
                    {new Array(3).fill(null).map(() => (
                        <Star />
                    ))}
                </div>
                <p className={styles.finish__inner_text}>
                    Молодец! Задание выполнено.
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
                            {result.time}
                        </span>
                    </span>
                    <div className={styles.finish__text}>
                        Результат сохранен<span>.</span>
                    </div>
                </div>
            </div>
            <button className={styles.finish__buttons} onClick={handleClick}>
                <span>Ок</span>
            </button>
        </div>
    );
};
