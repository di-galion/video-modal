import styles from './styles.module.css';
import personNortal from './img/persons/p-normal.png';
import personGood from './img/persons/p-good.png';
import personBad from './img/persons/p-bad.png';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
    useGameFinish,
    useGameResult,
    useGameSettings,
} from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';
import { createShapeData, getCount } from './functions';
import { register } from '../../../providers/game/register';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import { useAccount } from '../../../hooks/account';
import { isTeacher } from '../../../utils';

type PersonLook = 'normal' | 'good' | 'bad';

export type ShapeProps = {
    text: string;
    right: boolean;
};

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

const MountainTrailGame = () => {
    const [look, setLook] = useState<PersonLook>('normal');
    const [mode, setMode] = useState<PersonLook>('normal');
    const [crush, setCrush] = useState(false);
    const [step, setStep] = useState(-1);
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const { allAnswers, correctAnswers } = useGameResult();
    const [runned, setRunned] = useState(false);

    const { speed = 3, theme = [1], count = 5 } = useGameSettings();

    const finishGame = useGameFinish();

    const { role } = useAccount();

    const {
        storage: { data = [] },
        sendMessage,
        sendAction,
    } = useWebSocket();

    const getConstant = (step: number) =>
        (theme as number[])[Math.floor(step / (count as number))] || 1;

    const getNumber = useCallback(
        (step: number) => (step % (count as number)) + 1,
        []
    );

    const length = useMemo(
        () => (count as number) * (theme as number[]).length || 1,
        [theme]
    );

    useWsAction((name, params) => {
        switch (name) {
            case 'next':
                setStep((step) => step + 1);
                break;

            case 'click':
                if (params?.right) {
                    setMode('good');
                } else {
                    setMode('bad');
                }
                break;
        }
    });

    useEffect(() => {
        if (step > length - 1) {
            finishGame();
        }
    }, [step]);

    useEffect(() => {
        if (isTeacher(role) && step <= length - 1) {
            sendMessage(
                'data',
                createShapeData(
                    getNumber(step),
                    getConstant(step),
                    getCount(step)
                )
            );
        }
    }, [theme, role, step]);

    const shapes = useMemo(() => data || [], [data]);

    const interval = useRef<NodeJS.Timeout>();

    const height = useMemo(() => {
        const fail = allAnswers - correctAnswers;
        return (fail / (count as number)) * 500;
    }, [count, allAnswers, correctAnswers]);

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
            if (step <= length - 1) {
                interval.current = setInterval(() => {
                    setMode('bad');
                }, (speed as number) * 1000);
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
        sendAction('next');
    };

    const handleClick = (right: boolean) => {
        sendAction('click', { right });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.elements}>
                <div className={styles.wall} style={{ height }}></div>
                <div className={styles.bg}></div>
                <div className={styles.persons}>
                    <Persons look={look} />
                </div>
                {step <= length - 1 ? (
                    <div
                        className={classNames(styles.shapes, {
                            [styles.run]: runned,
                        })}
                        style={{ animationDuration: `${speed}s` }}
                    >
                        {shapes.map((shape: ShapeProps) => (
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

export const MountainTrail = () =>
    register(MountainTrailGame, (settings) => ({
        timeDirection: 'right',
        title: 'Горная тропа',
        infoSettings: [
            {
                title: 'Скорость',
                texts: ['Общая скорость игры'],
            },
            {
                title: 'Количество ответов',
                texts: ['Общее количество примеров для одной игры'],
            },
            {
                title: 'Тема',
                texts: ['Выбор множителя для табличных случаев умножения'],
            },
        ],
        settings: [
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
            {
                type: 'range',
                title: 'Количество ответов',
                reduxKey: 'count',
                settings: {
                    max: 10,
                    min: 4,
                    step: 1,
                    defaultValue: 5,
                },
            },
            {
                type: 'multiSelect',
                title: 'Тема',
                reduxKey: 'theme',
                settings: {
                    values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                },
            },
        ],
        start: {
            title: 'Горная тропа',
            subTitle1:
                'Лови камни с правильными примерами, чтоб помочь Витаминке и Айти выбраться из пещеры',
            subTitle2:
                'Будь внимателен! Количество камней постепенно увеличивается',
            subTitle3: '',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
        startTable: [
            { text: 'Тема', value: settings.theme },
            { text: 'Скорость', value: settings.speed },
        ],
    }));
