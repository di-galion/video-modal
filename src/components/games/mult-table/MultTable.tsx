import { useEffect, useMemo, useState } from 'react';
import { useGameFinish, useGameSettings } from '../../../hooks/game';
import { createAll } from './functions';
import styles from './styles.module.scss';
import { useActions } from '../../../hooks/useActions';
import { register } from '../../../providers/game/register';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import { useSyncStorage } from '../../../api/socket/useSyncStorage';

const MultTableGame = () => {
    const { count } = useGameSettings<number>();
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

    useEffect(() => {
        //console.log([count, theme]);
        updateStorage('data', createAll(count, 2, 10, theme));
    }, [count, theme]);

    const length = useMemo(() => (data || []).length, [data]);

    useWsAction((name, params) => {
        switch (name) {
            case 'next':
                setValue('');
                setChecking(false);
                setShowExample(false);
                if (step < length - 1) {
                    setStep((step) => step + 1);
                } else {
                    finishGame();
                }
                break;
            case 'check':
                if (currentData[0] * currentData[1] === Number(params?.value)) {
                    setCorrect(true);
                    addCorrectAnswer();
                } else {
                    setCorrect(false);
                }
                addAllAnswers();
                setChecking(true);
                setShowExample(false);
                break;
            case 'setValue':
                setValue(params?.value);
                break;
            case 'repeat':
                setChecking(false);
                setValue('');
                break;
        }
    });

    const next = () => {
        sendAction('next');
    };

    const check = (value: string) => {
        sendAction('check', { value });
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        sendAction('setValue', { value: e.target.value });
    };

    const repeat = () => {
        sendAction('repeat');
    };

    const handeSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        check(value);
    };

    return (
        <div className={styles.content}>
            {!checking ? (
                <>
                    <div className={styles.numberWrap}>
                        <span className={styles.number}>
                            {currentData[0]}•{currentData[1]}
                        </span>
                    </div>
                    <div className={styles.calculator}>
                        <form onSubmit={handeSubmit}>
                            <input
                                className={styles.input}
                                value={value}
                                onChange={handleChange}
                            />
                            <button
                                className={styles.btn}
                                disabled={!value}
                                type="submit"
                            >
                                Проверить
                            </button>
                        </form>
                    </div>
                </>
            ) : (
                <div className={styles.resultBlock}>
                    <span className={styles.resultBlock__number}>
                        {currentData[0]}•{currentData[1]}
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
                                    <svg viewBox="0 0 107.6 106.1">
                                        <g>
                                            <path
                                                fill="#f5e94c"
                                                d="M107.3 85.3l-7.2-25.7-29 10.6 13 5.3a38.5 38.5 0 01-30.3 15.3c-17.7 0-30.1-14.3-30.1-32.9L.3 62.4C4.2 86 22 107.6 53.8 106a54.8 54.8 0 0043-25.3zM0 22l7.8 25.6 28.8-11.2-13.2-5a38.5 38.5 0 0130-16c17.7-.3 30.5 13.7 31 32.2l23.2-5C103 19.2 84.8-2 53 .2a54.8 54.8 0 00-42.4 26.2z"
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </button>
                            <button
                                className={styles.button_big}
                                onClick={() => setShowExample((show) => !show)}
                            >
                                <span>
                                    <svg viewBox="0 0 113.2 111.1">
                                        <defs>
                                            <style></style>
                                        </defs>
                                        <g
                                            id="prefix__\u0428\u0430\u0440_2"
                                            data-name="\u0428\u0430\u0440 2"
                                        >
                                            <g
                                                id="prefix__\u0421\u043B\u043E\u0439_2"
                                                data-name="\u0421\u043B\u043E\u0439 2"
                                            >
                                                <path
                                                    fill="#f5e94c"
                                                    d="M56.6 45.2C25.3 45 .1 69 0 78.4c0 8.4 25.3 32.5 56.6 32.7s56.5-23.7 56.6-32c0-9.4-25.3-33.7-56.6-34zm1 57.3a22.7 22.7 0 1122.8-22.7 22.7 22.7 0 01-22.8 22.7z"
                                                ></path>
                                                <circle
                                                    fill="#f5e94c"
                                                    cx="58.1"
                                                    cy="80.2"
                                                    r="13.5"
                                                ></circle>
                                                <path
                                                    fill="#f5e94c"
                                                    d="M31.4 1.8A3.9 3.9 0 0134.2.4a8.7 8.7 0 012.3.2 4.2 4.2 0 011.3.6 2 2 0 01.6 1 10.1 10.1 0 01.3 2.6V32a16.7 16.7 0 010 1.7A3.9 3.9 0 0138 35c-.4.9-1.7 1.3-3.8 1.3s-3.2-.4-3.7-1.2a3.9 3.9 0 01-.5-1.4V14.5l-.7.6a6 6 0 01-3.4 1.5 4.2 4.2 0 01-3-1.7 4.9 4.9 0 01-1.5-3A4.2 4.2 0 0123.3 9l8-7.2zm14.1 2.8a11.2 11.2 0 014-3.3 13.7 13.7 0 0111.8 0 11.4 11.4 0 014 3.3 16.8 16.8 0 012.2 4.6 29.3 29.3 0 011.5 9.2q0 8.8-3.8 14a10.8 10.8 0 01-3.9 3.2 14 14 0 01-11.7 0 11.2 11.2 0 01-4-3.1 16.7 16.7 0 01-2.3-4.6 29.5 29.5 0 01-1.4-9.4A26.6 26.6 0 0143 10a20.4 20.4 0 012.5-5.5zm9.9 23.6q5 0 5-9.5v-.3q0-9.8-5-9.8t-5 9.8q0 9.8 5 9.8zM86.9 19h4a5.5 5.5 0 012.4.4 2 2 0 011 1.3 7.3 7.3 0 01.3 2.2 8.2 8.2 0 01-.3 2.2 1.9 1.9 0 01-.8 1.2 5.7 5.7 0 01-2.5.4h-4v4a5.7 5.7 0 01-.4 2.4 2 2 0 01-1.3 1 9.2 9.2 0 01-4.4 0 2 2 0 01-1.2-.9 6.5 6.5 0 01-.4-2.7v-3.8H75a5.3 5.3 0 01-2.3-.4 2 2 0 01-1-1.2 8.4 8.4 0 01-.3-2.2 7.6 7.6 0 01.3-2.3 2 2 0 011-1.2 6.5 6.5 0 012.6-.4h3.9v-4a5.9 5.9 0 01.4-2.4 2 2 0 011.2-1 9.2 9.2 0 014.4 0 2 2 0 011.2.9 6.5 6.5 0 01.5 2.7z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </button>
                            <button
                                className={styles.button_big}
                                onClick={() => next()}
                            >
                                <span>
                                    {step === length - 1 ? (
                                        <svg viewBox="0 0 88 100.1">
                                            <defs></defs>
                                            <g
                                                id="prefix__\u0428\u0430\u0440_2"
                                                data-name="\u0428\u0430\u0440 2"
                                            >
                                                <g
                                                    id="prefix__\u0421\u043B\u043E\u0439_2"
                                                    data-name="\u0421\u043B\u043E\u0439 2"
                                                >
                                                    <path
                                                        fill="#f5e94c"
                                                        d="M82.2 2C59.3 15.5 53-2.5 27 .4A50.3 50.3 0 007.2 8c-1.4.9 16 51.1 18.2 57.6 0-.4 1-1.3 1.4-1.6 7.2-6.2 18-5.7 23.8-4.4 27.2 6.5 36.2-.2 36.2-4.6 0-17.7 1.2-32.5 1.2-50.1 0-3.5-1.6-4.8-5.8-2.7zM60.5 13.4l1 8.3a68.3 68.3 0 00-20.2-1.2l-1.8-14c5.5-1.2 20.5 3 21 7zM26 44l-6.1-20.3s12.7-2.1 21-2l2.5 19C35 40.7 25.9 44 25.9 44zm38 13.4s-6.1 1.2-19-2.4l-1-12.9a38.8 38.8 0 0119 1.5s.8 14.5 1 13.8zm0-14.8l-2.1-19.1s10.9 1.5 20.7-1.8l-.7 20a57.3 57.3 0 01-17.9.9z"
                                                    ></path>
                                                    <path
                                                        fill="#f5e94c"
                                                        d="M35 99.8a6.5 6.5 0 01-8.2-4.3L.4 10a6.5 6.5 0 014.3-8 6.5 6.5 0 018.1 4l26.5 85.6a6.5 6.5 0 01-4.3 8.1z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 101.5 76.1">
                                            <g>
                                                <path
                                                    fill="#f5e94c"
                                                    d="M0 21.8l68 3.5V0l33.5 38.2L68 76V49L1.3 54.3 0 21.8z"
                                                ></path>
                                            </g>
                                        </svg>
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
                        {currentData[0]}•{currentData[1]} ={' '}
                        {currentData[0] * currentData[1]}
                    </div>
                </div>
            )}
        </div>
    );
};

export const MultTable = () =>
    register(MultTableGame, (settings) => ({
        timeDirection: 'right',
        title: 'Таблица умножения',
        infoSettings: [
            /*{
            title: 'Уровень',
            texts: [
                'В зависимости от уровня изменяются правила игры',
                '1 - Решение примеров не на скорость. Решаем примеры и клавишей Enter включаем следующий.',
                '2 - Решение примеров на скорость. Скорость - это время появления следующего примера. Если решили быстрее, можно включить кнопкой Entr следующий пример.',
            ],
        },*/
            {
                title: 'Количество ответов',
                texts: ['Общее количество примеров для одной игры'],
            },
            {
                title: 'Тема',
                texts: ['Выбор множителя для табличных случаев умножения'],
            },
            /*{
            title: 'Скорость',
            texts: ['Скорость игры'],
        },
        {
            title: 'Выбор действия',
            texts: ['Выбор множителя для табличных случаев умножения'],
        },*/
        ],
        settings: [
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
            /*{
            type: 'sliding',
            title: 'Выбор действия',
            reduxKey: 'actionType',
            settings: {
                values: ['Умножение', 'Деление', 'Случайно'],
            },
        },*/
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
        startTable: [
            { text: 'Тема', value: settings.theme },
            { text: 'Количество ответов', value: settings.count },
        ],
    }));
