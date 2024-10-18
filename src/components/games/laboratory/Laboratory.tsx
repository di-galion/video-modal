import { useEffect, useMemo, useState } from 'react';
import { Flask } from './flask/Flask';
import { Germ } from './germ/Germ';
import { generateRandomNumberFillArray, shuffle, random } from '../../../utils';
import styles from './styles.module.scss';

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

const MAX_GERMS = 5;

/*const LEVEL_GERMS: Record<number, number> = {
    1: 4,
    2: 6,
    3: 9,
};*/

export const Laboratory = () => {
    const [step, setStep] = useState(0);

    const maxGermCount = useMemo(() => MAX_GERMS, []);

    const [germCount, setGermCount] = useState(random(1, maxGermCount));

    const { count, index, germs } = useMemo(() => {
        const count = generateRandomNumberFillArray(1, 9);
        const index = generateRandomNumberFillArray(0, 8);
        const germs = generateGerms(0, 4, germCount, 16);
        return { count, index, germs };
    }, [germCount]);

    const handleClick = (cnt: number) => {
        if (cnt + germCount === 10) {
            setStep((step) => step + 1);
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
        <>
            <div className={styles.level__left}>
                <div className={styles.level__left_row}>
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
        </>
    );
};
