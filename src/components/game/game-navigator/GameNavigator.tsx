import { FC, PropsWithChildren } from 'react';
import { useGameStatus } from '../../../hooks/game';
import Start from '../start/Start';
import { GameWrapper } from '../game-wrapper/GameWrapper';
import { Play } from '../play/Play';
import { GameFinish } from '../finish/GameFinish';
import { Settings } from '../settings/Settings';
import { Waiting } from '../waiting/Waiting';

export const GameNavigator: FC<PropsWithChildren> = ({ children }) => {
    const [status] = useGameStatus();

    switch (status) {
        case 'start':
            return <Start />;
        case 'waiting':
            return (
                <GameWrapper>
                    <Waiting />
                </GameWrapper>
            );
        case 'game':
            return (
                <GameWrapper>
                    <Play>{children}</Play>
                </GameWrapper>
            );
        case 'finish':
            return <GameFinish />;
        default:
            return <Settings />;
    }
};
