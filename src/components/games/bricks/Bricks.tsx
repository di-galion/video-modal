import { useState, useEffect } from "react";
import brickImage from "./images/orange_brick.png";
import answersImage from "./images/answer_brick.png";
import bgImage from "./images/bg.jpg"
import styles from './Bricks.module.scss';
import { register } from "../../../providers/game/register.tsx";
import { useGameSettings, useGameFinish } from "../../../hooks/game.ts";
import { useActions } from "../../../hooks/useActions.ts";

const BricksGames = () => {
    const { level, ratios, numberOfRows, speed } = useGameSettings();
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const finish = useGameFinish();

    const [bricks, setBricks] = useState<any[]>([]);
    const [fallingBrick, setFallingBrick] = useState<any | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);
    const [round, setRound] = useState(1);
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentSum, setCurrentSum] = useState(0);
    const [isDestroyed, setIsDestroyed] = useState(false);
    const [answersAnimationFinished, setAnswersAnimationFinished] = useState(false);
    const [backgroundOffset, setBackgroundOffset] = useState(0);

    const maxRounds = level === 1 ? 3 : level === 2 ? 5 : 7;

    const generateNumber = () => {
        const sign = Math.random() < 0.5 ? 1 : -1;
        if (ratios === 1) {
            return sign * Math.floor(Math.random() * 10);
        } else if (ratios === 2) {
            return sign * (Math.floor(Math.random() * 90) + 10);
        } else if (ratios === 3) {
            return sign * (Math.floor(Math.random() * 900) + 100);
        }
    };

    const generateValidBrick = () => {
        setIsDestroyed(false);
        let newBrickValue = generateNumber();
        let newSum = 0;
        while (true) {
            const tempBricks = [...bricks, { value: newBrickValue }];
            newSum = tempBricks.reduce((sum, brick) => sum + brick.value, 0);
            if (
                newSum > 0 &&
                ((ratios === 1 && newSum <= 9) ||
                    (ratios === 2 && newSum <= 99) ||
                    (ratios === 3 && newSum <= 999))
            ) {
                break;
            }
            newBrickValue = generateNumber();
        }

        return newBrickValue;
    };

    const handleAnswer = (answer: number) => {
        if (answer === currentSum) {
            addAllAnswers();
            addCorrectAnswer();
            setRound((prev) => prev + 1);
            setAnswersAnimationFinished(true);

            let increment = 0;
            if (level === 1) increment = 100 / 3;
            else if (level === 2) increment = 100 / 5;
            else if (level === 3) increment = 100 / 7;

            setBackgroundOffset((prev) => Math.min(prev + increment, 100));
        } else {
            addAllAnswers();
            setIsDestroyed(true);
        }
        setAnswers([]);
    };

    const resetBricks = () => {
        setIsDestroyed(false);
        setBricks([]);
        setFallingBrick(null);
        setCurrentSum(0);
        const newBricks = Array.from({ length: numberOfRows }, () => ({
            id: Date.now() + Math.random(),
            value: generateValidBrick(),
            position: 100,
            bottom: 0,
            isShrinking: false,
            isNumberVisible: true,
            width: Math.floor(Math.random() * (180 - 120 + 1)) + 120,
            left: `${Math.random() * 6 - 3}%`,
        }));
        setBricks(newBricks);
    };

    useEffect(() => {
        const bricksRequired = round * numberOfRows;
        if (!fallingBrick && bricks.length < bricksRequired && !isGameOver) {
            const newBrickValue = generateValidBrick();
            const newBrick = {
                id: Date.now(),
                value: newBrickValue,
                position: 100,
                bottom: bricks.length * 3,
                isShrinking: false,
                isNumberVisible: true,
                width: Math.floor(Math.random() * (180 - 120 + 1)) + 120,
                left: `${Math.random() * 6 - 3}%`,
            };
            setFallingBrick(newBrick);
        }

        if (bricks.length === bricksRequired && !fallingBrick && !isGameOver) {
            const roundBricks = bricks.slice((round - 1) * numberOfRows, round * numberOfRows);
            const correctAnswer = roundBricks.reduce((sum, brick) => sum + brick.value, 0);

            const wrongAnswers = [];
            while (wrongAnswers.length < 2) {
                const wrongAnswer = generateNumber();
                if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
                    wrongAnswers.push(wrongAnswer);
                }
            }

            const shuffledAnswers = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
            setAnswers(shuffledAnswers);
            setCurrentSum(correctAnswer);
        }
    }, [fallingBrick, bricks, round, isGameOver, ratios, numberOfRows]);

    useEffect(() => {
        if (fallingBrick) {
            const totalDistance = 110;
            const step = totalDistance / (speed * 1000 / 20);
            const interval = setInterval(() => {
                setFallingBrick((prev) => {
                    if (!prev) return null;

                    if (prev.position <= prev.bottom) {
                        clearInterval(interval);
                        setBricks((prevBricks) => {
                            const newBricks = [
                                ...prevBricks,
                                { ...prev, position: prev.bottom, isShrinking: true, isNumberVisible: false },
                            ];

                            const newSum = newBricks.reduce((sum, brick) => sum + brick.value, 0);
                            if (newSum <= 0 || (ratios === 1 && newSum > 9) || (ratios === 2 && newSum > 99) || (ratios === 3 && newSum > 999)) {
                                return prevBricks;
                            }

                            setCurrentSum(newSum);
                            return newBricks;
                        });
                        setFallingBrick(null);
                        return null;
                    }
                    return { ...prev, position: prev.position - step };
                });
            }, 20);

            return () => clearInterval(interval);
        }
    }, [fallingBrick, speed, ratios]);

    useEffect(() => {
        if (round > maxRounds) {
            setIsGameOver(true);
            finish();
        }
    }, [round, maxRounds, finish]);

    useEffect(() => {
        console.log("Destroyed:", isDestroyed);
        console.log("Answers Animation Finished:", answersAnimationFinished);
        if (isDestroyed && answersAnimationFinished) {
            setTimeout(() => {
                console.log("Resetting bricks...");
                resetBricks();
                setIsDestroyed(false);
                if (bricks.length > 0) {
                    setFallingBrick(bricks[0]);
                }
            }, 1000);
        }
    }, [isDestroyed, answersAnimationFinished, bricks]); // Добавьте bricks в зависи

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isGameOver && answers.length > 0) {
                setIsDestroyed(true);
                setAnswers([]); // Если прошло время и ответы не выбраны
            }
        }, 6000); // Время до разрушения

        return () => clearTimeout(timer);
    }, [answers, isGameOver]);

    return (
        <div
            className={styles.bricksGameContainer}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: `center calc(100% - ${backgroundOffset}%)`,
                transition: "background-position 2s ease",
            }}
        >
            <div className={styles.gameContainer}>
                {bricks.map((brick) => {
                    const randomX = Math.random() - 0.5;
                    const randomY = Math.random() - 0.5;
                    const randomRotateX = Math.random();
                    const randomRotateY = Math.random();
                    const randomRotateZ = Math.random();

                    return (
                        <div
                            key={brick.id}
                            className={`${styles.brick} ${isDestroyed ? styles.destroyed : ''}`}
                            style={{
                                bottom: `${brick.position}%`,
                                backgroundImage: `url(${brickImage})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                position: "absolute",
                                '--random-x': randomX,
                                '--random-y': randomY,
                                '--random-rotate-x': randomRotateX,
                                '--random-rotate-y': randomRotateY,
                                '--random-rotate-z': randomRotateZ,
                            }}
                        >
                            {brick.isNumberVisible && (brick.value > 0 ? +`${brick.value}` : brick.value)}
                        </div>
                    );
                })}

                {fallingBrick && (
                    <div
                        className={`${styles.brick} ${styles.falling}`}
                        style={{
                            top: `${fallingBrick.position}%`,
                            animationDuration: `${speed}s`,
                            backgroundImage: `url(${brickImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {fallingBrick.value > 0 ? +`${fallingBrick.value}` : fallingBrick.value}
                    </div>
                )}

                {answers.length > 0 && !isGameOver && (
                    <div className={styles.answers}>
                        {answers.map((answer, index) => (
                            <div
                                key={index}
                                className={styles.answerBlock}
                                style={{
                                    backgroundImage: `url(${answersImage})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    '--animation-duration': `6s`,
                                }}
                                onClick={() => handleAnswer(answer)}
                            >
                                {answer}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export const BricksGame = () => register(BricksGames, (settings) => ({
    timeDirection: 'right',
    title: 'Кирпичики',
    starCalculationMode: 'correct',
    infoSettings: [
        {
            title: 'Урвоень',
            texts: [
                'В зависимости от уровня изменяются правила игры:',
                '1 - Необходимо решить 3 примера',
                '2 - Необходимо решить 5 примеров',
                '3 - Необходимо решить 7 примеров',
                '4 - Необходимо решить 2 примера одновременно',
            ]
        },
        {
            title: 'Тема',
            texts: [
                'Выберается согласно теме занятия'
            ]
        },
        {
            title: 'Подтема',
            texts: [
                'Выберается согласно теме занятия',
            ]
        },
        {
            title: 'Разряд чисел',
            texts: [
                'Выбор между однозначными двухзначными и трехзначными числами',
                '1 - однозначные',
                '10 - двухзначные',
                '100 - трехзначные',
            ]
        },
        {
            title: 'Колличество действий',
            texts: [
                'Колличество действий для одного примера',
            ]
        },
        {
            title: 'Скорость',
            texts: [
                'Длительность отображения одного действия на экране',
            ]
        },
    ],
    settings: [
        {
            type: "level",
            title: 'Уровень',
            reduxKey: 'level',
            settings: {
                max: 4,
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
            type: 'ratios',
            title: 'Разряд чисел',
            reduxKey: 'ratios',
            settings: {
                min: 1,
                max: 3,
                step: 1,
                defaultValue: 1,
                values: [1, 2, 3],
            },
        },
        {
            type: 'numberOfRows',
            title: 'Количество действий',
            reduxKey: 'numberOfRows',
            settings: {
                max: 30,
                min: 3,
                step: 1,
            },
        },
        {
            type: 'speed',
            title: 'Скорость',
            reduxKey: 'speed',
            settings: {
                min: 0,
                max: 10,
                step: 0.25,
                update: false,
            }
        }
    ],
    start: (() => {
        switch (settings.level) {
            case 1:
                return {
                    title: 'Кирпичики',
                    subTitle1: 'Выполни действие на кирпичиках и выбери правильный ответ чтобы построить башню.',
                    subTitle2: 'Для завершения игры необходимо построить 3 башни',
                    subTitle3: 'Стройка новой башни начинается с нуля',
                    titleBottom: 'Не допускай ошибок для успешного завершения игры.',
                };
            case 2:
                return {
                    title: 'Кирпичики',
                    subTitle1: 'Выполни действие на кирпичиках и выбери правильный ответ чтобы построить башню.',
                    subTitle2: 'Для завершения игры необходимо построить 5 башен',
                    subTitle3: 'Стройка новой башни начинается с нуля',
                    titleBottom: 'Не допускай ошибок для успешного завершения игры.',
                };
            case 3:
                return {
                    title: 'Кирпичики',
                    subTitle1: 'Выполни действие на кирпичиках и выбери правильный ответ чтобы построить башню.',
                    subTitle2: 'Для завершения игры необходимо построить 7 башен',
                    subTitle3: 'Стройка новой башни начинается с нуля',
                    titleBottom: 'Не допускай ошибок для успешного завершения игры.',
                };
            case 4:
                return {
                    title: 'Кирпичики',
                    subTitle1: 'Выполни действие на кирпичиках и выбери правильный ответ чтобы построить башню.',
                    subTitle2: 'Для завершения игры необходимо построить 2 башни одновременно',
                    subTitle3: 'Стройка новой башни начинается с нуля',
                    titleBottom: 'Не допускай ошибок для успешного завершения игры.',
                };
            default:
                return {
                    title: 'Неизвестный уровень',
                    subTitle1: 'Пожалуйста, выберите корректный уровень.',
                    subTitle2: '',
                    subTitle3: '',
                    titleBottom: '',
                };
        }
    })()
}))
