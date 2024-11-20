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