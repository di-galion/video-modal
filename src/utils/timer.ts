export function timeout(fn: (index: number) => void, time: number, index = 0) {
    return new Promise<void>((suc) => {
        setTimeout(() => {
            console.log('index', index);
            fn(index);
            suc();
        }, time);
    });
}

export async function timeouts(fn: (index: number) => void, times: number[]) {
    const timers = times.map((time, ind) => () => timeout(fn, time, ind));
    for (const timer of timers) {
        await timer();
    }
}
