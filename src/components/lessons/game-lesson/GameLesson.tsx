import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useGameName, useGameStatus } from '../../../hooks/game';
import {
    useCurrentLessonIndex,
    useGameLessonMode,
} from '../../../hooks/lessons';
import { GameList } from './game-list/GameList';
import { Game } from '../../game/Game';
import { useWebSocket } from '../../../api/socket/useWebSocket';

export const GameLesson = () => {
    const { clearSettings, clearResult, clearStorage } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setGameName] = useGameName();
    const [mode, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();
    const { connect } = useWebSocket();

    const handleSelectGame = (name: string) => {
        setGameName(name);
        setMode('game');
        connect();
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
