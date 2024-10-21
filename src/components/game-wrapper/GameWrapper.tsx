import { FC, PropsWithChildren } from 'react';
import { useGameStatus } from '../../hooks/game';
import { Game } from './game/Game';
import { Settings } from './settings/Settings';
import { GameFinish } from './finish/GameFinish';

export const GameWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [status] = useGameStatus();

    if (status === 'start') {
        return <Game>{children}</Game>;
    } else if (status === 'finish') {
        return (
            <Game>
                <GameFinish />
            </Game>
        );
    } else {
        return <Settings />;
    }
};
