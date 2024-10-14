import classNames from 'classnames';
import styles from '../styles.module.scss';

export const ListBlock = () => (
    <div className={styles.list__margin10}>
        <div className={styles.list__items}>
            <button className={styles.list__button}>
                <span className={styles.list__ratio}></span>
                Игорь Крутой
            </button>
            <span
                className={classNames(styles.list__status, {
                    [styles.list__status_red]: true,
                })}
            ></span>
        </div>
    </div>
);
