import { SettingValue } from '../typings/game.module';

export const toTimeFormat = (seconds: SettingValue) => {
    seconds = Array.isArray(seconds) ? seconds[0] : seconds;
    const minutesPart = Math.floor(Number(seconds) / 60);
    const secondsPart = Math.floor(Number(seconds) % 60);

    let addZero = '';
    if (secondsPart < 10) addZero = '0';
    return `${minutesPart}:${addZero}${secondsPart}`;
};
