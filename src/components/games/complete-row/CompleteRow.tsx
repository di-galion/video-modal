import { useState, useEffect } from 'react';
import styles from './CompleteRow.module.scss';
import { useGameSettings } from "../../../hooks/game.ts";
import { useActions } from "../../../hooks/useActions.ts";
import slot from './images/bone_inactive (2).png';
import gem from './images/bone_t0 (2).png';
import { register } from "../../../providers/game/register.tsx";


const CompleteRowGame = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [missingIndex, setMissingIndex] = useState<number | null>(null);
    const [options, setOptions] = useState<number[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState<number>(0);
    const { addCorrectAnswer, setStarCalculationMode, setPageStatus,  addAllAnswers } = useActions();
    const { speed, numberOfRows, level, tips,ratios } = useGameSettings();
    const [answerCount, setAnswerCount] = useState<number>(0);
    const generateNumbers = () => {
        let rangeStart = 0;
        let rangeEnd = 9;

        if (ratios === 2) {
            rangeStart = 10;
            rangeEnd = 99;
        } else if (ratios === 3) {
            rangeStart = 100;
            rangeEnd = 999;
        }

        if (level === 1) {
            const startNum = Math.floor(Math.random() * (rangeEnd - 2 - rangeStart + 1)) + rangeStart;
            const nums = [
                startNum,
                startNum + 1,
                startNum + 2,
            ];

            const digitArray = nums.flatMap(num =>
                ratios === 1
                    ? [num]
                    : String(num).split('').map(Number)
            );

            const startIndex = Math.floor(Math.random() * nums.length);
            const digitStartIndex = ratios === 1
                ? startIndex
                : startIndex * (ratios === 1 ? 3 : 2);

            for (let i = 0; i < (ratios === 3 ? 3 : ratios === 2 ? 2 : 1); i++) {
                digitArray[digitStartIndex + i] = null;
            }

            setNumbers(digitArray);
            setMissingIndex(digitStartIndex);
        } else if (level === 2) {
            const randomNum = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
            const nums = ratios === 1
                ? [randomNum] // Если однозначное число
                : String(randomNum).split('').map(Number);

            setNumbers(nums);
            setMissingIndex(null);
        }
    };

    const generateOptions = (correctAnswer: number) => {
        let rangeStart = 0;
        let rangeEnd = 9;

        if (ratios === 2) {
            rangeStart = 10;
            rangeEnd = 99;
        } else if (ratios === 3) {
            rangeStart = 100;
            rangeEnd = 999;
        }

        const optionsCount = ratios === 2 ? 10 : ratios === 3 ? 9 : 10;

        const correctAnswerString = String(correctAnswer);

        const optionsArray: number[] = [];
        while (optionsArray.length < optionsCount - 1) {
            const randomOption = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

            if (!optionsArray.includes(randomOption)) {
                optionsArray.push(randomOption);
            }
        }

        optionsArray.push(correctAnswer);

        for (let i = optionsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
        }

        if (!optionsArray.includes(correctAnswer)) {
            optionsArray.push(correctAnswer);
        }

        setOptions(optionsArray);
    };
    const calculateGemsCount = (num: number) => {
        return num >= 5 ? num - 4 : num + 1;
    };

    useEffect(() => {
        generateNumbers();
    }, [speed, level]);

    useEffect(() => {
        if (numbers.length) {
            let correctAnswer: number[];

            if (level === 1) {
                if (missingIndex !== null) {
                    if (missingIndex > 0) {
                        correctAnswer = [numbers[missingIndex - 1] + 1, numbers[missingIndex + 1] - 1];
                    } else {
                        correctAnswer = [numbers[missingIndex + 1] - 1];
                    }
                } else {
                    correctAnswer = [numbers[missingIndex]];
                }
            } else {
                correctAnswer = [numbers[0]];
            }

            if (ratios === 2) {
                if (correctAnswer.length === 1) {
                    correctAnswer = [correctAnswer[0], correctAnswer[0] + 1];
                }
            } else if (ratios === 3) {
                if (correctAnswer.length === 1) {
                    correctAnswer = [correctAnswer[0], correctAnswer[0] + 1, correctAnswer[0] + 2];
                }
            }

            generateOptions(correctAnswer);
        }
    }, [numbers, missingIndex, ratios]);

    const handleOptionClick = (number: number) => {
        setSelectedAnswer(number);

        const correctAnswer = level === 1
            ? (missingIndex !== null
                ? (ratios === 2
                    ? numbers.map(num => (num !== null ? String(num).split('').map(Number) : [null]))
                        .flat()[missingIndex]
                    : (missingIndex > 0 ? numbers[missingIndex - 1] + 1 : numbers[missingIndex + 1] - 1))
                : numbers[missingIndex])
            : numbers[0];

        const isCorrect = number === correctAnswer;
        setIsAnswerCorrect(isCorrect);

        if (isCorrect) {
            setScore(score + 1);
            addCorrectAnswer();
            setAnswerCount(answerCount + 1);
            addAllAnswers();
        } else {
            setOptions(prevOptions => [...prevOptions]);
        }

        setTimeout(() => {
            setSelectedAnswer(null);
            setIsAnswerCorrect(null);

            if (answerCount + 1 >= numberOfRows) {
                setStarCalculationMode('correct');
                setPageStatus('finish');
            } else if (isCorrect) {
                generateNumbers();
            }
        }, 1500);
    };

    console.log(numbers);
    console.log(options)
    return (
        <div className={styles.gameContainer}>
            {level === 2 ? (
                <div
                    className={`${styles.numberContainer} ${isAnswerCorrect === true ? styles.correct : isAnswerCorrect === false ? styles.incorrect : ''}`}
                >
                    {numbers.join('')}
                </div>
            ) : (
                <div
                    className={styles.optionsContainerTop}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%',
                        height: '400px',
                        margin: '0 auto',
                        paddingTop: '50px',
                        ...(ratios === 1 ? {
                            gap: '40px',
                        } : {}),
                        ...(ratios === 2 ? {
                            marginTop: '0px',
                        } : {}),
                        ...(ratios === 3 ? {
                            marginTop: '0px',
                        } : {}),
                    }}
                >
                    {numbers.map((num, index) => (
                        <div
                            key={index}
                            className={styles.woodenFrameWrapper}
                            style={{
                                width: '58px',
                                margin: '0',
                                ...(ratios === 1 ? {
                                    margin: '0 20px 0 0',
                                } : {}),
                                ...(ratios === 2 && index % 2 === 1 ? {
                                    marginRight: '30px',
                                } : {}),
                                ...(ratios === 3 && index % 3 === 2 ? {
                                    marginRight: '20px',
                                } : {}),
                            }}
                        >
                            <div className={`${styles.woodenFrameHorizontal} ${styles.top}`}></div>
                            <div className={`${styles.woodenFrameHorizontal} ${styles.bottom}`}></div>
                            <div className={`${styles.woodenFrameVertical} ${styles.left}`}></div>
                            <div className={`${styles.woodenFrameVertical} ${styles.right}`}></div>
                            {num !== null ? (<div className={styles.centerDivider}></div>) : null}
                            <div className={styles.slotContainer}>
                                {[...Array(5)].map((_, slotIndex) => (
                                    <div key={slotIndex} className={styles.slot}>
                                        {num !== null ? (
                                            slotIndex === 0 ? (
                                                num >= 5 ? (
                                                    <img src={gem} alt="gem" style={{width: '40px', height: '24px' , paddingLeft: '7px'}}/>
                                                ) : (
                                                    <img src={slot} alt="slot" style={{width: '40px', height: '24px', paddingLeft: '7px'}}/>
                                                )
                                            ) : (
                                                slotIndex < calculateGemsCount(num) ? (
                                                    <img src={gem} alt="gem" style={{width: '40px', height: '24px', paddingLeft: '9px'}}/>
                                                ) : (
                                                    <img src={slot} alt="slot" style={{width: '40px', height: '24px', paddingLeft: '9px'}}/>
                                                )
                                            )
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                            {tips && (
                                <div className={styles.tipContainer}>
                                    <p className={styles.tipText}>
                                        <span className={styles.tipNumber}>
                                          {num !== null ? num : '?'}
                                        </span>
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className={styles.optionsContainer}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`${styles.woodenFrameWrapper} 
          ${selectedAnswer === option ? (isAnswerCorrect ? styles.correctFrame : styles.incorrectFrame) : ''}`}
                        style={{
                            width: '58px',
                            margin: '0',
                            ...(ratios === 1 ? {
                                margin: '0 20px 0 0',
                            } : {}),
                            ...(ratios === 2 && index % 2 === 0 ? {
                                marginLeft: '20px',
                            } : {}),
                            ...(ratios === 3 && index % 3 === 0 ? {
                                marginLeft: '20px',
                            } : {}),
                        }}
                    >
                        <div className={`${styles.woodenFrameHorizontal} ${styles.top}`}></div>
                        <div className={`${styles.woodenFrameHorizontal} ${styles.bottom}`}></div>
                        <div className={`${styles.woodenFrameVertical} ${styles.left}`}></div>
                        <div className={`${styles.woodenFrameVertical} ${styles.right}`}></div>

                        {option !== null ? (<div className={styles.centerDivider}></div>) : null}

                        <button
                            className={`${styles.optionButton} 
            ${selectedAnswer === option ? (isAnswerCorrect ? styles.correct : styles.incorrect) : ''}`}
                            onClick={() => handleOptionClick(option)}
                            disabled={selectedAnswer !== null}
                        >
                            <div className={styles.slotContainer}>
                                {[...Array(5)].map((_, slotIndex) => (
                                    <div key={slotIndex} className={styles.slot}>
                                        {slotIndex === 0 ? (
                                            option >= 5 ? (
                                                <img src={gem} alt="gem"
                                                     style={{width: '40px', height: '24px', zIndex: 2}}/>
                                            ) : (
                                                <img src={slot} alt="slot"
                                                     style={{width: '40px', height: '24px', zIndex: 2}}/>
                                            )
                                        ) : (
                                            slotIndex < calculateGemsCount(option) ? (
                                                <img src={gem} alt="gem"
                                                     style={{width: '40px', height: '24px', zIndex: 2}}/>
                                            ) : (
                                                <img src={slot} alt="slot"
                                                     style={{width: '40px', height: '24px', zIndex: 2}}/>
                                            )
                                        )}
                                    </div>
                                ))}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export const CompleteRow = () => register(CompleteRowGame, () => ({
    timeDirection: 'right',
    title: 'Тайная пещера',
    starCalculationMode: 'correct',
    infoSettings: [
        {
            title: 'Урвоень',
            texts: [
                'В зависимости от уровня меняются правила игры.',
                '1 - Необходимо дополнить ряд пропущенной ФК',
                '2 - Необходимо составить из ФК заданное многозначное число'
            ]
        },
        {
            title: 'Разряд числе',
            texts: [
                'Выбор между однозначными, двухзначными или трехзначными числами.',
                '1 - однозначное',
                '10 - двухзначное',
                '100 - трехзначное',
            ]
        },
        {
            title: 'Колличество ФК',
            texts: [
                'Колличество ФК в одном ряду'
            ]
        },
        {
            title: 'Подтема',
            texts: []
        },
        {
            title: 'Подсказка',
            texts: [
                'Показывает значение ФК'
            ]
        },
        {
            title: 'Колличество ответов',
            texts: [
                'Общее колличество рядов и многозначных чисел в рамках одной игры'
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
            type: 'ratios',
            title: 'Разряд чисел',
            reduxKey: 'ratios',
            settings: {
                values: [1, 2, 3],
                defaultValue: 1,
            },
        },

        {
            type: 'ratios',
            title: 'Подтема',
            reduxKey: 'ratios',
            settings: {
                values: [4, 5, 6, 7, 8, 9],
                defaultValue: 4,
            },
        },
        {
            type: 'tips',
            title: 'Подсказка',
            reduxKey: 'tips',
            settings: {
                hints: false,
            },
        },
        {
            type: 'numberOfRows',
            title: 'Количество ответов',
            reduxKey: 'numberOfRows',
            settings: {
                max: 20,
                min: 5,
                step: 1,
            },
        },
    ],
    start: {
        title: 'Тайная пещера',
        subTitle1: 'Вставь пропущенные флешкарты чтобы дополнить ряд.',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    }
}));