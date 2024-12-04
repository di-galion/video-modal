import { useGameName } from '../../hooks/game';
import { useGameLessonMode } from '../../hooks/lessons';
import { GameList } from './game-list/GameList';
import { Game } from '../game/Game';
import { FC } from 'react';

export const GameViewer: FC<{
    games: Array<{ name: string; imgUrl: string; title: string }>;
}> = ({ games }) => {
    const [, setGameName] = useGameName();
    const [mode] = useGameLessonMode();

    const handleSelectGame = (name: string) => {
        setGameName(name);
    };

    return mode === 'game' ? (
        <Game />
    ) : (
        <GameList games={games} onSelect={handleSelectGame} />
    );
};
