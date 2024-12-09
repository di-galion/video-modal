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
import octagonRight from './images/wallsRight.png';
import { useGameFinish, useGameSettings } from '../../../hooks/game.ts';
import { register } from '../../../providers/game/register.tsx';
import { useSyncStorage } from '../../../api/socket/useSyncStorage.ts';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket.ts';

interface Bead {
    id: number;
    position: number;
    isPlaced: boolean;
    type: string;
    rowIndex?: number;
}

const shapes = [
    { id: 0, type: 'bigGem', position: 0, isPlaced: false },
    { id: 1, type: 'bigPullGem', position: 1, isPlaced: false },
    { id: 2, type: 'topStick', position: 2, isPlaced: false },
    { id: 3, type: 'bottomStick', position: 3, isPlaced: false },
    { id: 4, type: 'horizonteStripe', position: 4, isPlaced: false },
    { id: 5, type: 'verticalLine', position: 5, isPlaced: false },
    { id: 6, type: 'octagonLeft', position: 6, isPlaced: false },
    { id: 7, type: 'octagonRight', position: 7, isPlaced: false },
];

const getImageByType = (type: string) => {
    const images: Record<string, string> = {
        bigGem,
        bigPullGem,
        topStick,
        bottomStick,
        horizonteStripe,
        verticalLine,
        octagonLeft,
        octagonRight,
    };
    return images[type] || '';
};

const PuzzleAbacusGame: React.FC<{ initialNumOfBeads: number }> = ({
    initialNumOfBeads,
}) => {
    const { numberOfRows, tips } = useGameSettings<number>();
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const finish = useGameFinish();

    const { storedRows = [], updateStorage } = useSyncStorage<{
        storedRows: Array<{
            rowIndex: number;
            beads: Bead[];
        }>;
    }>();

    useEffect(() => {
        updateStorage({
            storedRows: Array.from({ length: numberOfRows }).map(
                (_, rowIndex) => ({
                    rowIndex,
                    beads: shapes.slice(0, initialNumOfBeads).map((shape) => ({
                        ...shape,
                        position: -1,
                        rowIndex,
                    })),
                })
            ),
        });
    }, []);

    const [rows, setRows] = useState<
        Array<{ rowIndex: number; beads: Bead[] }>
    >([]);

    useEffect(() => {
        setRows(storedRows);
    }, [storedRows]);

    const { sendAction } = useWebSocket();

    const [draggingBeadId, setDraggingBeadId] = useState<number | null>(null);
    const [status, setStatus] = useState<'game' | 'finish'>('game');
    const [gameTime, setGameTime] = useState(0);

    useEffect(() => {
        if (status === 'game') {
            const timerId = setInterval(
                () => setGameTime((prev) => prev + 1),
                1000
            );
            return () => clearInterval(timerId);
        }
    }, [status]);

    useEffect(() => {
        if (
            storedRows.length &&
            rows.every((row) => row.beads.every((bead) => bead.isPlaced))
        )
            finish();
    }, [rows]);

    const drop = (targetSlot: number, targetRow: number) => {
        if (draggingBeadId === null) return;

        const draggedBead = rows
            .flatMap((row) => row.beads)
            .find((bead) => bead.id === draggingBeadId);
        const targetSlotBead = rows[targetRow].beads[targetSlot];

        if (draggedBead && draggedBead.type !== targetSlotBead.type) {
            return;
        }

        setRows((prevRows) =>
            prevRows.map((row) => {
                if (row.rowIndex !== targetRow) return row;

                return {
                    ...row,
                    beads: row.beads.map((bead) =>
                        bead.id === draggingBeadId
                            ? { ...bead, position: targetSlot, isPlaced: true }
                            : bead
                    ),
                };
            })
        );

        setDraggingBeadId(null);
    };

    const handleDrop = (targetSlot: number, targetRow: number) => {
        sendAction('drop', { targetSlot, targetRow });
    };

    const dragStart = (beadId: number) => {
        setDraggingBeadId(beadId);
        const draggedElement = document.getElementById(`${beadId}`);
        const draggedSlot = document.getElementById(`slot-bead-${beadId}`);

        if (draggedElement) {
            draggedElement.style.setProperty('z-index', '9999');
        }

        if (draggedSlot) {
            draggedSlot.style.setProperty('z-index', '9999');
        }
    };

    const handleDragStart = (beadId: number) => {
        sendAction('dragStart', { beadId });
    };

    const dragEnd = () => {
        setDraggingBeadId(null);
        document
            .querySelectorAll<HTMLElement>(`.${styles.slot}`)
            .forEach((slot) => {
                slot.style.opacity = '1';
            });
        addAllAnswers();
        addCorrectAnswer();

        const draggedElement = document.getElementById(`${draggingBeadId}`);
        const draggedSlot = document.getElementById(
            `slot-bead-${draggingBeadId}`
        );

        if (draggedElement) {
            draggedElement.style.setProperty('z-index', '');
        }

        if (draggedSlot) {
            draggedSlot.style.setProperty('z-index', '');
        }
    };

    const handleDragEnd = () => {
        sendAction('dragEnd');
    };

    useWsAction((name, params = {}) => {
        switch (name) {
            case 'dragStart':
                dragStart(params.beadId);
                break;
            case 'dragEnd':
                dragEnd();
                break;
            case 'drop':
                drop(params.targetSlot, params.targetRow);
                break;
        }
    });

    const getSlotStyles = (bead: Bead) => {
        if (tips === 1 && draggingBeadId === bead.id) {
            return {
                opacity: 0.5,
                filter: 'none',
            };
        }

        return {
            opacity: bead.isPlaced && bead.position === bead.position ? 1 : 0.5,
            filter:
                bead.isPlaced && bead.position === bead.position
                    ? 'none'
                    : 'grayscale(100%)',
        };
    };

    const paddingRight = `${84 * numberOfRows}px`;

    return (
        <div className={`${styles.collectAbacus}`}>
            <div className={styles.abacus}>
                <div className={styles.container}>
                    <div
                        className={styles.slotsWrapper}
                        style={{ paddingRight: paddingRight }}
                    >
                        {Array.from({ length: numberOfRows }).map(
                            (_, rowIndex) => {
                                if (rows.length) {
                                    const containerBeads = rows[rowIndex].beads;

                                    return (
                                        <div
                                            key={`container-${rowIndex}`}
                                            style={{
                                                transform: `translateX(${
                                                    99 * rowIndex
                                                }px)`,
                                                flexShrink: 0,
                                                position: 'relative',
                                            }}
                                        >
                                            {containerBeads.map(
                                                (bead, index) => (
                                                    <div
                                                        key={`slot-${rowIndex}-${index}`}
                                                        id={`slot-bead-${rowIndex}-${index}`}
                                                        className={`${
                                                            styles.slot
                                                        } ${
                                                            styles[
                                                                `slot${
                                                                    index + 1
                                                                }`
                                                            ]
                                                        }`}
                                                        onDragOver={(e) =>
                                                            e.preventDefault()
                                                        }
                                                        onDrop={() =>
                                                            handleDrop(
                                                                index,
                                                                rowIndex
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src={getImageByType(
                                                                bead.type
                                                            )}
                                                            alt={bead.type}
                                                            style={getSlotStyles(
                                                                bead
                                                            )}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    );
                                } else {
                                    return '';
                                }
                            }
                        )}
                    </div>

                    <div className={styles.beadContainer}>
                        {Array.from({ length: numberOfRows }).map(
                            (_, rowIndex) => {
                                if (rows.length) {
                                    const containerBeads = rows[rowIndex].beads;
                                    return (
                                        <div
                                            key={`container-row-${rowIndex}`}
                                            className={styles.rowContainer}
                                            style={{
                                                marginLeft: `${
                                                    120 * rowIndex
                                                }px`,
                                                flexShrink: 0,
                                            }}
                                        >
                                            {containerBeads.map(
                                                (bead, index) => (
                                                    <div
                                                        key={`bead-${rowIndex}-${index}`}
                                                        id={`bead-${rowIndex}-${index}-${bead.id}`}
                                                        className={`${
                                                            styles.bead
                                                        } ${
                                                            styles[
                                                                `bead${
                                                                    index + 1
                                                                }`
                                                            ]
                                                        } ${
                                                            draggingBeadId ===
                                                            bead.id
                                                                ? styles.dragging
                                                                : ''
                                                        } ${
                                                            bead.isPlaced
                                                                ? styles.placed
                                                                : ''
                                                        }`}
                                                        draggable
                                                        onDragStart={() =>
                                                            handleDragStart(
                                                                bead.id
                                                            )
                                                        }
                                                        onDragEnd={
                                                            handleDragEnd
                                                        }
                                                        style={{
                                                            visibility:
                                                                bead.isPlaced
                                                                    ? 'hidden'
                                                                    : 'visible',
                                                            marginLeft: `${
                                                                120 * rowIndex
                                                            }px`,
                                                        }}
                                                    >
                                                        <img
                                                            src={getImageByType(
                                                                bead.type
                                                            )}
                                                            alt={bead.type}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    );
                                } else {
                                    return '';
                                }
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export const PuzzleAbacus = () =>
    register(
        () => <PuzzleAbacusGame initialNumOfBeads={10} />,
        (settings) => ({
            timeDirection: 'right',
            starCalculationMode: 'correct',
            title: 'Собери абакус',
            infoSettings: [
                {
                    title: 'Урвоень',
                    texts: [
                        'В зависимости от уровня меняются правила игры.',
                        '1 - время игры не ограничено',
                        '2 - Необходимо собрать абакус за отведенное время',
                    ],
                },
                {
                    title: 'Количество рядов',
                    texts: [
                        'Управляет количеством элементов и размером абакуса.',
                    ],
                },
                {
                    title: 'Подсказка',
                    texts: [
                        'С активной подсказкой подсвечивается область для перетаскивания элемента.',
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
                    type: 'numberOfRows',
                    title: 'Количество рядов',
                    reduxKey: 'numberOfRows',
                    settings: {
                        max: 6,
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
            start:
                settings.level === 1
                    ? {
                          title: 'Собери абакус',
                          subTitle1:
                              'Перетаскивай элементы абакуса на свои места.',
                          titleBottom:
                              'Не допускай ошибок для успешного завершения игры.',
                      }
                    : {
                          title: 'Собери абакус',
                          subTitle1:
                              'Перетаскивай элементы абакуса на свои места.',
                          subTitle2: 'Собери абакус на время!',
                          titleBottom:
                              'Не допускай ошибок для успешного завершения игры.',
                      },
        })
    );
