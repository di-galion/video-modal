import { FC } from 'react';
import { useLessonGameList } from '../../../../hooks/lessons';
import styles from './styles.module.scss';

interface GameListProps {
    onSelect: (gameName: string) => void;
}

export const GameList: FC<GameListProps> = ({ onSelect }) => {
    const games = useLessonGameList();
    return (
        <div className={styles.list}>
            {games.map((game) => (
                <div className={styles.game}>
                    <div className={styles.game__wrap}>
                        <div
                            className={styles.game__link}
                            onClick={() => onSelect(game.name)}
                        >
                            <img
                                className={styles.game__img}
                                src={game.imgUrl}
                                alt=""
                            />
                            <span className={styles.game__content}>
                                {game.title}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
