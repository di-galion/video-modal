'use client'
import {
	EnumInputVariant,
	IInput,
} from '@/components/ui/nav-element/nav-input/types'
import { default as classNames, default as cn } from 'classnames'
import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

const NavInput: FC<InputHTMLAttributes<HTMLInputElement> & IInput> = ({
	isFullWidth = true,
	additionClass = '',
	variant,
	checked,
	label,
	onClick,
	type,
	value,
	size,
	id,
	isLabelAfter = false,
	onChange = () => {},
	placeholder,
	dataAttr,
	style,
	styleInput,
	classLabel,
	...rest
}) => {
	return (
		<li
			className={classNames('', additionClass, {
				[styles.width100]: isFullWidth,
			})}
		>
			<p
				style={style}
				className={cn(styles.label, styles.width100, {
					[styles.checkbox]: type === 'checkbox',
				})}
			>
				{!isLabelAfter && <span style={{ textWrap: 'wrap' }}>{label}</span>}
				<input
					value={value}
					{...rest}
					style={styleInput}
					data-name={dataAttr}
					checked={checked}
					onClick={onClick}
					onChange={onChange}
					className={cn(styles.input, {
						[styles.variant_sidebar]: variant === EnumInputVariant.SIDEBAR,
						[styles.width100]: isFullWidth,
					})}
					size={size}
					type={type}
					id={id}
					placeholder={placeholder}
				/>
				<label
					onClick={(e: any) => {
						e.stopPropagation()
						if (type === 'checkbox') {
							onChange(e)
						}
					}}
				></label>
				{isLabelAfter && (
					<span style={{ textWrap: 'wrap' }} className={classLabel}>
						{label}
					</span>
				)}
			</p>
		</li>
	)
}

export default NavInput
