import cn from 'classnames'
import { FC } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import styles from '../nav-element/styles.module.scss'

export interface IDropDownIcon {
	isOpen: boolean
	dropDownIconSize?: string | number
}
const DropDownIcon: FC<IDropDownIcon> = ({
	isOpen = false,
	dropDownIconSize = 30,
}) => {
	return (
		<RiArrowDropDownLine
			color={'#cccccc'}
			style={{
				minHeight: dropDownIconSize + 'px',
				minWidth: dropDownIconSize + 'px',
			}}
			className={cn(styles.dropdown_icon, {
				[styles.dropdown_icon_active]: isOpen,
			})}
			size={dropDownIconSize}
		/>
	)
}

export default DropDownIcon
