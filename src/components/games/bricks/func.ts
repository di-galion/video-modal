export const generateNumber = <T extends number>(
    isGameAccess: boolean,
    ratios: T
): number | undefined => {
    if (isGameAccess) {
        const sign = Math.random() < 0.5 ? 1 : -1;
        if (ratios === 1) {
            return sign * Math.floor(Math.random() * 10);
        } else if (ratios === 2) {
            return sign * (Math.floor(Math.random() * 90) + 10);
        } else if (ratios === 3) {
            return sign * (Math.floor(Math.random() * 900) + 100);
        }
    }
    return undefined;
};

interface Brick<T> {
    value: T;
}

export const generateValidBrick = <T extends number>(
    isGameAccess: boolean,
    ratios: T,
    bricks: Brick<T>[],
    setIsDestroyed: (value: boolean) => void
): number => {
    setIsDestroyed(false);
    let newBrickValue = generateNumber(isGameAccess, ratios) as number;
    let newSum = 0;

    while (true) {
        const tempBricks = [...bricks, { value: newBrickValue }];
        newSum = tempBricks.reduce((sum, brick) => sum + brick.value, 0);

        if (
            newSum > 0 &&
            ((ratios === 1 && newSum <= 9) ||
                (ratios === 2 && newSum <= 99) ||
                (ratios === 3 && newSum <= 999))
        ) {
            break;
        }

        newBrickValue = generateNumber(isGameAccess, ratios) as number;
    }

    return newBrickValue;
};