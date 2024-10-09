import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { LESSONS } from '../../constants/lessons.constants'
import { useActions } from '../../hooks/useActions'
import styles from './styles.module.scss'

const ITEMS = [
	{
		status: true,
		title: 'Приветствие',
	},
	{
		status: true,
		title: 'Знакомство с Ментальной арифметикой',
	},
	{
		status: false,
		title: 'Знакомство со счетами',
	},
	{
		status: false,
		title: 'Знакомство с цифрами',
	},
	{
		status: false,
		title: 'Игра с Флешкартами',
	},
	{
		status: false,
		title: 'Разминка на абакусе',
	},
	{
		status: false,
		title: 'Счет на физическом абакусе',
	},
	{
		status: false,
		title: 'Включение воображения',
	},
	{
		status: false,
		title: 'Счет на воображаемом абакусе',
	},
	{
		status: false,
		title: 'Игра на счет',
	},
	{
		status: false,
		title: 'Заключение',
	},
	{
		status: false,
		title: 'Статистика',
	},
]
const PanelItems = () => {
	const [items, setItem] = useState(LESSONS)
	const [current, setCurrent] = useState(0)
	const { addNewLesson } = useActions()

	const onItemClick = index => {
		setCurrent(index)
	}

	useEffect(() => {
		addNewLesson(LESSONS[current])
	}, [current])

	return (
		<div className={styles.content}>
			{items.map((item, index) => {
				return (
					<div onClick={() => onItemClick(index)} key={index}>
						<p
							className={classNames(styles.content__item, {
								[styles.content__item_active]: current === index,
							})}
						>
							<span
								className={classNames(styles.content__text, {
									[styles.content__text_active]: current === index,
								})}
							>
								{item.title}
							</span>
							{item.status && (
								<span
									className={classNames(styles.content__side, {
										[styles.content__side_bad]: item.bad,
									})}
								></span>
							)}
						</p>
					</div>
				)
			})}
		</div>
	)
}
export default PanelItems
