export function shuffle<T>(arr: T[]) {
    let array = Array.from(arr);
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
    return array;
}

export function generateRandomNumberFillArray(from: number, to: number) {
    return shuffle(new Array(to - from + 1).fill(null).map((_, i) => i + from));
}
