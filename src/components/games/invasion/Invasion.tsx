import styles from './styles.module.css';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useGameFinish, useGameSettings } from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';
import { createShapeData, getCount } from './functions';
import { register } from '../../../providers/game/register';
import { useWebSocket } from '../../../api/socket/useWebSocket';
import { useAccount } from '../../../hooks/account';
import { isTeacher, random } from '../../../utils';

type PersonLook = 'normal' | 'good' | 'bad';

export type ShapeProps = {
    text: string;
    right: boolean;
};

const Shape: FC<{
    text: string;
    right: boolean;
    crush: boolean;
    order?: number;
    onClick: (right: boolean) => void;
}> = ({ text, right, crush, onClick, order = 1 }) => {
    const number = useMemo(() => random(1, 6), []);

    return (
        <span
            className={classNames(styles.elemWrap, { [styles.crush]: crush })}
            onMouseDown={() => onClick(right)}
            style={{ order }}
        >
            <span className={styles.elem} data-number={number}>
                <span className={styles.number}>{text}</span>
            </span>
        </span>
    );
};

const InvasionGame = () => {
    const [mode, setMode] = useState<PersonLook>('normal');
    const [crush, setCrush] = useState(false);
    const [step, setStep] = useState(-1);
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const [runned, setRunned] = useState(true);

    const { speed = 3, theme = [1], count = 5 } = useGameSettings();

    const finishGame = useGameFinish();

    const { role } = useAccount();

    const {
        storage: { data = [] },
        sendMessage,
        //sendAction,
    } = useWebSocket();

    const getNumber = useCallback(
        (step: number) => (step % (count as number)) + 1,
        []
    );

    useEffect(() => {
        if (isTeacher(role)) {
            sendMessage(
                'data',
                createShapeData(getNumber(step), getCount(step))
            );
        }
    }, [theme, role, step]);

    const length = useMemo(
        () => (count as number) * (theme as number[]).length || 1,
        [theme]
    );

    const shapes = useMemo(() => data || [], [data]);

    const interval = useRef<NodeJS.Timeout>();

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
                setRunned(false);
                setTimeout(() => {
                    setMode('normal');
                }, 100);
            } else {
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
        if (step < length - 1) {
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
    );
};

export const Invasion = () =>
    register(InvasionGame, (settings) => ({
        timeDirection: 'right',
        title: 'Вторжение',
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
            title: 'Вторжение',
            subTitle1: 'Успей поймать монстрика с правильным ответом',
            subTitle2:
                'Будь внимателен! Количество монстриков постепенно увеличивается',
            subTitle3: '',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
        startTable: [
            { text: 'Тема', value: settings.theme },
            { text: 'Скорость', value: settings.speed },
        ],
    }));
