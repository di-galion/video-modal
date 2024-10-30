import { generateRandomNumberFillArray, shuffle } from '../../../utils';

export function createArray(
    count: number,
    from: number,
    to: number,
    constant: number
) {
    const arr1 = generateRandomNumberFillArray(from, to).map((item) => [
        item,
        constant,
    ]);
    const arr2 = generateRandomNumberFillArray(from, to).map((item) => [
        constant,
        item,
    ]);
    const arr = shuffle([...arr1, ...arr2]).slice(0, count);
    return arr;
}
