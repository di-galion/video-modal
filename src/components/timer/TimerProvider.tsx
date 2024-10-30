import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { TimerContext } from './TimerContext';
import { TimeDirection } from '../../typings/game.module';

interface TimerContextWrapperProps extends PropsWithChildren {
    onTimeout: (time: number) => void;
}

export const TimerProvider: FC<TimerContextWrapperProps> = ({
    children,
    onTimeout,
}) => {
    const [time, setTime] = useState(-2);
    const [maxTime, setMaxTime] = useState(0);
    const interval = useRef<NodeJS.Timeout>();
    const [timeDirection, setTimeDirection] = useState<TimeDirection>('right');

    const stop = () => {
        if (interval.current) {
            clearInterval(interval.current);
        }
    };

    const start = (direction: TimeDirection, startOrMaxTime: number = -1) => {
        stop();

        setTimeDirection(direction);
        setTime(direction === 'right' ? 0 : startOrMaxTime);
        setMaxTime(startOrMaxTime);

        interval.current = setInterval(() => {
            setTime((time) => (direction === 'right' ? time + 1 : time - 1));
        }, 1000);
    };

    useEffect(() => {
        if (
            (timeDirection === 'left' && !time) ||
            (timeDirection === 'right' && time === maxTime)
        ) {
            stop();
            onTimeout(timeDirection === 'left' ? maxTime : time);
        }
    }, [time, timeDirection]);

    useEffect(() => {
        return () => stop();
    }, []);

    return (
        <TimerContext.Provider value={{ time, start, stop, onTimeout }}>
            {children}
        </TimerContext.Provider>
    );
};
