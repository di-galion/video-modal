import { useGameData } from '../../../hooks/game';
import styles from './styles.module.scss';

function format(value: any) {
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    return value;
}

const Table = () => {
    const { startTable: items } = useGameData();

    return items ? (
        <div className={styles.table}>
            <div className={styles.content}>
                <div className={styles.inner}>
                    {items.map((item, key) => {
                        return (
                            <div className={styles.item} key={key}>
                                <p className={styles.name}>{item.text}</p>
                                <p className={styles.value} key={key}>
                                    {format(item.value) || '-'}
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
