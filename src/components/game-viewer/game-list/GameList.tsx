import { FC } from 'react';
import styles from './styles.module.scss';

interface GameListProps {
    onSelect: (gameName: string) => void;
    games: Array<{ name: string; imgUrl: string; title: string }>;
}

export const GameList: FC<GameListProps> = ({ onSelect, games }) => {
    //const games = useLessonGameList();
    return (
        <div className={styles.list}>
            {games.map((game) => (
                <div className={styles.game} key={game.name}>
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
