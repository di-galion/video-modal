import classNames from 'classnames'
import { MdOutlineVideoSettings } from 'react-icons/md'
import { TbExternalLink } from 'react-icons/tb'
import Settings from '../settings/Settings'
import styles from './styles.module.scss'

const TopPart = () => {
	return (
		<div className={styles.top}>
			<div className={styles.top__nameBlock}>
				<p className={styles.top__name}>
					Игорь Крутой
					<span
						className={classNames(styles.top__status, styles.top__status_red)}
					></span>
				</p>
			</div>
			<div className={styles.settingsBlock}>
				<button className={styles.settingsBlock__lessonLink}>
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
	)
}

export default TopPart
