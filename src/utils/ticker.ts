import { useCallback, useEffect, useRef } from 'react';
import { useGameCurrentTime } from '../hooks/game';

interface TickerProps {
    time: number;
    onFinish: () => void;
}

export const useTicker = (props: TickerProps) => {
    const seconds = useRef(props.time);
    const [value, setValue] = useGameCurrentTime();

    const change = useCallback(() => {
        if (!seconds.current) {
            props.onFinish();
            return false;
        }
        seconds.current--;
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

    return value;
};
