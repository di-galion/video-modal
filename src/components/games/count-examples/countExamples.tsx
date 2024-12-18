import { useState, useEffect } from 'react';
import styles from './countExamples.module.scss';
import { useGameFinish, useGameSettings } from '../../../hooks/game.ts';
import { useActions } from '../../../hooks/useActions.ts';
import { ExampleIcon } from '../mult-table/components/ExampleIcon.tsx';
import { NextIcon } from '../mult-table/components/NextIcon.tsx';
import { RepeatIcon } from '../mult-table/components/RepeatIcon.tsx';
import { FinishIcon } from '../mult-table/components/FinishIcon.tsx';
import { register } from '../../../providers/game/register.tsx';
import { useSyncStorage } from '../../../api/socket/useSyncStorage.ts';
import { useGameAccess } from '../../../hooks/account.ts';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket.ts';

export const CountExamplesGame = () => {
    const [inputValue, setInputValue] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<null | boolean>(
        null
    );
    const [currentStage, setCurrentStage] = useState<0 | 1 | 2 | 3>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const { level, ratios, numberOfRows, speed } = useGameSettings<number>();
    const {
        numbers = [],
        correctAnswer = null,
        numberColors = {},
        updateStorage,
    } = useSyncStorage<{
        numbers: number[];
        correctAnswer: number | null;
        numberColors: { [key: string]: string };
    }>();

    const [isExampleVisible, setIsExampleVisible] = useState(false);
    const [dynamicSpeed, setDynamicSpeed] = useState(speed);
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const finish = useGameFinish();
    const blueShades = ['#337CB3', '#003366', '#003B5C', '#002D4C', '#001F3C'];
    const redShades = ['#8B0000', '#B22222', '#9C1C1C', '#7F0000', '#296C3B'];

    const isGameAccess = useGameAccess();

    const generateNumbers = () => {
        if (isGameAccess) {
            const rank = parseInt(
                (Array.isArray(ratios) ? ratios[0] : ratios) as string,
                10
            );
            if (isNaN(rank)) return;

            const ranges = [
                { min: 2, max: 9, resultMax: 9 },
                { min: 10, max: 99, resultMax: 99 },
                { min: 100, max: 999, resultMax: 999 },
                { min: 1000, max: 9999, resultMax: 9999 },
            ];

            const { min, max } = ranges[rank - 1] || {};
            const generatedNumbers = [];
            let currentResult = 0;

            for (let i = 0; i < numberOfRows; i++) {
                let num;
                do {
                    num = Math.floor(Math.random() * (max - min + 1)) + min;
                    if (Math.random() > 0.5) num *= -1;
                } while (currentResult + num <= -1 || currentResult + num > max);

                currentResult += num;
                generatedNumbers.push(num);
            }

            updateStorage({
                numbers: generatedNumbers,
                correctAnswer: currentResult,
                numberColors: generatedNumbers.reduce(
                    (acc, num) => ({
                        ...acc,
                        [num]:
                            num >= 0
                                ? redShades[
                                    Math.floor(Math.random() * redShades.length)
                                    ]
                                : blueShades[
                                    Math.floor(Math.random() * blueShades.length)
                                    ],
                    }),
                    {}
                ),
            });
        }
    };

    const formatNumber = (num: number) => {
        const color =
            numberColors[num] ||
            (num >= 0
                ? redShades[Math.floor(Math.random() * redShades.length)]
                : blueShades[Math.floor(Math.random() * blueShades.length)]);
        return <span style={{ color }}>{num >= 0 ? `+${num}` : `${num}`}</span>;
    };

    const restartThisExample = () => {
        sendAction('restart');
    };

    const handleRestartThisExample = () => {
        setInputValue('');
        setIsAnswerCorrect(null);
        setCorrectAnswersCount(0);
        setCurrentStage(0);
        setCurrentIndex(0);

        if (numbers.length > 0) {
            let index = 0;
            const intervalId = setInterval(() => {
                setCurrentIndex(index);
                index += 1;

                if (index >= numbers.length) {
                    clearInterval(intervalId);
                    setCurrentStage(2);
                }
            }, dynamicSpeed * 1000);

            return () => clearInterval(intervalId);
        }
    };

    const showThisExample = () => {
        sendAction('showThisExample');
    };

    const handleShowThisExample = () => {
        setIsExampleVisible((prev) => !prev);
    };

    const { sendAction } = useWebSocket();

    const startNewExample = () => {
        sendAction('startNewExample');
    };

    const handleStartNewExample = () => {
        setInputValue('');
        setIsAnswerCorrect(null);
        setCurrentStage(0);
        generateNumbers();
    };

    useWsAction((name, params = {}) => {
        console.log(name);
        switch (name) {
            case 'startNewExample':
                handleStartNewExample();
                break;
            case 'input':
                input(params.value);
                break;
            case 'keyDown':
                keyDown(params.event);
                break;
            case 'check':
                handleCheckAnswer();
                break;
            case 'restart':
                handleRestartThisExample();
                break;
            case 'showThisExample':
                handleShowThisExample();
                break;
        }
    });

    const handleCheckAnswer = () => {
        const userAnswer = parseInt(inputValue, 10);
        if (userAnswer === correctAnswer) {
            setIsAnswerCorrect(true);
            addCorrectAnswer();
            setCorrectAnswersCount((prev) => prev + 1);

            if (level === 2) {
                setDynamicSpeed((prevSpeed) => prevSpeed * 0.85);
            }
        } else {
            setIsAnswerCorrect(false);
        }
        addAllAnswers();

        setCurrentStage(3);
    };

    const checkAnswer = () => {
        sendAction('check');
    };

    useEffect(() => {
        startNewExample();
    }, []);


    useEffect(() => {
        if (currentStage === 0) {
            let index = 0;

            setCurrentIndex(index);

            const intervalId = setInterval(() => {
                index += 1;
                if (index < numbers.length) {
                    setCurrentIndex(index);
                } else {
                    clearInterval(intervalId);
                    setCurrentStage(2);
                }
            }, dynamicSpeed * 1000);

            return () => clearInterval(intervalId);
        }
    }, [currentStage, dynamicSpeed, numbers]);



    useEffect(() => {
        console.log('Current stage changed:', currentStage);
    }, [currentStage]);

    const input = (value: string) => {
        if (value === 'C') {
            setInputValue('');
        } else if (value === '⌫') {
            setInputValue((prev) => prev.slice(0, -1));
        } else if (!isNaN(Number(value))) {
            setInputValue((prev) => prev + value);
        }
    };

    const handleInput = (value: string) => {
        sendAction('input', { value });
    };

    const keyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (currentStage === 2 && inputValue) {
                handleCheckAnswer();
            } else if (currentStage === 3) {
                handleStartNewExample();
            }
        } else if (currentStage === 2) {
            if (event.key >= '0' && event.key <= '9') {
                input(event.key);
            } else if (event.key === 'Backspace') {
                input('⌫');
            } else if (event.key.toLowerCase() === 'c') {
                input('C');
            }
        }
    };

    //клава
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            sendAction('keyDown', { event });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentStage, inputValue, startNewExample, checkAnswer]);

    return (
        <div className={styles.container}>
            <div className={styles.calculatorContainer}>
                <div className={styles.displayWrapper}>
                    <div className={styles.generatedNumbers}>
                        {currentStage === 0 && (
                            <div
                                className={`${styles.number}`}
                                style={{
                                    color: numberColors[numbers[currentIndex]] || '#000',
                                }}
                            >
                                {formatNumber(numbers[currentIndex])}
                            </div>
                        )}
                    </div>
                    {currentStage === 2 && (
                        <>
                            <input
                                type="text"
                                className={`${styles.display} ${
                                    isAnswerCorrect === false
                                        ? styles.incorrect
                                        : ''
                                } ${
                                    isAnswerCorrect === true ? styles.correct : ''
                                }`}
                                value={inputValue}
                                readOnly
                            />
                            <div className={styles.numpad}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⌫'].map(
                                    (num) => (
                                        <button
                                            key={num}
                                            className={styles.numpadBtn}
                                            onClick={() => handleInput(String(num))}
                                        >
                                            {num}
                                        </button>
                                    )
                                )}
                            </div>
                            <button
                                className={styles.checkButton}
                                style={{
                                    backgroundColor: inputValue
                                        ? '#FCBD11'
                                        : '#ccc',
                                    color: inputValue ? '#c4521a' : '#666666',
                                    cursor: inputValue ? 'pointer' : 'not-allowed',
                                    transition:
                                        'background-color 0.3s, box-shadow 0.3s',
                                    boxShadow: inputValue
                                        ? '0 4px 8px rgba(0, 0, 0, 0.2)'
                                        : 'none',
                                }}
                                onClick={checkAnswer}
                                disabled={!inputValue}
                            >
                                Проверить
                            </button>
                        </>
                    )}

                    {currentStage === 3 && (
                        <>
                            <input
                                type="text"
                                className={`${styles.display} ${
                                    isAnswerCorrect === false
                                        ? styles.incorrect
                                        : ''
                                } ${
                                    isAnswerCorrect === true ? styles.correct : ''
                                }`}
                                value={inputValue}
                                readOnly
                            />
                            <div className={styles.resultInner}>
                                <div
                                    className={styles.result}
                                    data-correct={Number(isAnswerCorrect)}
                                >
                                <span>
                                    {isAnswerCorrect ? 'Верно' : 'Не верно'}
                                </span>
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
                        </>
                    )}
                </div>
                <div
                    className={styles.example}
                    style={{
                        visibility: isExampleVisible && currentStage === 3 ? 'visible' : 'hidden',
                    }}
                >
                    {numbers.map((num, index) => (
                        <span key={index}>
            {index > 0 && num >= 0 ? ' + ' : ' '}
                            {num >= 0 ? `${num}` : `${num}`}
        </span>
                    ))}
                    {' = '}
                    {correctAnswer}
                </div>
            </div>
            <div className={styles.finish_btn}>
                {currentStage === 3 && (
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
export const CountExamples = () =>
    register(CountExamplesGame, (settings) => ({
        timeDirection: 'right',
        title: 'Счет примеров',
        starCalculationMode: 'correct',
        infoSettings: [
            {
                title: 'Урвоень',
                texts: [
                    'В зависимости от уровня меняются правила игры.',
                    '1 - Действия выводятся по заданным параметрам',
                    '2 - Скорость вывода действия для каждого нового примера изменяется',
                ],
            },
            {
                title: 'Тема',
                texts: ['Выбирается согласно теме занятия'],
            },
            {
                title: 'Подтема',
                texts: ['Выбирается согласно теме занятия'],
            },

            {
                title: 'Разряд числа',
                texts: [
                    'Выбор между однозначными, двухзначными или трехзначными числами.',
                    '1 - однозначное',
                    '10 - двухзначное',
                    '100 - трехзначное',
                ],
            },
            {
                title: 'Колличество действий',
                texts: ['Количество действий для одного примера'],
            },
            {
                title: 'Скорость',
                texts: ['Длительность отображения одного действия на экране'],
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
                },
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
                type: 'ratios',
                title: 'Разряд чисел',
                reduxKey: 'ratios',
                settings: {
                    values: ['1', '2', '3', '4'],
                    defaultValue: '1',
                },
            },
            {
                type: 'numberOfRows',
                title: 'Количество действий',
                reduxKey: 'numberOfRows',
                settings: {
                    max: 100,
                    min: 2,
                    step: 1,
                    defaultValue: 2,
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
        start:
            settings.level === 1
                ? {
                      title: 'Счет примеров',
                      subTitle1: 'Посчитай примеры.',
                      titleBottom:
                          'Не допускай ошибок для успешного завершения игры.',
                  }
                : {
                      title: 'Счет примеров',
                      subTitle1: 'Посчитай примеры.',
                      subTitle2:
                          'Будь внимателен! скорость вывода действий постепенно изменяется.',
                      titleBottom:
                          'Не допускай ошибок для успешного завершения игры.',
                  },
        startTable: [
            { text: 'Тема', value: settings.theme },
            { text: 'Подтема', value: settings.underTheme },
            { text: 'Разряд чисел', value: settings.ratios },
            { text: 'Колличество действий', value: settings.numberOfRows },
            { text: 'Скорость', value: settings.speed },
        ],
    }));

// switch (theme) {
//     case 'Просто':
//         return  [4, 5, 6, 7, 8, 9, 10, 19, 100]
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

// switch (theme) {
//     case 'Просто':
//         return [4, 5, 6, 7, 8, 9, 10, 19, 100];
//
//     case 'Братья':
//         switch (underTheme) {
//             case '1':
//                 num1 = 5;
//                 num2 = -4;
//                 result = num1 + num2;
//                 break;
//             case '2':
//                 num1 = 5;
//                 num2 = -3;
//                 result = num1 + num2;
//                 break;
//             case '3':
//                 num1 = 5;
//                 num2 = -4;
//                 result = num1 + num2;
//                 break;
//             case '4':
//                 num1 = 5;
//                 num2 = -5;
//                 result = num1 + num2;
//                 break;
//             default:
//                 num1 = Math.floor(Math.random() * 10) + 1;
//                 num2 = Math.floor(Math.random() * 10) + 1;
//                 result = num1 + num2;
//                 break;
//         }
//         break;
//
//     case 'Друзья':
//         return [9, 8, 7, 6, 5, 4, 3, 2, 1];
//
//     case 'Переход':
//         return [50, 100];
//
//     case 'Друзья и Братья':
//         return [9, 8, 7, 6];
//
//     case 'Анзан':
//         return ['Сложение', 'Вычитание', 'Случайно'];
//
//     default:
//         return;
// }
