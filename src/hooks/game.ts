import { useEffect } from 'react';
import { useActions } from './useActions';
import { GameStatus, SettingValue } from '../store/game-data/GameData.module';
import { useTypedSelector } from './useTypedSelector';

export const useChangeGameSetting = (reduxKey: string, value: SettingValue) => {
    const { addNewSetting } = useActions();
    useEffect(() => {
        addNewSetting({ [reduxKey]: value });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
};

export const useGame = () => {
    const data = useTypedSelector((state) => state.gameData);
    return data;
};

export const useGameName: () => [string, (gameName: string) => void] = () => {
    const { gameName } = useTypedSelector((state) => state.gameData);
    const { setGameName } = useActions();
    return [gameName, setGameName];
};

export const useGameSettings = () => {
    const { settings } = useGame();
    return settings;
};

export const useGameStatus: () => [
    GameStatus,
    (status: GameStatus) => void
] = () => {
    const { status } = useGame();
    const { setPageStatus } = useActions();
    return [status, setPageStatus];
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
