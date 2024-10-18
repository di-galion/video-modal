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
