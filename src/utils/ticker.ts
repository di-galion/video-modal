import { useCallback, useEffect, useRef, useState } from 'react';
import { useGameCurrentTime } from '../hooks/game';
import { TimeDirection } from '../typings/game.module';

interface TickerProps {
    time: number;
    timeDirection: TimeDirection;
    onFinish: (time: number) => void;
}

export const useTicker = (props: TickerProps) => {
    const seconds = useRef(props.time);
    const [value, setValue] = useGameCurrentTime();
    const [started, setStarted] = useState(false);

    const change = useCallback(() => {
        if (props.timeDirection === 'left' && !seconds.current) {
            props.onFinish(props.time);
            setStarted(false);
            return false;
        }
        if (props.timeDirection === 'left') {
            seconds.current--;
        } else {
            seconds.current++;
        }
        setStarted(true);
        setValue(seconds.current);
        return true;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!change()) {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [props.time]);

    return started ? value : props.timeDirection === 'left' ? props.time : 0;
};
