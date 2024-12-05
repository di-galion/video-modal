import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { AuthService } from '../../api/http/auth.service';
import { useActions } from '../../hooks/useActions';
import { LESSONS } from '../../constants/lessons.constants';

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

    const setStudent = () => {
        setEmail(import.meta.env.VITE_STUDENT_EMAIL);
        setPassword(import.meta.env.VITE_STUDENT_PASSWORD);
    };

    const setTeacher = () => {
        setEmail(import.meta.env.VITE_TEACHER_EMAIL);
        setPassword(import.meta.env.VITE_TEACHER_PASSWORD);
    };

    useEffect(() => {
        setTeacher();
    }, []);

    const goToMA = () => {
        navigate(
            '/video-module/mental-arithmetics?lesson=' +
                import.meta.env.VITE_LESSON_ID
        );
    };

    const handleSelectLesson = (value: string) => {
        setIndex(value);
    };

    const themes = LESSONS['mental-arithmetics'].map((lesson) => lesson[0]);

    return (
        <div className={styles.div}>
            Видео модуль Ментальная арифметика
            <select onChange={(e) => handleSelectLesson(e.target.value)}>
                {themes.map((lesson, index) => (
                    <option key={index} value={index}>
                        {lesson as string}
                    </option>
                ))}
            </select>
            <input value={index} onChange={(e) => setIndex(e.target.value)} />
            <button type="button" onClick={goToMA}>
                Go
            </button>
            <Link
                to={
                    '/games/mental-arithmetics?lesson=' +
                    import.meta.env.VITE_LESSON_ID
                }
            >
                Ментальная арифметика
            </Link>
            <Link
                to={
                    '/games/mult-table?lesson=' + import.meta.env.VITE_LESSON_ID
                }
            >
                Таблица умножения
            </Link>
            <div>
                <button onClick={setTeacher}>TEACHER</button>
            </div>
            <div>
                <button onClick={setStudent}>STUDENT</button>
            </div>
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
