import classNames from 'classnames'
import { useState } from 'react'
import PanelItems from '../panel-items/PanelItems'
import styles from './styles.module.scss'

enum EnumSectionTypes {
	PLAN = 'plan',
	LIST = 'list',
}
const PanelSectionMiddle = ({ isTeacher }) => {
	const [section, setSection] = useState(EnumSectionTypes.PLAN)

	const onClickChangeSection = value => {
		setSection(value)
	}
	return (
		<div className={styles.middle}>
			{isTeacher ? (
				<div className={styles.middle__buttonWrapper}>
					<div className={styles.middle__buttons}>
						<button
							onClick={() => onClickChangeSection(EnumSectionTypes.PLAN)}
							className={classNames(styles.middle__button, {
								[styles.middle__button_active]:
									section === EnumSectionTypes.PLAN,
							})}
						>
							<span>План занятия</span>
						</button>
						<button
							onClick={() => onClickChangeSection(EnumSectionTypes.LIST)}
							className={classNames(styles.middle__button, {
								[styles.middle__button_active]:
									section === EnumSectionTypes.LIST,
							})}
						>
							<span> Список студентов</span>
						</button>
					</div>
				</div>
			) : (
				<span className={styles.middle__title}>План занятия</span>
			)}

			{section === EnumSectionTypes.PLAN ? (
				<div className={styles.middle__main}>
					<div className={styles.wrapper}>
						<PanelItems />
					</div>
				</div>
			) : (
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
			)}
		</div>
	)
}

export default PanelSectionMiddle
