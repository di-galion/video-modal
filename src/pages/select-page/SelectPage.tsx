import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const SelectPage = () => (
    <div className={styles.div}>
        <Link to={'/video-module/mental-arithmetics'}>
            Видео модуль Ментальная арифметика
        </Link>
        <Link to={'/video-module/mult-table'}>
            Видео модуль Таблица умножения
        </Link>
        <Link to={'/games/mental-arithmetics'}>Ментальная арифметика</Link>
        <Link to={'/games/mult-table'}>Таблица умножения</Link>
    </div>
);
