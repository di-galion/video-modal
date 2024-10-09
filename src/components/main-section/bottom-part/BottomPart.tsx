import classNames from 'classnames'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineCheck } from 'react-icons/md'
import styles from './styles.module.scss'

const BottomPart = ({ isTeacher = true }) => {
	if (!isTeacher) return <></>
	return (
		<div className={styles.bottom}>
			<button
				className={classNames(
					styles.bottom__button,
					styles.bottom__button_left
				)}
			>
				<FaArrowLeft className={styles.icon_left} color={'blue'} />
				Назад
			</button>
			<button disabled className={classNames(styles.buttonSave)}>
				<MdOutlineCheck size={30} color='green' />
				<span>Этап сохранен</span>
			</button>

			<button
				className={classNames(
					styles.bottom__button,
					styles.bottom__button_right
				)}
			>
				Далее
				<FaArrowRight className={styles.icon_right} color={'blue'} />
			</button>
		</div>
	)
}

export default BottomPart
