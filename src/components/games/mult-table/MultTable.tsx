import { useEffect, useMemo, useRef, useState } from 'react';
import { useGameFinish, useGameSettings } from '../../../hooks/game';
import { createAll } from './functions';
import styles from './styles.module.scss';
import { useActions } from '../../../hooks/useActions';
import { register } from '../../../providers/game/register';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import { useSyncStorage } from '../../../api/socket/useSyncStorage';
import { NextIcon } from './components/NextIcon';
import { FinishIcon } from './components/FinishIcon';
import { ExampleIcon } from './components/ExampleIcon';
import { RepeatIcon } from './components/RepeatIcon';

const MultTableGame = () => {
    const { count, level, speed, actionType } = useGameSettings<number>();
    const { theme = [1] } = useGameSettings<number[]>();
    const [step, setStep] = useState(0);
    const { sendAction } = useWebSocket();
    const { data = [], updateStorage } = useSyncStorage<{ data: number[][] }>();
    const currentData = useMemo(() => data[step] || [], [step, data]);
    const [value, setValue] = useState('');
    const [checking, setChecking] = useState(false);
    const [correct, setCorrect] = useState(true);
    const [showExample, setShowExample] = useState(false);
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const finishGame = useGameFinish();
    const timeout = useRef<NodeJS.Timeout>();
    const [autoCheck, setAutoCheck] = useState(false);

    useEffect(() => {
        updateStorage({ data: createAll(count, 2, 10, theme, actionType) });
    }, []);

    const sign = useMemo(() => (!currentData[2] ? '•' : ':'), [currentData]);

    const handleKeyDown = (event: KeyboardEvent) => {
        sendAction('keyDown', { key: event.key });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const length = useMemo(() => (data || []).length, [data]);

    const checkValue = (value: number) => {
        clearTimeout(timeout.current);

        if (
            (sign === '•' && currentData[0] * currentData[1] === value) ||
            (sign === ':' && currentData[0] / currentData[1] === value)
        ) {
            setCorrect(true);
            addCorrectAnswer();
        } else {
            setCorrect(false);
        }
        addAllAnswers();
        setChecking(true);
        setShowExample(false);
    };

    useEffect(() => {
        if (level === 2 && length && !checking) {
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                setAutoCheck(true);
            }, speed * 1000);
        }
    }, [checking, length]);

    useEffect(() => {
        if (autoCheck) {
            check(value);
            setAutoCheck(false);
        }
    }, [autoCheck]);

    const handleChangeValue = (val: string) => {
        if (checking) {
            return;
        }

        let prev = value;
        if (val === 'Backspace') {
            prev = prev.slice(0, -1);
        } else {
            prev += val;
        }
        sendAction('setValue', { value: prev });
    };

    const handleNext = () => {
        setValue('');
        setChecking(false);
        setShowExample(false);
        if (step < length - 1) {
            setStep((step) => step + 1);
        } else {
            finishGame();
        }
    };

    useWsAction((name, params) => {
        switch (name) {
            case 'next':
                handleNext();
                break;
            case 'check':
                checkValue(Number(params?.value));
                break;
            case 'setValue':
                setValue(params?.value);
                break;
            case 'repeat':
                setChecking(false);
                setValue('');
                break;
            case 'keyDown':
                if (params?.key === 'Enter') {
                    if (checking) {
                        handleNext();
                    } else {
                        checkValue(Number(value));
                    }
                } else if (!isNaN(Number(params?.key))) {
                    handleChangeValue(params?.key);
                } else if (params?.key === 'Backspace') {
                    handleChangeValue('Backspace');
                }
                break;
        }
    });

    const next = () => {
        sendAction('next');
    };

    const check = (value: string) => {
        sendAction('check', { value });
    };

    const repeat = () => {
        sendAction('repeat');
    };

    const condition = useMemo(
        () => `${currentData[0]}${sign}${currentData[1]}`,
        [currentData, sign]
    );

    return (
        <div className={styles.content}>
            {!checking ? (
                <>
                    <div className={styles.numberWrap}>
                        <span className={styles.number}>{condition}</span>
                    </div>
                    <div className={styles.calculator}>
                        <input
                            className={styles.input}
                            value={value}
                            onChange={/*handleChange*/ () => {}}
                        />
                        <button
                            className={styles.btn}
                            disabled={!value}
                            type="button"
                            onClick={() => sendAction('check', { value })}
                        >
                            Проверить
                        </button>
                    </div>
                </>
            ) : (
                <div className={styles.resultBlock}>
                    <span className={styles.resultBlock__number}>
                        {condition}
                    </span>
                    <span
                        className={styles.resultBlock__value}
                        data-correct={Number(correct)}
                    >
                        {value}
                    </span>
                    <div className={styles.resultInner}>
                        <div
                            className={styles.result}
                            data-correct={Number(correct)}
                        >
                            <span>{correct ? 'Верно' : 'Не верно'}</span>
                        </div>
                        <div className={styles.buttons}>
                            <button
                                className={styles.button_big}
                                onClick={() => repeat()}
                            >
                                <span>
                                    <RepeatIcon />
                                </span>
                            </button>
                            <button
                                className={styles.button_big}
                                onClick={() => setShowExample((show) => !show)}
                            >
                                <span>
                                    <ExampleIcon />
                                </span>
                            </button>
                            <button
                                className={styles.button_big}
                                onClick={() => next()}
                            >
                                <span>
                                    {step === length - 1 ? (
                                        <FinishIcon />
                                    ) : (
                                        <NextIcon />
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div
                        className={styles.example}
                        style={{
                            visibility: showExample ? 'visible' : 'hidden',
                        }}
                    >
                        {condition} ={' '}
                        {sign === ':'
                            ? currentData[0] / currentData[1]
                            : currentData[0] * currentData[1]}
                    </div>
                </div>
            )}
        </div>
    );
};

export const MultTable = () =>
    register(MultTableGame, (settings) => ({
        timeDirection: 'right',
        starCalculationMode: 'correct',
        title: 'Таблица умножения',
        infoSettings: [
            {
                title: 'Уровень',
                texts: [
                    'В зависимости от уровня изменяются правила игры',
                    '1 - Решение примеров не на скорость. Решаем примеры и клавишей Enter включаем следующий.',
                    '2 - Решение примеров на скорость. Скорость - это время появления следующего примера. Если решили быстрее, можно включить кнопкой Entr следующий пример.',
                ],
            },
            {
                title: 'Количество ответов',
                texts: ['Общее количество примеров для одной игры'],
            },
            {
                title: 'Тема',
                texts: ['Выбор множителя для табличных случаев умножения'],
            },
            {
                title: 'Скорость',
                texts: ['Скорость игры'],
            },
            {
                title: 'Выбор действия',
                texts: ['Выбор множителя для табличных случаев умножения'],
            },
        ],
        settings: [
            {
                type: 'level',
                title: 'Уровень',
                reduxKey: 'level',
                settings: {
                    max: 2,
                    min: 1,
                    step: 1,
                    defaultValue: 1,
                },
            },
            {
                type: 'speed',
                title: 'Cкорость',
                reduxKey: 'speed',
                settings: {
                    min: 1,
                    max: 4,
                    step: 0.2,
                    defaultValue: 1.8,
                },
                disabled: settings.level === 1,
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
                type: 'sliding',
                title: 'Выбор действия',
                reduxKey: 'actionType',
                settings: {
                    values: ['Умножение', 'Деление', 'Случайно'],
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
            title: 'Таблица умножения',
            subTitle1: 'Решай каждый пример и записывай ответ.',
            subTitle2:
                'Будь внимателен! После ввода ответа нажми кнопку Enter для решения следующего примера.',
            subTitle3: '',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
        startTable:
            settings.level === 2
                ? [
                      { text: 'Уровнь', value: settings.level },
                      { text: 'Тема', value: settings.theme },
                      { text: 'Количество ответов', value: settings.count },
                      {
                          text: 'Cкорость',
                          value: `${settings.speed} сек`,
                      },
                  ]
                : [
                      { text: 'Уровнь', value: settings.level },
                      { text: 'Тема', value: settings.theme },
                      { text: 'Количество ответов', value: settings.count },
                  ],
    }));
