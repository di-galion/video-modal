import { useEffect, useState } from 'react';
import { useGameStatus } from '../../../hooks/game';
import styles from './styles.module.scss';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';

export const Waiting = () => {
    const [, setStatus] = useGameStatus();
    const [userCount, setUserCount] = useState(0);
    const { sendAction } = useWebSocket();

    useWsAction((name) => {
        if (name === 'userEnter') {
            setUserCount((count) => count + 1);
        } else if (name === 'startGame') {
            setStatus('game');
        }
    });

    useEffect(() => {
        sendAction('userEnter');
    }, []);

    useEffect(() => {
        if (userCount == 2) {
            sendAction('startGame');
        }
    }, [userCount]);

    return <div className={styles.waiting}>Ожидание участников...</div>;
};
