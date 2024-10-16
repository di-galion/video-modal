import classNames from 'classnames';
import styles from '../styles.module.scss';
import { useAccount } from '../../../hooks/account';

export const ListBlock = () => {
    const { students } = useAccount();

    return (
        <div className={styles.list__margin10}>
            <div className={styles.list__items}>
                {students.map((student) => (
                    <>
                        <button className={styles.list__button}>
                            <span className={styles.list__ratio}></span>
                            {student.name}
                        </button>
                        <span
                            className={classNames(styles.list__status, {
                                [styles.list__status_red]: !student.online,
                            })}
                        ></span>
                    </>
                ))}
            </div>
        </div>
    );
};
