import { useEffect, useMemo } from 'react';
import { useActions } from './useActions';
import { GameStatus, SettingValue } from '../typings/game.module';
import { useTypedSelector } from './useTypedSelector';
import { useTimer } from '../components/timer/useTimer';
import { useWebSocket } from '../api/socket/useWebSocket';

export function useValue<T extends SettingValue>(
    reduxKey: string,
    defaultValue: T
): [T, (value: T) => void] {
    const { settings: gameSetting } = useGame();
    const { sendAction } = useWebSocket();
    const { addNewSetting } = useActions();

    const value = useMemo(() => {
        return (gameSetting[reduxKey] || defaultValue) as T;
    }, [gameSetting]);

    const setValue = (value: T) => {
        sendAction('settings', { reduxKey, value });
    };

    useEffect(() => {
        addNewSetting({ [reduxKey]: value });
    }, [value]);

    return [value, setValue];
}
/*
export const useChangeGameSetting = (reduxKey: string, value: SettingValue) => {
    const { addNewSetting } = useActions();
    useEffect(() => {
        addNewSetting({ [reduxKey]: value });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
};*/

export const useGame = () => {
    const data = useTypedSelector((state) => state.gameData);
    return data;
};

export const useGameName: () => [string, (gameName: string) => void] = () => {
    const { gameName } = useTypedSelector((state) => state.gameData);
    //const { setGameName } = useActions();
    const { gotoGame } = useWebSocket();
    return [gameName, gotoGame];
};

export function useGameSettings<T extends SettingValue = SettingValue>() {
    const { settings } = useGame();
    return settings as Record<string, T>;
}

export const useGameStatus: () => [
    GameStatus,
    (status: GameStatus) => void
] = () => {
    const { status } = useGame();
    //const { setPageStatus } = useActions();
    const { setGameStatus } = useWebSocket();
    return [status, setGameStatus];
};

export const useGameCurrentTime: () => [
    number,
    (time: number) => void
] = () => {
    const { currentTime } = useGame();
    const { setCurrentTime } = useActions();
    return [currentTime, setCurrentTime];
};

export const useGameResult = () => {
    const { result } = useGame();
    return result;
};

export const useGameFinish = () => {
    const timeDirection = useTimeDirection();
    const { setPageStatus, setTime } = useActions();
    const { time: settingsTime } = useGameSettings();
    const { time } = useTimer();

    return () => {
        setTime(timeDirection === 'left' ? (settingsTime as number) : time);
        setPageStatus('finish');
    };
};

export function useGameData() {
    const { data } = useGame();
    return data || {};
}

export function useTimeDirection() {
    const { timeDirection = 'left' } = useGameData();
    return timeDirection;
}
