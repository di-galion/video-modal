import { useState, useEffect, useRef } from 'react';
import styles from "./Dart.module.scss";
import balloonGreen from './images/balloons/balloon_img1_type1.png';
import balloonGreenBoom from './images/balloons/balloon_img1_type0.png';
import balloonRed from './images/balloons/balloon_img0_type1.png';
import balloonRedBoom from './images/balloons/balloon_img0_type0.png';
import balloonDarkBlue from './images/balloons/balloon_img2_type1.png'
import balloonBlue from './images/balloons/balloon_img4_type1.png';
import balloonBlueBoom from './images/balloons/balloon_img4_type0.png';
import balloonViolet from './images/balloons/balloon_img3_type1.png';
import balloonVioletBoom from './images/balloons/balloon_img3_type0.png';
import { useGameSettings } from "../../../hooks/game.ts";
import { register } from "../../../providers/game/register.tsx";
import { useActions } from "../../../hooks/useActions.ts";
import { useTypedSelector } from "../../../hooks/useTypedSelector.ts";
import {useWsAction, useWebSocket} from "../../../api/socket/useWebSocket.ts";
import {useSyncStorage} from "../../../api/socket/useSyncStorage.ts";

const COLORS = [
    { normal: balloonGreen, boom: balloonGreenBoom },
    { normal: balloonRed, boom: balloonRedBoom },
    { normal: balloonBlue, boom: balloonBlueBoom },
    { normal: balloonViolet, boom: balloonVioletBoom },
    { normal: balloonDarkBlue, boom: balloonBlueBoom },
];

const Dart = () => {
    const { ratios, numberOfRows, level } = useGameSettings();
    const [field, setField] = useState([]);
    const [userSequence, setUserSequence] = useState([]);
    const [currentStep, setCurrentStep] = useState<number>(3);
    const [, setIsUserTurn] = useState(false);
    const { addCorrectAnswer, addAllAnswers, setPageStatus } = useActions();
    const fieldRef = useRef([]);
    const sequenceRef = useRef([]);
    const [answer, setAnswer] = useState<number>(0);
    const count = useTypedSelector((state) => state.gameData.result.allAnswers);


    const generateField = (rows: number, columns: number) => {
        const totalCells = rows * columns;
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        return Array.from({ length: totalCells }, () => ({
            ...randomColor,
            isHighlighted: false,
            index: -1,
            originalColor: randomColor,
        }));
    };

    useEffect(() => {
        const [rows, columns] = ratios.split("x").map(Number);
        const newField = generateField(rows, columns);
        fieldRef.current = newField;
        setField(newField);
        startSequence();
    }, []);

    const startSequence = () => {
        const [rows, columns] = ratios.split("x").map(Number);
        const newField = generateField(rows, columns);
        fieldRef.current = newField;
        setField(newField);

        const newSequence = generateUniqueSequence(currentStep, newField.length);
        sequenceRef.current = newSequence;
        setUserSequence([]);
        setIsUserTurn(false);
        showSequence(newSequence);
    };

    const generateUniqueSequence = (length, totalCells) => {
        const sequence = new Set();
        while (sequence.size < length) {
            const index = Math.floor(Math.random() * totalCells);
            sequence.add(index);
        }
        return Array.from(sequence);
    };

    const showSequence = (newSequence) => {
        const currentColors = new Set(field.map((balloon) => balloon.normal));
        const originalColors = new Set(field.map((balloon) => balloon.originalColor.normal));
        const availableColors = COLORS.filter(
            (color) => !currentColors.has(color.normal) && !originalColors.has(color.normal)
        );


        const highlightColor =
            availableColors.length > 0
                ? availableColors[Math.floor(Math.random() * availableColors.length)]
                : COLORS[Math.floor(Math.random() * COLORS.length)];


        newSequence.forEach((index, i) => {
            setTimeout(() => {
                if (level === 2 || level === 4) {
                    setField((prevField) =>
                        prevField.map((balloon, balloonIndex) => {
                            if (balloonIndex === index) {
                                return {
                                    ...balloon,
                                    normal: highlightColor.normal,
                                    boom: highlightColor.boom,
                                    isHighlighted: true,
                                    index: index + 1,
                                };
                            }
                            return balloon;
                        })
                    );

                    setTimeout(() => {
                        setField((prevField) =>
                            prevField.map((balloon, balloonIndex) => {
                                if (balloonIndex === index) {
                                    return {
                                        ...balloon,
                                        normal: balloon.originalColor.normal,
                                        isHighlighted: false,
                                        index: -1,
                                    };
                                }
                                return balloon;
                            })
                        );
                    }, 500);
                } else {
                    setField((prevField) =>
                        prevField.map((balloon, balloonIndex) => {
                            if (balloonIndex === index) {
                                return {
                                    ...balloon,
                                    normal: highlightColor.normal,
                                    boom: highlightColor.boom,
                                    isHighlighted: true,
                                    index: index + 1,
                                };
                            }
                            return balloon;
                        })
                    );

                    setTimeout(() => {
                        setField((prevField) =>
                            prevField.map((balloon, balloonIndex) => {
                                if (balloonIndex === index) {
                                    return {
                                        ...balloon,
                                        isHighlighted: false,
                                        index: -1,
                                    };
                                }
                                return balloon;
                            })
                        );

                        if (i === newSequence.length - 1) {
                            setTimeout(() => {
                                setIsUserTurn(true);
                            }, 500);
                        }
                    }, 500);
                }
            }, i * 600);
        });
    };

    const handleBalloonClick = (index: number) => {

        setField((prevField) =>
            prevField.map((balloon, balloonIndex) => {
                if (balloonIndex === index) {
                    return {
                        ...balloon,
                        isHighlighted: false,
                        normal: balloon.boom,
                    };
                }
                return balloon;
            })
        );

        const newUserSequence = [...userSequence, index];
        setUserSequence(newUserSequence);

        const correctIndex =
            level === 3 || level === 4
                ? sequenceRef.current[sequenceRef.current.length - newUserSequence.length]
                : sequenceRef.current[newUserSequence.length - 1];

        if (index !== correctIndex) {
            addAllAnswers();
            setAnswer(answer + 1);

            setField((prevField) =>
                prevField.map((balloon) => ({
                    ...balloon,
                    isHighlighted: false,
                    normal: balloon.boom,
                }))
            );

            setIsUserTurn(false);

            setTimeout(() => startSequence(currentStep), 2000);
            return;
        }

        if (newUserSequence.length === sequenceRef.current.length) {
            setAnswer(answer + 1);
            addAllAnswers();
            addCorrectAnswer();
            setIsUserTurn(false);
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            setTimeout(() => startSequence(currentStep + 1), 1000)
        }
    };

    useEffect(() => {
        if (numberOfRows === count) {
            setPageStatus('finish');
        }
    }, [count, numberOfRows, setPageStatus]);

    return (
        <div className={styles.container}>
            <div
                className={styles.grid}
                style={{
                    gridTemplateColumns: `repeat(${ratios.split("x")[1]}, 1fr)`,
                    gridTemplateRows: `repeat(${ratios.split("x")[0]}, 1fr)`,
                }}
            >
                {field.map((balloon, index) => (
                    <div key={index} className={styles.balloonContainer}>
                        <img
                            src={balloon.isHighlighted ? balloon.normal : balloon.normal}
                            className={styles.balloon}
                            onClick={() => handleBalloonClick(index)}
                            alt="balloon"
                        />
                        {balloon.index !== -1 && (
                            <span className={styles.balloonIndex}>
              {balloon.index}
            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const DartGame = () => register(Dart, (settings) => ({
    timeDirection: 'right',
    title: 'Парк развлечений',
    starCalculationMode: 'correct',
    infoSettings: [
        {
            title: 'Урвоень',
            texts: [
                'В зависимости от уровня меняются правила игры:',
                '1 - Необходимо востановить прямую последовательность в которой загорелись шарики',
                '2 - Необходимо востановить прямую последовательность в которой моргнули шарики',
                '3 - Необходимо востановить обратную прямую последовательность в которой загорелись шарики',
                '4 - Необходимо востановить обратную прямую последовательность в которой моргнули шарики',
            ]
        },
        {
            title: 'Размер поля',
            texts: [
                'Выбор размера игрового поля'
            ]
        },
        {
            title: 'Колличество ответов',
            texts: [
                'Выбор количества последовательностей',
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
            type: 'ratios',
            title: 'Размер поля',
            reduxKey: 'ratios',
            settings: {
                values: ['3x3', '3x4', '4x5',],
                defaultValue: '4x5'
            }
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
        title: 'Парк развлечений',
        subTitle1: 'Запомни последовательность в которой загораются шары и лопни их по порядку',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    },

}))