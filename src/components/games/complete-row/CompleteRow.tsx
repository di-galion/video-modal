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
    const { speed, numberOfRows, level, tips,rankOfNumbers } = useGameSettings();
    const [answerCount, setAnswerCount] = useState<number>(0);
    const generateNumbers = () => {
        let rangeStart = 0;
        let rangeEnd = 9;

        if (rankOfNumbers === '1') {
            rangeStart = 10;
            rangeEnd = 99;
        } else if (rankOfNumbers === '2') {
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
                rankOfNumbers === '0'
                    ? [num] // Если однозначные, каждое число отдельно
                    : String(num).split('').map(Number)
            );

            const startIndex = Math.floor(Math.random() * nums.length);
            const digitStartIndex = rankOfNumbers === '0'
                ? startIndex // Если однозначные, индекс числа = индекс цифры
                : startIndex * (rankOfNumbers === '2' ? 3 : 2);

            for (let i = 0; i < (rankOfNumbers === '2' ? 3 : rankOfNumbers === '1' ? 2 : 1); i++) {
                digitArray[digitStartIndex + i] = null;
            }

            setNumbers(digitArray);
            setMissingIndex(digitStartIndex);
        } else if (level === 2) {
            const randomNum = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
            const nums = rankOfNumbers === '0'
                ? [randomNum] // Если однозначные, сохраняем как есть
                : String(randomNum).split('').map(Number);

            setNumbers(nums);
            setMissingIndex(null);
        }
    };
    const generateOptions = (correctAnswer: number) => {
        const optionsSet = new Set<number>();
        let rangeStart = 0;
        let rangeEnd = 9;

        if (rankOfNumbers === '1') {
            rangeStart = 10;
            rangeEnd = 99;
        } else if (rankOfNumbers === '2') {
            rangeStart = 100;
            rangeEnd = 999;
        }

        const optionsCount =
            rankOfNumbers === '1'
                ? 10
                : rankOfNumbers === '2'
                    ? 9
                    : 10;

        optionsSet.add(correctAnswer);

        while (optionsSet.size < optionsCount) {
            const randomOption = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;

            if (rankOfNumbers === '2') {
                const digits = String(randomOption).split('').map(Number);
                digits.forEach(digit => {
                    if (digit >= 0 && digit <= 9) {
                        optionsSet.add(digit);
                    }
                });
            } else if (rankOfNumbers === '1') {
                const digits = String(randomOption).split('').map(Number);
                digits.forEach(digit => {
                    if (digit >= 0 && digit <= 9) {
                        optionsSet.add(digit);
                    }
                });
            } else {
                if (randomOption >= 0 && randomOption <= 9) {
                    optionsSet.add(randomOption);
                }
            }
        }

        const optionsArray = Array.from(optionsSet);

        // Перемешиваем опции
        for (let i = optionsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsArray[i], optionsArray[j]] = [optionsArray[j], optionsArray[i]];
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
            const correctAnswer = level === 1
                ? (missingIndex !== null
                    ? (missingIndex > 0 ? numbers[missingIndex - 1] + 1 : numbers[missingIndex + 1] - 1)
                    : numbers[missingIndex])
                : numbers[0];

            generateOptions(correctAnswer);
        }
    }, [numbers, missingIndex]);

    const handleOptionClick = (number: number) => {
        setSelectedAnswer(number);

        const correctAnswer = level === 1
            ? (missingIndex !== null
                ? (rankOfNumbers === '1'
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
                    {numbers[0]}
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
                        ...(rankOfNumbers === '0' ? {
                            gap: '40px',
                        } : {}),
                        ...(rankOfNumbers === '1' ? {
                            marginTop: '0px',
                        } : {}),
                        ...(rankOfNumbers === '2' ? {
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
                                marginLeft: '7px',
                                ...(rankOfNumbers === '0' ? {
                                    margin: '0 20px 0 0',
                                } : {}),
                                ...(rankOfNumbers === '1' && index % 2 === 1 ? {
                                    marginRight: '30px',
                                } : {}),
                                ...(rankOfNumbers === '2' && index % 3 === 2 ? {
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
                            ...(rankOfNumbers === '0' ? {
                                margin: '0 20px 0 0',
                            } : {}),
                            ...(rankOfNumbers === '1' && index % 2 === 0 ? {
                                marginLeft: '20px',
                            } : {}),
                            ...(rankOfNumbers === '2' && index % 3 === 0 ? {
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
            type: 'rankOfNumbers',
            title: 'Разряд чисел',
            reduxKey: 'rankOfNumbers',
            settings: {
                min: 0,
                max: 2,
                step: 1,
                defaultValue: 0,
                values: ['1', '0', '0'],
            },
        },
        // {
        //     type: 'ratios',
        //     title: 'Количество ФК',
        //     reduxKey: 'ratios',
        //     settings: {
        //         values: [3, 5],
        //         defaultValue: 3,
        //     },
        // },
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