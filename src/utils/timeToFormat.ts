export const toTimeFormat = (seconds: number | number[]) => {
    seconds = Array.isArray(seconds) ? seconds[0] : seconds;
    const minutesPart = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);

    let addZero = '';
    if (secondsPart < 10) addZero = '0';
    return `${minutesPart}:${addZero}${secondsPart}`;
};
