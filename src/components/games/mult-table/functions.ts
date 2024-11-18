import { generateRandomNumberFillArray, shuffle } from '../../../utils';

function createArrayMult(
    count: number,
    from: number,
    to: number,
    constant: number
) {
    const arr = generateRandomNumberFillArray(from, to)
        .map((item) => [item, constant, 0])
        .slice(0, count);

    return arr;
}

function createArrayDiv(
    count: number,
    from: number,
    to: number,
    constant: number
) {
    let arr = generateRandomNumberFillArray(from, to)
        .filter((item) => item % constant === 0)
        .map((item) => [item, constant, 1])
        .slice(0, count);

    while (true) {
        if (arr.length < count) {
            arr = arr.concat(arr);
        } else {
            return arr.slice(0, count);
        }
    }
}

export function createAll(
    count: number,
    from: number,
    to: number,
    constants: number[],
    actionType: number
) {
    let arr;
    if (actionType == 0) {
        arr = constants.reduce(
            (acc: number[][], cur: number) => [
                ...acc,
                ...createArrayMult(count, from, to, cur),
            ],
            []
        );
    } else if (actionType == 1) {
        arr = constants.reduce(
            (acc: number[][], cur: number) => [
                ...acc,
                ...createArrayDiv(count, from, to, cur),
            ],
            []
        );
    } else {
        arr = constants.reduce(
            (acc: number[][], cur: number) => [
                ...acc,
                ...createArrayMult(count, from, to, cur),
                ...createArrayDiv(count, from, to, cur),
            ],
            []
        );
    }
    return shuffle(arr).slice(0, count);
}
