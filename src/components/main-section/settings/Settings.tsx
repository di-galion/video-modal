import classNames from 'classnames'
import { useState } from 'react'
import { MdOutlineSettings } from 'react-icons/md'
import SliderCustom from '../../slider/Slider'
import Switch from '../../switch/Switch'
import styles from './styles.module.scss'

const ABACUS_SETTINGS = [
	{ title: 'Web-абакус', key: '1' },
	{ title: 'Web-абакус студента', key: '2' },
	{ title: 'Общая демонстрация', key: '3' },
]

const REGIME_SETTINGS = [
	{ title: 'Touch', key: '1' },
	{ title: 'Classic', key: '2' },
	{ title: 'Virtual', key: '3' },
]

const INTERFACE_SETTINGS = [
	{ title: 'Полное', key: '1' },
	{ title: 'Наблюдает', key: '2' },
	{ title: 'Отключено', key: '3' },
]

const START_SETTINGS = [
	{ title: 'Самостоятельный запуск видео', key: '1' },
	{ title: 'Запуск игр без студента', key: '2' },
]

const Settings = () => {
	const [isOpen, setIsOpen] = useState(false)

	const translte =
		document.getElementById('inner')?.getBoundingClientRect().width - 380

	const onClickClose = () => {
		setIsOpen(false)
	}

	return (
		<>
			<button className={styles.button}>
				<MdOutlineSettings onClick={() => setIsOpen(!isOpen)} />
			</button>
			{/* {createPortal( */}
			<>
				{isOpen && (
					<div
						style={{ transform: `translate(${translte}px, 77px)` }}
						className={styles.container}
					>
						<div className={styles.inner}>
							<span className={styles.close}>
								<button
									onClick={onClickClose}
									className={styles.close__button}
								></button>
							</span>
							<div className={styles.main}>
								<div>
									<div>
										<p className={styles.abacusTitle}>
											Состояние абакуса
											<span className={styles.indicator}></span>
										</p>
									</div>
									<div className={styles.section}>
										<p className={styles.title}>Режим</p>
										<div className={styles.buttons}>
											{REGIME_SETTINGS.map(() => {
												return (
													<button
														className={classNames(styles.buttons__button, {
															[styles.buttons__button_active]: true,
														})}
													>
														Touch
													</button>
												)
											})}
										</div>
									</div>
									{ABACUS_SETTINGS.map(item => {
										return (
											<div>
												<div className={styles.switchWrapper}>
													<span className={styles.switchWrapper__title}>
														{item.title}
													</span>
													<Switch reduxKey={item.key} />
												</div>
											</div>
										)
									})}
									<div className={styles.divider}> </div>
									<div className={styles.section}>
										<p className={styles.title}>
											Взаимодействие студента с интерфейсом игры
										</p>
										<div className={styles.buttons}>
											{INTERFACE_SETTINGS.map(item => {
												return (
													<button
														className={classNames(styles.buttons__button, {
															[styles.buttons__button_active]: true,
														})}
													>
														{item.title}
													</button>
												)
											})}
										</div>
									</div>
									{START_SETTINGS.map(item => {
										return (
											<div>
												<div className={styles.switchWrapper}>
													<span className={styles.switchWrapper__title}>
														{item.title}
													</span>
													<Switch reduxKey={item.key} />
												</div>
											</div>
										)
									})}
									<div className={styles.divider}> </div>
									<div className={styles.section}>
										<p className={styles.title}>Громкость звуков в играх</p>
										<div className={styles.sliderWrapper}>
											<SliderCustom />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</>
			{/* , */}
			{/* document?.body */}
			{/* )} */}
		</>
	)
}

export default Settings
