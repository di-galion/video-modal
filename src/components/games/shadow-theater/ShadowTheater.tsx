import { useState, useEffect, useLayoutEffect } from 'react';
import styles from './ShadowTheater.module.scss';
import item0 from './images/item_0.png';
import item1 from './images/item_1.png';
import item2 from './images/item_2.png';
import item4 from './images/item_4.png';
import item5 from './images/item_5.png';
import item6 from './images/item_6.png';
import item7 from './images/item_7.png';
import item8 from './images/item_8.png';
import item9 from './images/item_9.png';
import item10 from './images/item_10.png';
import item11 from './images/item_11.png';
import item12 from './images/item_12.png';
import item14 from './images/item_14.png';
import item15 from './images/item_15.png';
import item16 from './images/item_16.png';
import item18 from './images/item_18.png';
import item19 from './images/item_19.png';
import item22 from './images/item_22.png';
import item23 from './images/item_23.png';
import item24 from './images/item_24.png';
import { useActions } from '../../../hooks/useActions.ts';
import { getRandomImages, shuffleArray } from "./functions.ts";
import { useGameSettings } from '../../../hooks/game.ts';
import { register } from '../../../providers/game/register.tsx';
import { toTimeFormat} from "../../../utils";

const images = [
    item0,
    item1,
    item2,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item14,
    item15,
    item16,
    item18,
    item19,
    item22,
    item23,
    item24,
];

const ShadowTheaterGame: React.FC = () => {
    const [shownImages, setShownImages] = useState<string[]>([]);
    const [clickedImages, setClickedImages] = useState<string[]>([]);
    const [, setScore] = useState<number>(0);
    const [imageFeedback, setImageFeedback] = useState<{
        [key: string]: 'correct' | 'wrong' | undefined;
    }>({});
    const [, setGameTime] = useState(0);
    const [lastAddedImages, setLastAddedImages] = useState<string[]>([]);
    const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
    const [, setTotalSelectedImages] = useState<number>(0);
    const [gameFinished, setGameFinished] = useState<boolean>(false);
    const [, setWaitingForLastClick] = useState<boolean>(false);
    const [currentClicks, setCurrentClicks] = useState<number>(0);
    const [isClickable, setIsClickable] = useState<boolean>(true);
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

    const {
        addCorrectAnswer,
        addAllAnswers,
        setPageStatus,
    } = useActions();
    const { level, items } = useGameSettings();

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        if (!isGameStarted && shownImages.length > 0) {
            const timerId = setTimeout(() => {
                handleGameStart();
            }, 1500);
            return () => clearTimeout(timerId);
        }
    }, [isGameStarted, shownImages]);

    const startGame = () => {
        const initialImages = getRandomImages(
            images,
            shownImages,
            clickedImages,
            2,
        );
        setShownImages(initialImages);
        setLastAddedImages(initialImages);
        //setStarCalculationMode('correct');
        setShuffledIndices(
            shuffleArray(Array.from(Array(images.length).keys())),
        );
        setTimeout(() => {
            setIsGameStarted(false);
        }, 1000);
    };

    const handleGameStart = () => {
        setIsGameStarted(true);
        addNewImages();
    };

    const handleImageClick = (image: string) => {
        if (gameFinished || !isClickable) return;

        setIsClickable(false);

        if (shownImages.includes(image)) {
            if (!clickedImages.includes(image)) {
                if (lastAddedImages.includes(image)) {
                    setClickedImages((prev) => [...prev, image]);
                    setScore((prevScore) => prevScore + 1);
                    setImageFeedback((prev) => ({
                        ...prev,
                        [image]: 'correct',
                    }));
                    addAllAnswers();
                    addCorrectAnswer();

                    setCurrentClicks((prevClicks) => prevClicks + 1);

                    setTimeout(() => {
                        setImageFeedback((prev) => ({
                            ...prev,
                            [image]: undefined,
                        }));
                    }, 1000);

                    if (currentClicks + 1 === level) {
                        setTimeout(() => {
                            if (!gameFinished) {
                                addNewImages();
                            }
                        }, 1000);
                        setCurrentClicks(0);
                    }
                } else {

                    setImageFeedback((prev) => ({ ...prev, [image]: 'wrong' }));
                    setClickedImages((prev) => [...prev, image]);
                    addAllAnswers();

                    setTimeout(() => {
                        setImageFeedback((prev) => ({
                            ...prev,
                            [image]: undefined,
                        }));
                        addNewImages();
                    }, 1000);
                }
            } else {
                setImageFeedback((prev) => ({ ...prev, [image]: 'wrong' }));
                setTimeout(() => {
                    setImageFeedback((prev) => ({
                        ...prev,
                        [image]: undefined,
                    }));
                    addNewImages();
                }, 1000);
            }
        } else {
            setImageFeedback((prev) => ({ ...prev, [image]: 'wrong' }));
            setClickedImages((prev) => [...prev, image]);
            setTimeout(() => {
                setImageFeedback((prev) => ({
                    ...prev,
                    [image]: undefined,
                }));
            }, 1000);
        }

        setTimeout(() => {
            setIsClickable(true);
        }, 1000);
    };

    useLayoutEffect(() => {
        if (gameFinished) {
            resetGame();
        }
    }, [gameFinished, setPageStatus]);

    const resetGame = () => {
        setShownImages([]);
        setClickedImages([]);
        setScore(0);
        setImageFeedback({});
        setLastAddedImages([]);
        setTotalSelectedImages(0);
        setGameFinished(false);
        setWaitingForLastClick(false);
        setGameTime(0);
        setCurrentClicks(0);
    };

    const addNewImages = () => {
        if (shownImages.length >= 20) {
            setGameFinished(true);
            setTimeout(() => {
                setPageStatus('finish');
            }, 1000);
            return;
        }

        const newImagesToAdd = getRandomImages(
            images,
            shownImages,
            clickedImages,
            items,
        );
        const combinedImages = shuffleArray([
            ...shownImages,
            ...newImagesToAdd,
        ]);
        setShownImages(combinedImages);
        setLastAddedImages(newImagesToAdd);
    };

    return (
        <div className={styles.shadowTheater}>
            <div className={styles.imageGrid}>
                {shuffledIndices.map((index) => (
                    <div
                        key={index}
                        className={`${styles.imageContainer} ${imageFeedback[shownImages[index]] === 'correct' ? styles.correct : ''} ${imageFeedback[shownImages[index]] === 'wrong' ? styles.wrong : ''}`}
                        onClick={
                            isGameStarted
                                ? () => handleImageClick(shownImages[index])
                                : undefined
                        }
                        style={{
                            visibility: shownImages.includes(shownImages[index])
                                ? 'visible'
                                : 'hidden',
                        }}
                    >
                        <img
                            src={shownImages[index]}
                            alt={`Image ${index}`}
                            className={styles.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


export const ShadowTheater = () =>
    register(ShadowTheaterGame, (settings) => ({
        timeDirection: 'right',
        starCalculationMode: 'correct',
        title: 'Театр теней',
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
                type: 'items',
                title: 'Количество предметов',
                reduxKey: 'items',
                settings: {
                    max: 4,
                    min: 2,
                    step: 1,
                    defaultValue: 2,
                },
            },
            {
                type: 'time',
                title: 'Время игры',
                reduxKey: 'time',
                settings: {
                    max: 180,
                    min: 30,
                    step: 10,
                },
            },
        ],
        start: {
            title: 'Театр теней',
            subTitle1:
                'Нажми на любой из новых предметов, которые появятся на экране.',
            subTitle2: 'Игра закончится, когда все поле будет заполнено.',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
        startTable: [
            { text: 'Количество предметов', value: settings.items },
            { text: 'Время игры', value: toTimeFormat(settings.time) },
        ],
    }));

