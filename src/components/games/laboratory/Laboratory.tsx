import { useEffect, useMemo, useState } from 'react';
import { Flask } from './flask/Flask';
import { Germ } from './germ/Germ';
import { generateRandomNumberFillArray, shuffle, random } from '../../../utils';
import styles from './styles.module.scss';
import { useGameSettings } from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';
import classNames from 'classnames';
import { register } from '../../../providers/game/register';
import { useSyncStorage } from '../../../api/socket/useSyncStorage';
import { useGameAccess } from '../../../hooks/account';

function generateGerms(
    from: number,
    to: number,
    count: number,
    length: number
) {
    const full = new Array(length).fill(null);
    let one: number[] = [];
    while (one.length < count) {
        one = [...one, ...generateRandomNumberFillArray(from, to)];
    }
    const inner = one.slice(0, count);
    full.splice(0, inner.length, ...inner);
    const out = shuffle(full);
    return out;
}

const LEVEL_GERMS: Record<number, number> = {
    0: 4,
    1: 5,
    2: 7,
    3: 9,
};

const LaboratoryGame = () => {
    const [step, setStep] = useState(0);

    const settings = useGameSettings<number>();

    const { addAllAnswers, addCorrectAnswer } = useActions();

    const maxGermCount = useMemo(() => LEVEL_GERMS[settings.mode], []);

    const isAccess = useGameAccess();

    const {
        count = [],
        index = [],
        germs = [],
        germCount = 0,
        updateStorage,
    } = useSyncStorage<{
        count: number[];
        index: number[];
        germs: any[];
        germCount: number;
    }>();

    //const [germCount, setGermCount] = useState(random(1, maxGermCount));

    /*const { count, index, germs } = useMemo(() => {
        const count = generateRandomNumberFillArray(1, 9);
        const index = generateRandomNumberFillArray(0, 8);
        const germs = generateGerms(0, 4, germCount, 16);
        return { count, index, germs };
    }, [germCount]);*/

    useEffect(() => {
        if (isAccess) {
            updateStorage({
                count: generateRandomNumberFillArray(1, 9),
                index: generateRandomNumberFillArray(0, 8),
                germs: generateGerms(0, 4, germCount, 16),
            });
        }
    }, [germCount]);

    const [animated, setAnimated] = useState(false);

    const handleClick = (cnt: number) => {
        if (cnt + germCount === 10) {
            setStep((step) => step + 1);
            addAllAnswers();
            addCorrectAnswer();
        } else {
            addAllAnswers();
            setAnimated(true);
            setTimeout(() => {
                setAnimated(false);
            }, 310);
        }
    };

    useEffect(() => {
        if (isAccess) {
            let newValue = random(1, maxGermCount);
            while (newValue === germCount) {
                newValue = random(1, maxGermCount);
            }
            updateStorage({ germCount: newValue });
        }
    }, [step]);

    return (
        <div className={styles.wrap}>
            <div className={styles.level__left}>
                <div
                    className={classNames(styles.level__left_row, {
                        [styles.animated]: animated,
                    })}
                >
                    {germs.map((value, index) => (
                        <Germ key={`${value} ${index}`} index={value} />
                    ))}
                </div>
            </div>
            <div className={styles.level__right}>
                <div className={styles.level__right_row}>
                    {count.map((value, ind) => (
                        <Flask
                            key={`${value} ${ind}`}
                            count={value}
                            index={index[ind]}
                            onClick={handleClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Laboratory = () =>
    register(LaboratoryGame, () => ({
        title: 'Лаборатория',
        timeDirection: 'left',
        starCalculationMode: 'correct',
        infoSettings: [
            {
                title: 'Правила игры',
                texts: [
                    'В каждой пробирке хранится несколько микробов, сколько – на ней написано. Найди ту пробирку, которой не хватает до 10 микробов в лаборатории.',
                ],
                fullRow: true,
            },
            {
                title: 'Уровень',
                texts: [
                    'В зависимости от уровня изменяются правила игры:',
                    '1 - Тема "Братья"',
                    '2 - Тема "Друзья"',
                ],
            },
            {
                title: 'Время игры',
                texts: ['Общая продолжительность игры'],
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
                type: 'time',
                title: 'Время игры',
                reduxKey: 'time',
                settings: {
                    max: 300,
                    min: 30,
                    step: 30,
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
            title: 'Лаборатория',
            subTitle1:
                'Всего должно быть 10 микробов, найди пробирку с недостающим количеством.',
            subTitle2: '',
            subTitle3: '',
            titleBottom: 'Не допускай ошибок для успешного завершения игры.',
        },
    }));
