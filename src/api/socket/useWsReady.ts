import { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const useWsIsReady = () => {
    const { ready } = useTypedSelector((state) => state.accountData);
    return Number(import.meta.env.VITE_PREVENT_READY) || ready;
};

export const useWsOnReady = (callback: () => void) => {
    const ready = useWsIsReady();

    useEffect(() => {
        if (ready) {
            callback();
        }
    }, [ready]);
};
