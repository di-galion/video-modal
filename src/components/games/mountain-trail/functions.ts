import { random, shuffle } from '../../../utils';

function createRightData(number: number, constant: number): [number, number] {
    return [number, constant];
}

function createFailData(number: number, constant: number): [number, number] {
    while (true) {
        const left = random(1, 10);
        const right = random(1, 10);
        if (
            !(
                (left == number && right == constant) ||
                (left === constant && right === number)
            )
        ) {
            return [left, right];
        }
    }
}

function formatShapeNumber(value: [number, number]) {
    return `${value[0]}•${value[1]}`;
}

export function createShapeData(
    number: number,
    constant: number,
    count: number
) {
    const rightShape = {
        text: formatShapeNumber(createRightData(number, constant)),
        right: true,
    };
    const failShapes = new Array(count - 1).fill(null).map(() => ({
        text: formatShapeNumber(createFailData(number, constant)),
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
