import React from 'react';
import { TimeDirection } from '../../typings/game.module';

export interface TimerContextProps {
    start: (direction: TimeDirection, startOrMaxTime: number) => void;
    stop: () => void;
    onTimeout: (time: number) => void;
    time: number;
}

export const TimerContext = React.createContext<TimerContextProps>({
    start: () => {},
    stop: () => {},
    onTimeout: () => {},
    time: 0,
});
