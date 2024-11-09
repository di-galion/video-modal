import { random, shuffle } from '../../../utils';

function createRightData(number: number): number {
    return number;
}

function createFailData(constant: number): number {
    while (true) {
        const number = random(1, 30);
        if (number !== constant) {
            return number;
        }
    }
}

export function createShapeData(constant: number, count: number) {
    const rightShape = {
        text: createRightData(constant),
        right: true,
    };
    const failShapes = new Array(count - 1).fill(null).map(() => ({
        text: createFailData(constant),
        right: false,
    }));
    return shuffle([rightShape, ...failShapes]);
}

export function getCount(step: number, level: number = 1) {
    const countMap = [
        {
            4: 2,
            6: 3,
            8: 4,
            11: 5,
        },
    ];

    for (let [key, value] of Object.entries(
        countMap[level - 1] || countMap[0]
    )) {
        if (step + 1 < Number(key)) return value;
    }

    return 2;
}
