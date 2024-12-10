import { useState, useEffect, useRef } from 'react';
import styles from './FlashCards.module.scss';
import { useGameSettings } from '../../../hooks/game.ts';
import { useActions } from '../../../hooks/useActions.ts';
import slot from './images/bone_inactive.png';
import gem from './images/bone.png';
import { register } from '../../../providers/game/register.tsx';
import { generateRandomNumbers } from './functions.ts';
import { useSyncStorage } from '../../../api/socket/useSyncStorage.ts';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket.ts';
import { toTimeFormat } from '../../../utils/timeToFormat.ts';

const FlashCardsGame = () => {
    const [inputValue, setInputValue] = useState('');
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(
        null
    );
    const [isHidden, setIsHidden] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState<number[]>([]);
    const [, setIsScaleVisible] = useState(true);
    const { level, ratios, speed } = useGameSettings<number>();
    const [currentSpeed, setCurrentSpeed] = useState(speed * 1000);
    const { sendAction } = useWebSocket();
    const timeout = useRef<NodeJS.Timeout>();

    const { data = [], updateStorage } = useSyncStorage<{ data: number[] }>();

    const { addCorrectAnswer, addAllAnswers } = useActions();

    useEffect(() => {
        resetGameState();
        initializeNewNumber();
        setInputValue('');
    }, [ratios]);

    const resetGameState = () => {
        setInputValue('');
        setIsAnswerCorrect(null);
        setCorrectAnswer([]);
        setIsHidden(true);
        setCurrentSpeed(speed * 1000);
    };

    const runTimer = () => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setIsScaleVisible(false);
            setIsHidden(false);
        }, currentSpeed + 500);
    };

    const stopTimer = () => {
        clearTimeout(timeout.current);
        setIsScaleVisible(false);
        setIsHidden(false);
    };

    useEffect(() => {
        if (data.length) {
            setCorrectAnswer(data);
            setIsScaleVisible(true);
            setIsHidden(true);
            runTimer();
            setCurrentSpeed((prevSpeed) => Math.max(prevSpeed * 0.9, 350));
        }
    }, [data]);

    const initializeNewNumber = () => {
        updateStorage({
            data: generateRandomNumbers(level, ratios, correctAnswer),
        });
    };

    const calculateGemsCount = (digit: number) => {
        return digit >= 5 ? digit - 4 : digit + 1;
    };

    const checkAnswer = () => {
        if (!inputValue) {
            return;
        }

        const isCorrect = inputValue === correctAnswer.join('');
        setIsAnswerCorrect(isCorrect);
        addAllAnswers();

        if (isCorrect) {
            addCorrectAnswer();
        } else {
            setInputValue(correctAnswer.join(''));
        }

        setTimeout(() => {
            setIsScaleVisible(true);
            setIsHidden(true);
            setIsAnswerCorrect(null);
            setInputValue('');
            initializeNewNumber();
        }, 1000);
    };

    const handleInput = (value: string | number) => {
        sendAction('input', { value });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        sendAction('keyDown', { key: event.key });
    };

    const handleChange = (value: string | number) => {
        if (value === 'C') {
            setInputValue('');
        } else if (value === '⌫') {
            setInputValue((prev) => prev.slice(0, -1));
        } else if (!isNaN(Number(value))) {
            stopTimer();
            setInputValue((prev) => prev + value);
        }
    };

    useWsAction((name, params = {}) => {
        switch (name) {
            case 'keyDown':
                if (params.key === 'Enter') {
                    checkAnswer();
                } else if (params.key === 'Backspace') {
                    handleChange('⌫');
                } else if (!isNaN(Number(params.key))) {
                    handleChange(params.key);
                } else if (params.key.toLowerCase() === 'c') {
                    handleChange('C');
                }
                break;
            case 'check':
                checkAnswer();
                break;
            case 'input':
                handleChange(params.value);
                break;
        }
    });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={styles.calculatorContainer}>
            <div className={styles.displayWrapper}>
                <input
                    type="text"
                    className={`${styles.display} ${
                        isAnswerCorrect === false ? styles.incorrect : ''
                    } ${isAnswerCorrect === true ? styles.correct : ''} ${
                        isAnswerCorrect === false ? styles.highlighted : ''
                    }`}
                    value={inputValue}
                    readOnly={isAnswerCorrect === false}
                />

                {!isHidden ? (
                    <div className={styles.numpad}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '⌫'].map((num) => (
                            <button
                                key={num}
                                className={styles.numpadBtn}
                                onClick={() => handleInput(num)}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className={styles.woodenFrameContainer}>
                        {Array.isArray(correctAnswer)
                            ? correctAnswer.map((digit, containerIndex) => (
                                  <div
                                      key={containerIndex}
                                      className={styles.woodenFrameWrapper}
                                  >
                                      <div
                                          className={`${styles.woodenFrameHorizontal} ${styles.top}`}
                                      ></div>
                                      <div
                                          className={`${styles.woodenFrameHorizontal} ${styles.bottom}`}
                                      ></div>
                                      <div
                                          className={`${styles.woodenFrameVertical} ${styles.left}`}
                                      ></div>
                                      <div
                                          className={`${styles.woodenFrameVertical} ${styles.right}`}
                                      ></div>

                                      <div
                                          className={styles.centerDivider}
                                      ></div>

                                      <div className={styles.slotContainer}>
                                          {[...Array(5)].map((_, index) => (
                                              <div
                                                  key={index}
                                                  className={styles.slot}
                                              >
                                                  {index === 0 ? (
                                                      digit >= 5 ? (
                                                          <img
                                                              src={gem}
                                                              alt="gem"
                                                              style={{
                                                                  width: '70px',
                                                                  height: '43px',
                                                              }}
                                                          />
                                                      ) : (
                                                          <img
                                                              src={slot}
                                                              alt="slot"
                                                              style={{
                                                                  width: '70px',
                                                                  height: '43px',
                                                              }}
                                                          />
                                                      )
                                                  ) : index <
                                                    calculateGemsCount(
                                                        digit
                                                    ) ? (
                                                      <img
                                                          src={gem}
                                                          alt="gem"
                                                          style={{
                                                              width: '70px',
                                                              height: '43px',
                                                          }}
                                                      />
                                                  ) : (
                                                      <img
                                                          src={slot}
                                                          alt="slot"
                                                          style={{
                                                              width: '70px',
                                                              height: '43px',
                                                          }}
                                                      />
                                                  )}
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                )}
            </div>

            <button
                className={styles.checkButton}
                style={{
                    backgroundColor: inputValue ? '#FCBD11' : '#ccc',
                    color: inputValue ? '#c4521a' : '#666666',
                    cursor: inputValue ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                    boxShadow: inputValue
                        ? '0 4px 8px rgba(0, 0, 0, 0)'
                        : 'none',
                }}
                onMouseEnter={(e) => {
                    if (inputValue) {
                        e.currentTarget.style.backgroundColor = '#f7c43e';
                        e.currentTarget.style.boxShadow =
                            '0 4px 8px rgba(0, 0, 0, 0.3)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (inputValue) {
                        e.currentTarget.style.backgroundColor = '#FCBD11';
                        e.currentTarget.style.boxShadow = 'none';
                    }
                }}
                onClick={() => sendAction('check')}
                disabled={!inputValue}
            >
                Проверить
            </button>
        </div>
    );
};

export const FlashCards = () =>
    register(FlashCardsGame, (settings) => ({
        timeDirection: 'left',
        title: 'Флешкарты',
        starCalculationMode: 'correct',
        infoSettings: [
            {
                title: 'Уровень',
                texts: [
                    'В зависимости от уровня изменяются правила игры:',
                    '1 - Появляются ФК только заданного разряда',
                    '2 - Появляются ФК любого разряда',
                ],
            },
            {
                title: 'Разряд чисел',
                texts: [
                    'Выбор между однозначными, двузначными или трехзначными числами',
                    '1 - однозначные',
                    '10 - двузначные',
                    '100 - трехзначные',
                ],
            },
            {
                title: 'Подтема',
                texts: [
                    '1 — однозначные:',
                    'от 0 до выбранного значения',
                    '',
                    '10 — двузначные',
                    '10-90 круглые десятки (10, 20, 30, ..., 90)',
                    '10-19 числа от 10 до 19 (10, 11, 12, ...,19)',
                    '10-99 все двузначные числа',
                    '',
                    '100 — трехзначные',
                    '100-900 круглые сотни (100, 200, 300, ..., 900)',
                    '100-999 все трехзначные числа',
                ],
            },
            {
                title: 'Время игры',
                texts: ['Общая продолжительность игры'],
            },
            {
                title: 'Стартовая скорость',
                texts: ['Выбор длительности показа первой ФК'],
            },
            {
                title: 'Режим',
                texts: [
                    'В зависимости от режима изменяется количество правильных ответов, необходимое для успешного завершения игры',
                ],
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
                type: 'ratios',
                title: 'Разряд чисел',
                reduxKey: 'ratios',
                settings: {
                    values: [1, 2, 3, 4],
                    defaultValue: 1,
                },
            },
            {
                type: 'items',
                title: 'Подтема',
                reduxKey: 'items',
                settings: {
                    defaultValue: 2,
                    min: 4,
                    max: 9,
                    step: 1,
                },
            },
            {
                type: 'time',
                title: 'Время игры',
                reduxKey: 'time',
                settings: {
                    max: 300,
                    min: 30,
                    step: 30,
                    update: false,
                },
            },
            {
                type: 'speed',
                title: 'Стартовая скорость',
                reduxKey: 'speed',
                settings: {
                    min: 1,
                    max: 4,
                    step: 0.2,
                    defaultValue: 1.8,
                    update: false,
                },
            },
            {
                type: 'sliding',
                title: 'Режим',
                reduxKey: 'mode',
                settings: {
                    values: ['Легкий', 'Средний', 'Сложный', 'Экстрим'],
                },
            },
        ],
        start: {
            title: 'Флешкарты',
            subTitle1: 'Запомни флешкарту и укажи ее числовое значение',
            subTitle2: 'Будь внимателен! Флешкарты постепенно ускоряются..',
            subTitle3: '',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
        startTable: [
            {
                text: 'Время игры',
                value: toTimeFormat(settings.time),
            },
            { text: 'Стартовая скорость', value: settings.speed },
        ],
        useImages: [slot, gem],
    }));
