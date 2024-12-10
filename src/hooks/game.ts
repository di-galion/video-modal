import { useCallback, useEffect, useMemo } from 'react';
import { useActions } from './useActions';
import { GameStatus, SettingValue } from '../typings/game.module';
import { useTypedSelector } from './useTypedSelector';
import { useTimer } from '../components/timer/useTimer';
import { useWebSocket } from '../api/socket/useWebSocket';
import { WsSystemAction } from '../api/socket/constants';

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
        sendAction(WsSystemAction.Settings, { reduxKey, value });
    };

    useEffect(() => {
        addNewSetting({ [reduxKey]: value });
    }, [value]);

    return [value, setValue];
}

export const useGame = () => {
    const data = useTypedSelector((state) => state.gameData);
    return data;
};

export const useGameName: () => [
    string,
    (gameName: string, sync?: boolean) => void
] = () => {
    const { gameName } = useTypedSelector((state) => state.gameData);
    const { setGameName } = useActions();
    const { gotoGame } = useWebSocket();
    const setGame = useCallback((gameName: string, sync = true) => {
        if (sync) {
            gotoGame(gameName);
        } else {
            setGameName(gameName);
        }
    }, []);
    return [gameName, setGame];
};

export function useGameSettings<T extends SettingValue = SettingValue>() {
    const { settings } = useGame();
    return settings as Record<string, T>;
}

export const useGameStatus: () => [
    GameStatus,
    (status: GameStatus, sync?: boolean) => void
] = () => {
    const { status } = useGame();
    const { setPageStatus } = useActions();
    const { setGameStatus } = useWebSocket();
    const setStatus = useCallback((status: GameStatus, sync = true) => {
        if (sync) {
            setGameStatus(status);
        } else {
            setPageStatus(status);
        }
    }, []);
    return [status, setStatus];
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

export const useImages = () => {
    const { useImages: images } = useGameData();
    return images;
};
