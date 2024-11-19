export const getRandomImages = (
    images: string[],
    shownImages: string[],
    clickedImages: string[],
    count: number,
) => {
    const availableImages = images.filter(
        (img) => !shownImages.includes(img) && !clickedImages.includes(img),
    );
    const newImages: string[] = [];

    while (newImages.length < count && availableImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        newImages.push(availableImages[randomIndex]);
        availableImages.splice(randomIndex, 1);
    }

    return newImages;
};


export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = Array.from(array);
    return newArray.sort(() => Math.random() - 0.5);
};

export function generateRandomNumberFillArray(from: number, to: number) {
    return shuffleArray(
        new Array(to - from + 1).fill(null).map((_, i) => i + from),
    );
}
