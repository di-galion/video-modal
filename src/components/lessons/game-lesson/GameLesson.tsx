import { useEffect, useMemo } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useGameName, useGameStatus } from '../../../hooks/game';
import { GameWrapper } from '../../game-wrapper/GameWrapper';
import { GAME_MAP } from '../../../constants/game.contants';
import { useGameLessonMode } from '../../../hooks/lessons';
import { GameList } from './game-list/GameList';

export const GameLesson = () => {
    const { clearSettings } = useActions();
    const [, setStatus] = useGameStatus();
    const [gameName, setGameName] = useGameName();
    const [mode, setMode] = useGameLessonMode();

    const game = useMemo(
        () => (GAME_MAP[gameName] ? GAME_MAP[gameName]() : null),
        [gameName]
    );

    const handleSelectGame = (name: string) => {
        setGameName(name);
        setMode('game');
    };

    useEffect(() => {
        clearSettings();
        setStatus('settings');
    }, []);

    return mode === 'game' ? (
        <GameWrapper>{game}</GameWrapper>
    ) : (
        <GameList onSelect={handleSelectGame} />
    );
};
