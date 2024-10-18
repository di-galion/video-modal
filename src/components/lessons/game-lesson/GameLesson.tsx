import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { Laboratory } from '../../games/laboratory/Laboratory';
import { useGame, useGameSettings, useGameStatus } from '../../../hooks/game';
import {
    CONTROLS_MAP,
    GAME_SETTINGS_MAP,
} from '../../../constants/game.contants';
import { GameWrapper } from '../../game-wrapper/GameWrapper';

const Settings = () => {
    const { gameName } = useGame();
    const settings = useGameSettings();

    return (
        <>
            {gameName
                ? GAME_SETTINGS_MAP(settings)[gameName].map((game) => {
                      return CONTROLS_MAP(game)[game.type]();
                  })
                : ''}
        </>
    );
};

export const GameLesson = () => {
    const { clearSettings } = useActions();
    const [status, setStatus] = useGameStatus();

    useEffect(() => {
        clearSettings();
        setStatus('settings');
    }, []);

    return (
        <GameWrapper>
            {status === 'start' ? <Laboratory /> : <Settings />}
        </GameWrapper>
    );
};
