export function random(from: number, to: number) {
    return Math.floor(Math.random() * (to - from)) + from;
}
