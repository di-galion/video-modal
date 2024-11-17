import styles from './styles.module.scss';
import { useWsOnReady } from '../../../api/socket/useWsReady';
import { useActions } from '../../../hooks/useActions';

export const Waiting = () => {
    const { setPageStatus } = useActions();

    useWsOnReady(() => {
        setPageStatus('game');
    });

    return <div className={styles.waiting}>Ожидание участников...</div>;
};
