import {useState, useEffect} from 'react';
import styles from './countExamples.module.scss';
import { useGameFinish, useGameSettings } from "../../../hooks/game.ts";
import { useActions } from "../../../hooks/useActions.ts";
import { ExampleIcon } from '../mult-table/components/ExampleIcon.tsx'
import { NextIcon } from '../mult-table/components/NextIcon.tsx'
import { RepeatIcon} from '../mult-table/components/RepeatIcon.tsx'
import { FinishIcon} from '../mult-table/components/FinishIcon.tsx'
import { register } from "../../../providers/game/register.tsx";

export const CountExamplesGame = () => {
    const [inputValue, setInputValue] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<null | boolean>(null);
    const [isHidden, setIsHidden] = useState(true);
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
    const [showCalculator, setShowCalculator] = useState(false);
    const [isResultVisible, setIsResultVisible] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const { level, rankOfNumbers, numberOfRows, speed } = useGameSettings();
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const [showExample, setShowExample] = useState(false);
    const [currentNumber, setCurrentNumber] = useState<1 | 2>(1);
    const [currentTimer, setCurrentTimer] = useState(speed * 1000);
    const [currentNumberToShow, setCurrentNumberToShow] = useState<1 | 2>(1);
    const finish = useGameFinish();

    const blueShades = ['#003366', '#003B5C', '#002D4C', '#001F3C'];
    const redShades = ['#8B0000', '#B22222', '#9C1C1C', '#7F0000',];

    const calculateTimer = () => {
        if (level === 2) {
            return currentTimer;
        }
        return speed * 1000;
    };

    const generateNumbers = () => {
        let num1, num2, result;

        const rankString = Array.isArray(rankOfNumbers)
            ? rankOfNumbers[0]
            : rankOfNumbers;

        const rank = parseInt(rankString as string, 10);

        if (isNaN(rank)) {
            console.error('Invalid rankOfNumbers value:', rankOfNumbers);
            return;
        }

        const min = rank === 0 ? 1 : Math.pow(10, rank);
        const max = Math.pow(10, rank + 1) - 1;

        let resultMax;
        if (rank === 0) {
            resultMax = 9;
        } else if (rank === 1) {
            resultMax = 99; //
        } else if (rank === 2) {
            resultMax = 999;
        } else if (rank === 3) {
            resultMax = 9999;
        } else {
            console.error('Unsupported rank value:', rank);
            return;
        }

        do {
            num1 = Math.floor(Math.random() * (max - min + 1)) + min;
            num2 = Math.floor(Math.random() * (max - min + 1)) + min;

            if (rank === 0) {
                num1 *= Math.random() > 0.5 ? 1 : -1;
                num2 *= Math.random() > 0.5 ? 1 : -1;
            } else {
                if (Math.random() > 0.5) num1 *= -1;
                if (Math.random() > 0.5) num2 *= -1;
            }

            result = num1 + num2;
        } while (result <= 0 || result > resultMax);

        setFirstNumber(num1);
        setSecondNumber(num2);
        setCorrectAnswer(result);
    };

    const formatNumber = (num: number) => {
        const color = num >= 0
            ? redShades[Math.floor(Math.random() * redShades.length)]
            : blueShades[Math.floor(Math.random() * blueShades.length)];

        return (
            <span style={{ color }}>{num >= 0 ? `+${num}` : `${num}`}</span>
        );
    };

    const restartThisExample = () => {
        setIsAnswerCorrect(null);
        setInputValue('');
        setIsResultVisible(false);
        setShowCalculator(false);
        setIsHidden(true);

        setTimeout(() => {
            setShowCalculator(true);
            setShowExample(false);
            setIsHidden(false);
        }, calculateTimer());

        if (level === 2) {
            setCurrentTimer((prevTimer) => Math.max(prevTimer * 0.85, 1000));
        }

        const timer = calculateTimer();

        setTimeout(() => {
            setShowCalculator(true);
            setShowExample(false);
            setIsHidden(false);
            setCurrentNumber(1)
        }, timer);

        setTimeout(() => {
            setShowCalculator(true);
            setShowExample(false);
            setCurrentNumber(2)
            setIsHidden(false);
        }, timer);
    };

    const showThisExample = () => {
        setShowExample((prev) => !prev);
    };

    const startNewExample = () => {
        setIsHidden(true);
        setInputValue('');
        setIsAnswerCorrect(null);
        setIsResultVisible(false);
        setShowCalculator(false);
        generateNumbers();
        setShowExample(false);

        if (level === 2) {
            setCurrentTimer((prevTimer) => Math.max(prevTimer * 0.85, 1000));
        }

        const timer = calculateTimer();

        setTimeout(() => {
            setIsHidden(false);
            setCurrentNumber(1);
            showNextNumber();
        }, timer);

        setTimeout(() => {
            setIsHidden(false);
            setShowCalculator(true);
            setCurrentNumber(2);
        }, timer);
    };

    const checkAnswer = () => {
        const userAnswer = parseInt(inputValue, 10);
        if (userAnswer === correctAnswer) {
            setIsAnswerCorrect(true);
            addCorrectAnswer();
            setCorrectAnswersCount(prev => prev + 1);
        } else {
            setIsAnswerCorrect(false);
        }
        setIsResultVisible(true);
        addAllAnswers();
    };

    const handleInput = (value: string) => {
        if (value === 'C') {
            setInputValue('');
        } else if (value === '⌫') {
            setInputValue((prev) => prev.slice(0, -1));
        } else if (!isNaN(Number(value))) {
            setInputValue((prev) => prev + value);
        }
    };



    useEffect(() => {
        if (correctAnswersCount >= numberOfRows) {
            finish();
        }
    }, [correctAnswersCount, numberOfRows, finish]);

    const showNextNumber = () => {
        setCurrentNumberToShow((prev) => (prev === 1 ? 2 : 1));
    };

    useEffect(() => {
        setTimeout(() => {
            showNextNumber();

        }, 1000);
    }, [firstNumber, secondNumber]);

    useEffect(() => {
        startNewExample();
    }, []);

    return (
        <div className={styles.calculatorContainer}>
            <div className={styles.displayWrapper}>
                {isHidden ? (
                    <>
                        <div className={styles.generatedNumbers}>
                            {currentNumberToShow === 1 ? (
                                <div className={styles.number}>{formatNumber(firstNumber)}</div>
                            ) : (
                                <div className={styles.number}>{formatNumber(secondNumber)}</div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        {showCalculator && (
                            <>
                                <input
                                    type="text"
                                    className={`${styles.display} ${
                                        isAnswerCorrect === false ? styles.incorrect : ''
                                    } ${isAnswerCorrect === true ? styles.correct : ''}`}
                                    value={inputValue}
                                    readOnly
                                />
                                {showCalculator && !isResultVisible && (
                                    <div className={styles.numpad}>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⌫'].map((num) => (
                                            <button
                                                key={num}
                                                className={styles.numpadBtn}
                                                onClick={() => handleInput(String(num))}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>

            {isResultVisible && (
                <div className={styles.resultInner}>
                    <div className={styles.result} data-correct={Number(isAnswerCorrect)}>
                        <span>{isAnswerCorrect ? 'Верно' : 'Не верно'}</span>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            className={styles.button_big}
                            onClick={() => restartThisExample()}
                        >
                        <span>
                            <RepeatIcon/>
                        </span>
                        </button>
                        <button
                            className={styles.button_big}
                            onClick={() => showThisExample()}
                        >
                        <span>
                            <ExampleIcon/>
                        </span>
                        </button>
                        <button
                            className={styles.button_big}
                            onClick={() => startNewExample()}
                        >
                        <span>
                            <NextIcon/>
                        </span>
                        </button>
                    </div>
                </div>
            )}

            <div
                className={styles.example}
                style={{
                    visibility: showExample ? 'visible' : 'hidden',
                }}
            >
                {`${firstNumber} + ${secondNumber} = ${correctAnswer}`}
            </div>

            {!isAnswerCorrect && !isResultVisible && (
                <button
                    className={styles.checkButton}
                    style={{
                        backgroundColor: inputValue ? '#FCBD11' : '#ccc',
                        color: inputValue ? '#c4521a' : '#666666',
                        cursor: inputValue ? 'pointer' : 'not-allowed',
                        transition: 'background-color 0.3s, box-shadow 0.3s',
                        boxShadow: inputValue ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
                    }}
                    onClick={checkAnswer}
                    disabled={!inputValue}
                >
                    Проверить
                </button>
            )}
            <div className={styles.finish_btn}>
            {isResultVisible && (
                <button
                    className={styles.button_big}
                    onClick={() => finish()}
                >
                    <span>
                        <FinishIcon/>
                    </span>
                </button>
                )}
            </div>
        </div>
    );
};
export const CountExamples = () => register(CountExamplesGame, (settings) => ({
    timeDirection: 'right',
    title: 'Счет примеров',
    starCalculationMode: 'correct',
    infoSettings: [
        {
            title: 'Урвоень',
            texts: [
                'В зависимости от уровня меняются правила игры.',
                '1 - Действия выводятся по заданным параметрам',
                '2 - Скорость вывода действия для каждого нового примера изменяется'
            ]
        },
        {
            title: 'Тема',
            texts: [
                'Выбирается согласно теме занятия'
            ]
        },
        {
            title: 'Подтема',
            texts: [
                'Выбирается согласно теме занятия'
            ]
        },

        {
            title: 'Разряд числа',
            texts: [
                'Выбор между однозначными, двухзначными или трехзначными числами.',
                '1 - однозначное',
                '10 - двухзначное',
                '100 - трехзначное',
            ]
        },
        {
            title: 'Колличество действий',
            texts: [
                'Количество действий для одного примера'
            ]
        },
        {
            title: 'Скорость',
            texts: [
                'Длительность отображения одного действия на экране'
            ]
        },

    ],
    settings: [
        {
            type: "level",
            title: 'Уровень',
            reduxKey: 'level',
            settings: {
                max: 2,
                min: 1,
                step: 1,
            }
        },
        {
            type: 'theme',
            title: 'Тема',
            reduxKey: 'theme',
            settings: {
                values: ['Просто', 'Друзья', 'Братья', 'Анзан'],
                defaultValue: 'Просто',
            },
        },
        {
            type: 'underTheme',
            title: 'Подтема',
            reduxKey: 'underTheme',
            settings: {
                defaultValue: 'Сложение',
            },
        },
        {
            type: 'rankOfNumbers',
            title: 'Разряд чисел',
            reduxKey: 'rankOfNumbers',
            settings: {
                min: 0,
                max: 3,
                step: 1,
                defaultValue: '0',
                values: ['1', '0', '0', '0'],
            },
        },
        {
            type: 'numberOfRows',
            title: 'Количество ответов',
            reduxKey: 'numberOfRows',
            settings: {
                max: 100,
                min: 1,
                step: 1,
                defaultValue: 5,
            },
        },
        {
            type: 'speed',
            title: 'Стартовая скорость',
            reduxKey: 'speed',
            settings: {
                min: 0,
                max: 10,
                step: 0.1,
                defaultValue: 2,
            },
        },
    ],
    start: settings.level === 1 ? {
        title: 'Счет примеров',
        subTitle1: 'Посчитай примеры.',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    } : {
        title: 'Счет примеров',
        subTitle1: 'Посчитай примеры.',
        subTitle2: 'Будь внимателен! скорость вывода действий постепенно изменяется.',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    },
    startTable: [
        { text: 'Тема', value: '' },
        { text: 'Подтема', value: '' },
        { text: 'Разряд чисел', value: settings.rankOfNumbers },
        { text: 'Колличество действий', value: settings.numberOfRows },
        { text: 'Скорость', value: settings.speed },
    ]
}));

// switch (theme) {
//     case 'Просто':
//         return [4, 2, 3, 4]
//     case 'Бртья':
//         return [1, 2, 3, 4]
//     case 'Друзья':
//         return [9, 8, 7, 6, 5, 4, 3, 2, 1]
//     case 'Переход':
//         return [50, 100]
//     case 'Друзья и Братья':
//         return [9, 8, 7, 6]
//     case 'Анзан':
//         return ['Сложение', 'Вычитание', 'Случайно']
// }


