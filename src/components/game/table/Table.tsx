import { GAME_START_DATA_TABLE } from '../../../constants/startData.constant';
import { useGameName, useGameSettings } from '../../../hooks/game';
import styles from './styles.module.scss';

const Table = () => {
    const settings = useGameSettings();
    const [gameName] = useGameName();
    const items = GAME_START_DATA_TABLE(settings, gameName);

    return items ? (
        <div className={styles.table}>
            <div className={styles.content}>
                <div className={styles.inner}>
                    {items.map((item, key) => {
                        return (
                            <div className={styles.item} key={key}>
                                <p className={styles.name}>{item.text}</p>
                                <p className={styles.value} key={key}>
                                    {item.value || '-'}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    ) : null;
};

export default Table;
