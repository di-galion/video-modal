import styles from './styles.module.css';
import personNortal from './img/persons/p-normal.png';
import personGood from './img/persons/p-good.png';
import personBad from './img/persons/p-bad.png';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
    useGameFinish,
    useGameResult,
    useGameSettings,
} from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';
import { createShapeData, getCount } from './functions';
import { register } from '../../../providers/game/register';

type PersonLook = 'normal' | 'good' | 'bad';

const personMap: Record<PersonLook, string> = {
    normal: personNortal,
    good: personGood,
    bad: personBad,
};

const Persons: FC<{ look: PersonLook }> = ({ look }) => (
    <img src={personMap[look]} alt="persons" />
);

const Shape: FC<{
    text: string;
    right: boolean;
    crush: boolean;
    order?: number;
    onClick: (right: boolean) => void;
}> = ({ text, right, crush, onClick, order = 1 }) => (
    <span
        className={classNames(styles.elemWrap, { [styles.crush]: crush })}
        onMouseDown={() => onClick(right)}
        style={{ order }}
    >
        <span className={styles.elem}>
            {!crush ? <span className={styles.number}>{text}</span> : null}
        </span>
    </span>
);

const COUNT = 10;

const MountainTrailGame = () => {
    const [look, setLook] = useState<PersonLook>('normal');
    const [mode, setMode] = useState<PersonLook>('normal');
    const [crush, setCrush] = useState(false);
    const [step, setStep] = useState(-1);
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const { allAnswers, correctAnswers } = useGameResult();
    const [runned, setRunned] = useState(true);

    const { speed = 3 } = useGameSettings();

    const finishGame = useGameFinish();

    const shapes = useMemo(
        () => createShapeData(step + 1, 1, getCount(step)),
        [step]
    );

    const interval = useRef<NodeJS.Timeout>();

    const height = useMemo(() => {
        const fail = allAnswers - correctAnswers;
        return (fail / COUNT) * 500;
    }, [COUNT, allAnswers, correctAnswers]);

    useEffect(() => {
        if (look !== 'normal') {
            setTimeout(() => {
                setLook('normal');
            }, 500);
        }
    }, [look]);

    useEffect(() => {
        if (crush) {
            setTimeout(() => {
                setCrush(false);
            }, 500);
        }
    }, [crush]);

    useEffect(() => {
        if (runned) {
            clearInterval(interval.current);
            if (step <= COUNT - 1) {
                interval.current = setInterval(() => {
                    setMode('bad');
                }, speed * 1000);
            }
        } else {
            clearInterval(interval.current);
        }
    }, [runned]);

    useEffect(() => {
        if (mode === 'normal') {
            setRunned(true);
            next();
        } else {
            addAllAnswers();

            if (mode === 'bad') {
                setLook('bad');
                setRunned(false);
                setTimeout(() => {
                    setMode('normal');
                }, 100);
            } else {
                setLook('good');
                setCrush(true);
                addCorrectAnswer();
                setTimeout(() => {
                    setRunned(false);
                }, 500);
                setTimeout(() => {
                    setMode('normal');
                }, 600);
            }
        }
    }, [mode]);

    const next = () => {
        if (step < COUNT - 1) {
            setStep((step) => step + 1);
        } else {
            finishGame();
        }
    };

    const handleClick = (right: boolean) => {
        if (right) {
            setMode('good');
        } else {
            setMode('bad');
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.elements}>
                <div className={styles.wall} style={{ height }}></div>
                <div className={styles.bg}></div>
                <div className={styles.persons}>
                    <Persons look={look} />
                </div>
                {step <= COUNT - 1 ? (
                    <div
                        className={classNames(styles.shapes, {
                            [styles.run]: runned,
                        })}
                        style={{ animationDuration: `${speed}s` }}
                    >
                        {shapes.map((shape) => (
                            <Shape
                                {...shape}
                                key={shape.text}
                                crush={crush}
                                onClick={handleClick}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export const MountainTrail = register(MountainTrailGame, {
    timeDirection: 'right',
    title: 'Таблица умножения',
    infoSettings: [],
    settings: () => [
        {
            type: 'range',
            title: 'Скорость',
            reduxKey: 'speed',
            settings: {
                max: 5,
                min: 1,
                step: 0.5,
                defaultValue: 3,
            },
        },
    ],
    start: () => ({
        title: 'Горная тропа',
        subTitle1:
            'Лови камни с правильными примерами, чтоб помочь Витаминке и Айти выбраться из пещеры',
        subTitle2:
            'Будь внимателен! Количество камней постепенно увеличивается',
        subTitle3: '',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    }),
});
