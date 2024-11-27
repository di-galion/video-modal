import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useGameStatus } from '../../../hooks/game';
import {
    useCurrentLessonIndex,
    useGameLessonMode,
    useLessonGameList,
} from '../../../hooks/lessons';
import { GameViewer } from '../../game-viewer/GameViewer';

export const GameLesson = () => {
    const { clearSettings, clearResult, clearStorage } = useActions();
    const [, setStatus] = useGameStatus();
    const [, setMode] = useGameLessonMode();
    const lessonIndex = useCurrentLessonIndex();
    const games = useLessonGameList();

    useEffect(() => {
        clearResult();
        clearSettings();
        clearStorage();
        setStatus('settings');
        setMode('list');
    }, [lessonIndex]);

    return <GameViewer games={games} />;
};
