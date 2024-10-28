import { useEffect, useMemo, useState } from 'react';
import { Flask } from './flask/Flask';
import { Germ } from './germ/Germ';
import { generateRandomNumberFillArray, shuffle, random } from '../../../utils';
import styles from './styles.module.scss';
import { useGameSettings } from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';
import classNames from 'classnames';

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

export const Laboratory = () => {
    const [step, setStep] = useState(0);

    const settings = useGameSettings();

    const { addAllAnswers, addCorrectAnswer } = useActions();

    const maxGermCount = useMemo(() => LEVEL_GERMS[settings.mode], []);

    const [germCount, setGermCount] = useState(random(1, maxGermCount));

    const { count, index, germs } = useMemo(() => {
        const count = generateRandomNumberFillArray(1, 9);
        const index = generateRandomNumberFillArray(0, 8);
        const germs = generateGerms(0, 4, germCount, 16);
        return { count, index, germs };
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
        let newValue = random(1, maxGermCount);
        while (newValue === germCount) {
            newValue = random(1, maxGermCount);
        }
        setGermCount(newValue);
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
