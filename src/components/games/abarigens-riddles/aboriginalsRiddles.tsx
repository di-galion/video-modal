import { useState, useEffect, FC, useCallback } from 'react';
import styles from './aboriginalsRiddles.module.scss';
import { useGameFinish, useGameSettings } from '../../../hooks/game.ts';
import { shuffle as shuffleArray } from '../../../utils';
import item0 from './images/coup_img_0.png';
import item1 from './images/coup_img_1.png';
import item2 from './images/coup_img_3.png';
import item3 from './images/coup_img_4.png';
import item4 from './images/coup_img_6.png';
import item5 from './images/coup_img_8.png';
import item6 from './images/coup_img_11.png';
import item7 from './images/coup_img_14.png';
import item8 from './images/coup_img_18.png';
import item9 from './images/coup_img_19.png';
import item10 from './images/coup_img_2.png';
import item11 from './images/coup_img_5.png';
import item12 from './images/coup_img_7.png';
import item13 from './images/coup_img_9.png';
import item14 from './images/coup_img_10.png';
import item15 from './images/coup_img_12.png';
import item16 from './images/coup_img_13.png';
import item17 from './images/coup_img_15.png';
import item18 from './images/coup_img_16.png';
import item19 from './images/coup_img_17.png';
import { register } from '../../../providers/game/register.tsx';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket.ts';
import { useSyncStorage } from '../../../api/socket/useSyncStorage.ts';
import { useActions } from '../../../hooks/useActions.ts';
const originalImages = [
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
    item18,
    item19,
];

const shuffledImages = shuffleArray(originalImages);

const playImages = shuffledImages.slice(0, 10);

const images = playImages.concat(playImages);

export const AboriginalsRiddlesGame: FC = () => {
    const { shownImages = [], updateStorage } = useSyncStorage<{
         shownImages: string[];
    }>();

    const setShownImages = useCallback((shownImages: string[]) => {
        updateStorage({ shownImages: shownImages });
    }, []);

    const [clickedImages, setClickedImages] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);
    const [shakeImages, setShakeImages] = useState<number[]>([]);
    const [flippedImages, setFlippedImages] = useState<Set<number>>(new Set());
    const [inputValue, setInputValue] = useState<string>('');

    const { level } = useGameSettings();
    const { sendAction } = useWebSocket();
    const { addCorrectAnswer, addAllAnswers } = useActions();
    const finish = useGameFinish();

    useEffect(() => {
        startGame();
    }, []);

    const startGame = () => {
        setShownImages(shuffleArray(images));
        setClickedImages([]);
        setMatchedPairs(new Set());
        setFlippedImages(new Set());
        setShakeImages([]);
        setInputValue('');
    };

    const handleCorrectAnswer = useCallback(() => {
        setCorrectAnswers((prev) => prev + 1);
        sendAction('correctAnswer', { count: correctAnswers + 1 });
        addCorrectAnswer();
        addAllAnswers();
    }, [correctAnswers]);

    const checkAnswer = () => {
        if (!inputValue) return;

        const isCorrect = inputValue === correctAnswers.toString();
        addAllAnswers();

        if (isCorrect) {
            handleCorrectAnswer();
        } else {
            setInputValue(correctAnswers.toString());
        }

        setTimeout(() => {
            setInputValue('');
        }, 1000);
    };

    const handleImageClick = (index: number) => {
        if (
            clickedImages.length === 2 ||
            clickedImages.includes(index) ||
            matchedPairs.has(index)
        )
            return;

        const updatedClickedImages = [...clickedImages, index];
        setClickedImages(updatedClickedImages);

        if (level === 2 && !flippedImages.has(index)) {
            setFlippedImages((prev) => new Set(prev).add(index));
        }

        if (updatedClickedImages.length === 2) {
            const [firstIndex, secondIndex] = updatedClickedImages;

            if (shownImages[firstIndex] === shownImages[secondIndex]) {
                setMatchedPairs((prev) =>
                    new Set(prev).add(firstIndex).add(secondIndex)
                );

                handleCorrectAnswer();

                setTimeout(() => {
                    setClickedImages([]);
                    if (matchedPairs.size + 2 === shownImages.length) {
                        finish();
                    }
                }, 100);
            } else {
                if (level === 2) {
                    setFlippedImages((prev) => new Set(prev).add(secondIndex));
                } else {
                    setShakeImages([firstIndex, secondIndex]);
                }

                setTimeout(() => {
                    setClickedImages([]);
                    setShakeImages([]);
                    setFlippedImages((prev) => {
                        const newFlipped = new Set(prev);
                        newFlipped.delete(firstIndex);
                        newFlipped.delete(secondIndex);
                        return newFlipped;
                    });
                }, 100);
            }
        }
    };

    useWsAction((name, params = {}) => {
        switch (name) {
            case 'click':
                handleImageClick(params.index);
                break;
            case 'correctAnswer':
                setCorrectAnswers(params.count);
                break;
            case 'check':
                checkAnswer();
                break;
            case 'input':
                setInputValue(params.value);
                break;
        }
    });

    return (
        <div className={styles.memoryGame}>
            <div className={styles.imageGrid}>
                {shownImages.map((image, index) => (
                    <div
                        key={index}
                        className={`${
                            matchedPairs.has(index)
                                ? styles.hidden
                                : styles.imageContainer
                        } ${shakeImages.includes(index) ? styles.shake : ''} ${
                            clickedImages.includes(index) ? styles.active : ''
                        } ${level === 2 ? styles.rotated : ''} ${
                            level === 3 ? styles.rotated : ''
                        }`}
                        onClick={() => sendAction('click', { index })}
                    >
                        {level === 1 ||
                        flippedImages.has(index) ||
                        matchedPairs.has(index) ||
                        (level === 2 && flippedImages.has(index)) ? (
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className={`${styles.image}`}
                            />
                        ) : (
                            <div className={styles.back_image}></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const AboriginalsRiddles = () =>
    register(AboriginalsRiddlesGame, () => ({
        timeDirection: 'right',
        title: 'Загадки аборигенов',
        starCalculationMode: 'speed',
        infoSettings: [
            {
                title: 'Уровень',
                texts: [
                    'В зависимости от уровня изменяются правила игры:',
                    '1 - Необходимо нажать на один из новых предметов',
                    '2 - Необходимо нажать на один из новых предметов при этом врем игры ограничено',
                    '3 - Необходимо нажать на все новые предметы',
                    '4 - Необходимо нажать на все новые предметы при этом врем игры ограничено',
                ],
            },
            {
                title: 'Количество предметов',
                texts: ['Количество новых предметов'],
            },
            {
                title: 'Время игры',
                texts: ['Общая продолжительность игры'],
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
                type: 'sliding',
                title: 'Режим',
                reduxKey: 'mode',
                settings: {
                    values: ['Легкий', 'Средний', 'Сложный', 'Экстрим'],
                },
            },
        ],
        start: {
            title: 'Загадки аборигенов',
            subTitle1:
                'Нажми на любой из новых предметов, которые появятся на экране.',
            subTitle2: 'Игра закончится, когда все поле будет заполнено.',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
    }));
