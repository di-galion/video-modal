//////////////////////////////////////По времени////////////////

import { useMemo } from 'react';

type Mode = 0 | 1 | 2 | 3;
type Level = 1 | 2;

type Thresholds = {
    threeStars: number;
    twoStars: number;
    oneStar: number;
};

export const useSpeedStarRating = (
    gameTime: number,
    mode: Mode,
    level: Level,
    thresholdsMap: Record<Level, Record<Mode, Thresholds>>,
): number => {
    return useMemo(() => {
        const thresholds = thresholdsMap[level]?.[mode];

        if (!thresholds) {
            console.error("Invalid thresholds for level or mode");
            return 0;
        }

        if (gameTime <= thresholds.threeStars) {
            return 3;
        } else if (gameTime <= thresholds.twoStars) {
            return 2;
        } else if (gameTime <= thresholds.oneStar) {
            return 1;
        }
        return 0;
    }, [gameTime, mode, level, thresholdsMap]);
};


/// thresholdsMap потом вынести из файла
const thresholdsMap: Record<1 | 2, Record<0 | 1 | 2 | 3, Thresholds>> = {
    1: {
        0: { threeStars: 30, twoStars: 45, oneStar: 60 },
        1: { threeStars: 20, twoStars: 30, oneStar: 40 },
        2: { threeStars: 15, twoStars: 20, oneStar: 25 },
        3: { threeStars: 10, twoStars: 15, oneStar: 20 },
    },
    2: {
        0: { threeStars: 70, twoStars: 80, oneStar: 90 },
        1: { threeStars: 60, twoStars: 70, oneStar: 80 },
        2: { threeStars: 40, twoStars: 50, oneStar: 60 },
        3: { threeStars: 30, twoStars: 40, oneStar: 50 },
    },
};

export const useCalculateFinishStars = (resultTime: number, mode: number, level: number) => {
    const stars = useSpeedStarRating(resultTime, mode, level, thresholdsMap);
    return { stars };
};


//////////////////////////////По верности ответа//////////////////////////////

export const useStarsForAnswers = (
    correctAnswers: number,
    allAnswers: number,
): number => {
    if (allAnswers === 0) return 0;
    const percentage = (correctAnswers / allAnswers) * 100;

    switch (true) {
        case percentage < 50:
            return 0;
        case percentage < 70:
            return 1;
        case percentage < 90:
            return 2;
        default:
            return 3;
    }
};

/////////////////////////////////////////////Расчет верность ответа + время затраченное на игру///////////////
export const useStarsAnswersTimeMode = (
    correctAnswers: number,
    mode: number,
    time: number,
    speed?: number
): number => {
    if (time < 30) return 0;

    const starsThresholds = {
        3: [6, 5, 4],
        2: [5, 4, 3],
        1: [4, 3, 2],
        0: [3, 2, 1],
    };

    const [baseThreeStars, baseTwoStars, baseOneStar] = starsThresholds[mode] || [0, 0, 0];

    const steps = Math.floor(time / 30);
    let requiredThreeStars = baseThreeStars * Math.pow(2, steps - 1);
    let requiredTwoStars = baseTwoStars * Math.pow(2, steps - 1);
    let requiredOneStar = baseOneStar * Math.pow(2, steps - 1);

    if (speed > 2) {
        requiredThreeStars /= 2;
        requiredTwoStars /= 2;
        requiredOneStar /= 2;
    }

    if (correctAnswers >= requiredThreeStars) {
        return 3;
    } else if (correctAnswers >= requiredTwoStars) {
        return 2;
    } else if (correctAnswers >= requiredOneStar) {
        return 1;
    }

    return 0;
};