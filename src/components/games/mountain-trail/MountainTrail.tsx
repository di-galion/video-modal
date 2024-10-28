import styles from './styles.module.css';
import personNortal from './img/persons/p-normal.png';
import personGood from './img/persons/p-good.png';
import personBad from './img/persons/p-bad.png';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { generateRandomNumberFillArray, random, shuffle } from '../../../utils';
import {
    useGameFinish,
    useGameResult,
    useGameSettings,
} from '../../../hooks/game';
import { useActions } from '../../../hooks/useActions';

type PersonLook = 'normal' | 'good' | 'bad';

const personMap: Record<PersonLook, string> = {
    normal: personNortal,
    good: personGood,
    bad: personBad,
};

const Persons: FC<{ look: PersonLook }> = ({ look }) => (
    <img src={personMap[look]} alt="persons" />
);

const Shape: FC<{
    text: string;
    right: boolean;
    crush: boolean;
    order: number;
    onClick: (right: boolean) => void;
}> = ({ text, right, crush, onClick, order }) => (
    <span
        className={classNames(styles.elemWrap, { [styles.crush]: crush })}
        onMouseDown={() => onClick(right)}
        style={{ order }}
    >
        <span className={styles.elem}>
            {!crush ? <span className={styles.number}>{text}</span> : null}
        </span>
    </span>
);

function createRightArray(count: number, from: number, constant: number) {
    const arr = new Array(count)
        .fill(null)
        .map((_, index) =>
            random(0, 1) ? [index + from, constant] : [constant, index + from]
        );
    return arr;
}

function createFailArray(count: number, from: number, to: number) {
    const arr1 = generateRandomNumberFillArray(from, to).map((item) => [
        item,
        random(from, to),
    ]);
    const arr2 = generateRandomNumberFillArray(from, to).map((item) => [
        random(from, to),
        item,
    ]);
    const arr = shuffle([...arr1, ...arr2]).slice(0, count);
    return arr;
}

export const MountainTrail = () => {
    const [look, setLook] = useState<PersonLook>('normal');
    const [crush, setCrush] = useState(false);
    const [step, setStep] = useState(0);
    const [order, setOrder] = useState(random(0, 1));
    const { addAllAnswers, addCorrectAnswer } = useActions();
    const { allAnswers, correctAnswers } = useGameResult();
    const [runned, setRunned] = useState(true);
    const { count = 3 } = useGameSettings();
    const finishGame = useGameFinish();

    const rightData = useMemo(() => createRightArray(count, 2, 1), [count]);
    const failData = useMemo(() => createFailArray(count, 2, 10), [count]);

    const interval = useRef<NodeJS.Timeout>();

    const height = useMemo(() => {
        const fail = allAnswers - correctAnswers;
        return (fail / count) * 500;
    }, [count, allAnswers, correctAnswers]);

    const finish = () => {
        if (step == count - 1) {
            finishGame();
        }
    };

    useEffect(() => {
        if (look === 'normal') {
            clearInterval(interval.current);
            if (step <= count - 1) {
                setRunned(true);
                interval.current = setInterval(() => {
                    setLook('bad');
                }, 3000);
            }
        } else {
            setRunned(false);
            addAllAnswers();
            next();
            stop();

            if (look === 'bad') {
                setTimeout(() => {
                    setLook('normal');
                    finish();
                }, 500);
            } else {
                setCrush(true);
                addCorrectAnswer();
                setTimeout(() => {
                    setLook('normal');
                    setCrush(false);
                    finish();
                }, 500);
            }
        }
    }, [look]);

    const next = () => {
        if (step <= count - 1) {
            setOrder(random(0, 1));
            setStep((step) => step + 1);
        }
    };

    const handleClick = (right: boolean) => {
        if (right) {
            setLook('good');
        } else {
            setLook('bad');
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.elements}>
                <div className={styles.wall} style={{ height }}></div>
                <div className={styles.bg}></div>
                <div className={styles.persons}>
                    <Persons look={look} />
                </div>
                {step <= count - 1 ? (
                    <div
                        className={classNames(styles.shapes, {
                            [styles.run]: runned,
                        })}
                    >
                        <Shape
                            order={order}
                            text={`${failData[step][0]}•${failData[step][1]}`}
                            crush={crush}
                            right={false}
                            onClick={handleClick}
                        />
                        <Shape
                            order={Number(!order)}
                            text={`${rightData[step][0]}•${rightData[step][1]}`}
                            crush={crush}
                            right={true}
                            onClick={handleClick}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};
