import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useState } from 'react';
import { AuthService } from '../../api/http/auth.service';
import { useActions } from '../../hooks/useActions';

export const SelectPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [index, setIndex] = useState('');
    const { setApiState } = useActions();
    const navigate = useNavigate();

    const handleAuth = async () => {
        try {
            await AuthService.login({ email, password });
        } catch {
            setApiState('error');
        }
    };

    const goToMA = () => {
        navigate('/video-module/mental-arithmetics/' + index);
    };

    return (
        <div className={styles.div}>
            Видео модуль Ментальная арифметика
            <input value={index} onChange={(e) => setIndex(e.target.value)} />
            <button type="button" onClick={goToMA}>
                Go!
            </button>
            <Link to={'/games/mental-arithmetics'}>Ментальная арифметика</Link>
            <Link to={'/games/mult-table'}>Таблица умножения</Link>
            <form>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={handleAuth}>
                    Auth
                </button>
            </form>
        </div>
    );
};
