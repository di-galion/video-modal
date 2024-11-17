export const generateRandomNumbers = (
    level: number,
    ratios: number,
    back: number[],
) => {
    const scale = level === 2 ? Math.floor(Math.random() * 4) + 1 : ratios;

    while (true) {
        const newArray = Array.from({ length: scale }, (_, index) => {
            const min = 0;
            const max = 9;
            if (scale > 2 && index === 0) {
                return Math.floor(Math.random() * 9) + 1;
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        });
        if (newArray.join('') !== back.join('')) {
            return newArray;
        }
    }
};
