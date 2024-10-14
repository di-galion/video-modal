export const toTimeFormat = (seconds: number) => {
    const minutesPart = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);

    let addZero = '';
    if (secondsPart < 10) addZero = '0';
    return minutesPart + ':' + addZero + secondsPart;
};
