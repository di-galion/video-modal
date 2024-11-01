import { generateRandomNumberFillArray } from '../../../utils';

function createArray(
    count: number,
    from: number,
    to: number,
    constant: number
) {
    const arr = generateRandomNumberFillArray(from, to)
        .map((item) => [constant, item])
        .slice(0, count);

    return arr;
}

export function createAll(
    count: number,
    from: number,
    to: number,
    constants: number[]
) {
    return constants.reduce(
        (acc: number[][], cur: number) => [
            ...acc,
            ...createArray(count, from, to, cur),
        ],
        []
    );
}
