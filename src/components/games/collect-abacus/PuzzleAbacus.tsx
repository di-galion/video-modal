import { useState, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions.ts';
import styles from './PuzzleAbacus.module.scss';
import topStick from './images/top-stick.png';
import bottomStick from './images/bottom-stick.png';
import horizonteStripe from './images/horizonte-stripe.png';
import verticalLine from './images/vertical-line.png';
import bigPullGem from './images/solo-gem(big) (1).png';
import bigGem from './images/solo-gem(big).png';
import octagonLeft from './images/walls.png';
import octagonRight from './images/wallsRight.png'
import { useGameSettings } from '../../../hooks/game.ts';
import {register} from "../../../providers/game/register.tsx";

interface Bead {
    id: number;
    position: number;
    isPlaced: boolean;
    type: string;
    rowIndex?: number;
}

const shapes = [
    { id: 1, type: 'bigGem' },
    { id: 2, type: 'bigPullGem' },
    { id: 3, type: 'topStick' },
    { id: 4, type: 'bottomStick' },
    { id: 5, type: 'horizonteStripe' },
    { id: 6, type: 'verticalLine' },
    { id: 7, type: 'octagonLeft' },
    { id: 8, type: 'octagonRight' },
];

const getImageByType = (type: string) => {
    switch (type) {
        case 'bigGem':
            return bigGem;
        case 'topStick':
            return topStick;
        case 'bottomStick':
            return bottomStick;
        case 'horizonteStripe':
            return horizonteStripe;
        case 'verticalLine':
            return verticalLine;
        case 'octagonLeft':
            return octagonLeft;
        case 'octagonRight':
            return octagonRight;
        case 'bigPullGem':
            return bigPullGem;
        default:
            return '';
    }
};

const PuzzleAbacusGame: React.FC<{ initialNumOfBeads: number }> = ({ initialNumOfBeads }) => {
    const { numberOfRows, tips } = useGameSettings();
    const { setPageStatus, addAllAnswers, addCorrectAnswer, setStarCalculationMode, addTime} = useActions();

    const initialBeads = shapes.slice(0, initialNumOfBeads).map((shape) => ({
        id: shape.id,
        position: -1,
        isPlaced: false,
        type: shape.type,
    }));

    const [beads, setBeads] = useState<Bead[]>(initialBeads);
    const [draggingBeadId, setDraggingBeadId] = useState<number | null>(null);
    const [status, setStatus] = useState<'game' | 'finish'>('game');
    const [gameTime, setGameTime] = useState(0);
    const [slotWidth, setSlotWidth] = useState<string>('100%');
    const [slotHeight, setSlotHeight] = useState<string>('100%');
    const [, setImageWidth] = useState<string>('100%');
    const [, setsStickLength] = useState<string>('100%');
    const [, setHorizonteStripe] = useState<string>('100%');



    useEffect(() => {
        if (status === 'game') {
            const timerId = setInterval(() => setGameTime((prev) => prev + 1), 1000);
            return () => clearInterval(timerId);
        }
    }, [status]);

    useEffect(() => {
        if (beads.every((bead) => bead.isPlaced)) {
            setStatus('finish');
            addTime(gameTime);
            setStarCalculationMode('correct')
            setPageStatus('finish');
        }
    }, [beads, addTime, gameTime]);

    const handleDrop = (targetSlot, targetRow, rowIndex) => {
        console.log("Drop called with:", { draggingBeadId, targetSlot, targetRow, rowIndex });

        if (!draggingBeadId) {
            console.warn("No dragging bead!");
            return;
        }

        const draggingBeadIdString = String(draggingBeadId);
        console.log("Dragging bead ID as string:", draggingBeadIdString);

        const idParts = draggingBeadIdString.split('-');
        console.log("Parsed ID parts:", idParts);
        if (idParts.length !== 3 || idParts[0] !== 'bead') {
            console.error("Invalid draggingBeadId format:", draggingBeadIdString);
            return;
        }

        const beadId = parseInt(idParts[2], 10);
        console.log("Parsed bead ID:", beadId);

        const beadToPlace = beads.find((bead) => bead.id === beadId);
        console.log("Bead to place:", beadToPlace);

        if (!beadToPlace) {
            console.error("No bead found for ID:", beadId);
            return;
        }

        const isCorrectPosition =
            (beadToPlace.type === 'octagon' && beadToPlace.position === targetSlot) ||
            (beadToPlace.type === 'topStick' && shapes[targetSlot]?.type === 'topStick') ||
            (beadToPlace.type === 'bottomStick' && shapes[targetSlot]?.type === 'bottomStick') ||
            (beadToPlace.type === 'horizonteStripe' && shapes[targetSlot]?.type === 'horizonteStripe') ||
            (beadToPlace.type === 'verticalLine' && shapes[targetSlot]?.type === 'verticalLine') ||
            (beadToPlace.type === 'octagonLeft' && shapes[targetSlot]?.type === 'octagonLeft') ||
            (beadToPlace.type === 'octagonRight' && shapes[targetSlot]?.type === 'octagonRight') ||
            (beadToPlace.type === 'bigPullGem' && shapes[targetSlot]?.type === 'bigPullGem') ||
            (targetSlot === beadToPlace.position);

        console.log("Checking position:", { beadToPlace, targetSlot, targetRow, rowIndex });
        console.log("Is correct position:", isCorrectPosition);

        setBeads((prevBeads) =>
            prevBeads.map((bead) => {
                if (bead.id === beadId) {
                    return {
                        ...bead,
                        position: isCorrectPosition ? targetSlot : bead.position,
                        isPlaced: isCorrectPosition,
                    };
                }
                return bead;
            })
        );
        setDraggingBeadId(null);
    };

    const handleDragStart = (beadId) => {
        console.log("Drag started with beadId:", beadId);

        setDraggingBeadId(beadId);
        console.log("Dragging bead ID set to:", beadId);

        const beadElement = document.getElementById(beadId);
        if (beadElement) {
            beadElement.style.zIndex = '10';
        }
    };

    const handleDragEnd = () => {
        if (draggingBeadId !== null) {
            const beadElement = document.getElementById(draggingBeadId);
            if (beadElement) {
                beadElement.style.zIndex = '';
            }
        }

        const slots = document.querySelectorAll<HTMLElement>(`.${styles.slot}`);
        slots.forEach((slot) => {
            slot.style.opacity = '1';
        });

        addAllAnswers();
        addCorrectAnswer();
        setDraggingBeadId(null);
    };

    const updateSlotDimensions = () => {
        const baseHeight = 100;
        const baseWidth = 100;

        setSlotHeight(`${baseHeight * numberOfRows}px`);
        setSlotWidth(`${baseWidth * numberOfRows}px`);
        document.documentElement.style.setProperty('--slot-height', `${baseHeight * numberOfRows}px`);
    };

    useEffect(() => {
        updateSlotDimensions();
    }, [numberOfRows]);

    const updateSlotDimensionsByImage = () => {
        const beadImage = new Image();
        beadImage.src = getImageByType(shapes[0].type);
        beadImage.onload = () => {
            setSlotHeight(`${beadImage.height ?? 0}px`);
            setSlotWidth(`${beadImage.width ?? 0}px`);
        };
    };
    useEffect(() => {
        updateSlotDimensionsByImage();
    }, []);

    const updateSlotDimensionsByRows = () => {
        const imageContHeight = 135;
        const slotsContWidth = 100;
        const stickLength = 64
        const horizonteStripe = 48


        const imageWidth = imageContHeight * numberOfRows;
        const slotsWidth = slotsContWidth * numberOfRows;
        const stickWidth = stickLength * numberOfRows
        const stripeWidth = horizonteStripe * numberOfRows

        setSlotWidth(`${slotsWidth}px`);
        setImageWidth(`${imageWidth}px`);
        setsStickLength(`${stickWidth}px`)
        setHorizonteStripe(`${stripeWidth}px`)


        document.documentElement.style.setProperty('--container-width', `${slotsWidth}px`);
        document.documentElement.style.setProperty('--image-width', `${imageWidth}px`);
        document.documentElement.style.setProperty('--stick-width', `${stickWidth}px`);
        document.documentElement.style.setProperty('--stripe-width', `${stripeWidth}px`);
    };


    useEffect(() => {
        updateSlotDimensionsByRows();
    }, [numberOfRows]);

    return (
        <div className={`${styles.collectAbacus}`}>
            <div className={styles.abacus}>
                <div className={styles.container}>
                    <div className={styles.slotsWrapper}>
                        {Array.from({length: numberOfRows}).map((_, rowIndex) => {
                            const containerBeads = beads.map(bead => ({...bead}));
                            return (
                                <div key={`container-${rowIndex}`} style={{
                                    transform: `translateX(${99 * rowIndex}px)`,
                                    flexShrink: 0,
                                    position: 'relative',
                                }}>
                                    {containerBeads.map((bead, index) => (
                                        <div
                                            key={`slot-${rowIndex}-${index}`}
                                            id={`slot-bead-${rowIndex}-${index}`}
                                            className={`${styles.slot} ${styles[`slot${index + 1}`]}`}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={() => handleDrop(index, rowIndex, rowIndex)}
                                            style={{
                                                width: slotWidth,
                                                height: slotHeight,
                                            }}
                                        >
                                            {bead.isPlaced && bead.position === index ? (
                                                <img
                                                    src={getImageByType(bead.type)}
                                                    alt={bead.type}
                                                    style={{
                                                        filter:
                                                            bead.isPlaced && bead.position === index
                                                                ? 'none'
                                                                : 'grayscale(100%)',
                                                        backgroundColor:
                                                            bead.type === 'octagon' && bead.id === 7
                                                                ? '#fbc130'
                                                                : 'transparent',
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={getImageByType(bead.type)}
                                                    alt={bead.type}
                                                    style={{
                                                        opacity: bead.isPlaced && bead.position === index ? 1 : 0.5,
                                                        filter:
                                                            bead.isPlaced && bead.position === index ||
                                                            (draggingBeadId === `slot-bead-${rowIndex}-${index}` && tips)
                                                                ? 'none'
                                                                : 'grayscale(100%)',
                                                        backgroundColor:
                                                            bead.type === 'octagon' && bead.id === 7
                                                                ? '#fbc130'
                                                                : 'transparent',
                                                    }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.beadContainer}>
                        {Array.from({length: numberOfRows}).map((_, rowIndex) => {
                            const containerBeads = beads.map(bead => ({...bead}));
                            return (
                                <div
                                    key={`container-row-${rowIndex}`}
                                    className={styles.rowContainer}
                                    style={{
                                        marginLeft: `${120 * rowIndex}px`,
                                        flexShrink: 0,
                                    }}
                                >
                                    {containerBeads.map((bead, index) => (
                                        <div
                                            key={`bead-${rowIndex}-${index}`}
                                            id={`bead-${rowIndex}-${index}`}
                                            className={`${styles.bead} ${styles[`bead${index + 1}`]} ${draggingBeadId === `bead-${rowIndex}-${index}` ? styles.dragging : ''} ${bead.isPlaced ? styles.placed : ''}`}
                                            draggable
                                            onDragStart={() => handleDragStart(`bead-${rowIndex}-${index}`)}
                                            onDragEnd={handleDragEnd}
                                            style={{
                                                visibility: bead.isPlaced ? 'hidden' : 'visible',
                                                marginLeft: `${120 * rowIndex}px`,
                                            }}
                                        >
                                            <img src={getImageByType(bead.type)} alt={bead.type}/>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export const PuzzleAbacus = () => register(() => <PuzzleAbacusGame initialNumOfBeads={10}/>, (settings) => ({
    timeDirection: 'right',
    starCalculationMode: 'correct',
    title: 'Собери абакус',
    infoSettings: [
        {
            title: 'Урвоень',
            texts: [
                'В зависимости от уровня меняются правила игры.',
                '1 - время игры не ограничено',
                '2 - Необходимо собрать абакус за отведенное время'
            ]
        },
        {
            title: 'Количество рядов',
            texts: [
                'Управляет количеством элементов и размером абакуса.',
            ]
        },
        {
            title: 'Подсказка',
            texts: [
                'С активной подсказкой подсвечивается область для перетаскивания элемента.',

            ]
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
            type: 'numberOfRows',
            title: 'Количество рядов',
            reduxKey: 'numberOfRows',
            settings: {
                max: 7,
                min: 1,
                step: 1,
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
    ],
    start: {
        title: 'Собери абакус',
        subTitle1: 'Перетаскивай элементы абакуса на свои места.',
        titleBottom: 'Не допускай ошибок для успешного завершения игры.',
    },
}))