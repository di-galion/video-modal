import classNames from 'classnames';
import { MdOutlineVideoSettings } from 'react-icons/md';
import { TbExternalLink } from 'react-icons/tb';
import Settings from '../settings/Settings';
import styles from './styles.module.scss';
import {
    useAccount,
    useCurrentRole,
    useStudents,
} from '../../../hooks/account';
import copy from 'copy-to-clipboard';

const TopPart = () => {
    const students = useStudents();
    const { teacher } = useAccount();

    const copyLink = () => {
        copy(window.location.href.toString(), {
            onCopy: (data) => {
                console.log('copied', data);
            },
            format: 'text/plain',
        });
    };

    const role = useCurrentRole();

    return (
        <div className={styles.top}>
            <div className={styles.top__nameBlock}>
                <p className={styles.top__name}>
                    {role === 'TEACHER' ? students[0].name : teacher.name}
                    <span
                        className={classNames(styles.top__status, {
                            [styles.top__status_red]: !students[0].online,
                        })}
                    ></span>
                </p>
            </div>
            <div className={styles.settingsBlock}>
                <button
                    className={styles.settingsBlock__lessonLink}
                    onClick={copyLink}
                    type="button"
                >
                    <TbExternalLink size={15} />
                    <span>Ссылка на занятие</span>
                </button>
                <div className={styles.settingsBlock__buttons}>
                    <button className={styles.settingsBlock__button}>
                        <MdOutlineVideoSettings />
                    </button>
                    <Settings />
                </div>
            </div>
        </div>
    );
};

export default TopPart;
