import classNames from 'classnames'
import { FC } from 'react'
import { createPortal } from 'react-dom'

export interface ILayoutDetectClick {
	onClick: any
}
const LayoutDetectClick: FC<ILayoutDetectClick> = ({ onClick }) => {
	return (
		<>
			{createPortal(
				<div
					onClick={onClick}
					className={classNames('absolute  top-0 left-0 bottom-0 right-0')}
				></div>,
				document?.body
			)}
		</>
	)
}

export default LayoutDetectClick
