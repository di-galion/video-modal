import { FC, PropsWithChildren, useEffect } from 'react';
import {
    useGameSettings,
    useGameStatus,
    useTimeDirection,
} from '../../../hooks/game';
import { useTimer } from '../../timer/useTimer';
import { useActions } from '../../../hooks/useActions';

export const Play: FC<PropsWithChildren> = ({ children }) => {
    const { clearResult } = useActions();
    const [status] = useGameStatus();

    useEffect(() => {
        if (status === 'start') {
            clearResult();
        }
    }, [status]);

    const timeDirection = useTimeDirection();
    const { time = 30 } = useGameSettings();

    const { start } = useTimer();

    useEffect(() => {
        start(timeDirection, timeDirection === 'right' ? -1 : time);
    }, [time, timeDirection]);

    return children;
};
