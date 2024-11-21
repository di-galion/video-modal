import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useGameName, useGameStatus } from '../../../hooks/game';
import {
    useCurrentLessonIndex,
    useGameLessonMode,
} from '../../../hooks/lessons';
import { GameList } from './game-list/GameList';
import { Game } from '../../game/Game';

export const GameLesson = () => {
    const { clearSettings, clearResult, clearStorage } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setGameName] = useGameName();
    const [mode, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();

    const handleSelectGame = (name: string) => {
        setGameName(name);
    };

    useEffect(() => {
        clearResult();
        clearSettings();
        clearStorage();
        setStatus('settings');
        setMode('list');
    }, [lessonIndex]);

    return mode === 'game' ? (
        <Game />
    ) : (
        <GameList onSelect={handleSelectGame} />
    );
};
