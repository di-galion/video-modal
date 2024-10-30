import { useGameName } from '../../hooks/game';
import { GAME_MAP } from '../../constants/game.contants';
import { useMemo } from 'react';

export const Game = () => {
    const [gameName] = useGameName();

    const game = useMemo(
        () => (GAME_MAP[gameName] ? GAME_MAP[gameName]() : null),
        [gameName]
    );

    return game;
};
