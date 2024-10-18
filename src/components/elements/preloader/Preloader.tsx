import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { useUrlToGameSection } from '../../../hooks/url-to-game-section/useUrlToGameSection'
import styles from './styles.module.scss'

const Preloader = () => {
	const { gameSection } = useUrlToGameSection()
	const [isLoading, setIsLoading] = useState(false)
	const location = useLocation()

	useEffect(() => {
		if (!isLoading) {
			setIsLoading(true)
			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
	}, [location])

	return (
		<>
			{createPortal(
				<CSSTransition
					in={isLoading}
					classNames={'my-node'}
					timeout={800}
					unmountOnExit
				>
					<div
						className={classNames(styles.wrapper, styles[`bg_${gameSection}`], {
							[styles.hideAnimation]: !isLoading,
						})}
					>
						<div
							className={classNames(
								styles.mainBlock,
								styles[`mainBlock_${gameSection}`]
							)}
						>
							<div
								className={classNames(
									styles.sphere,
									styles[`sphere_${gameSection}`]
								)}
							></div>
							<div
								className={classNames(
									styles.mainBlock__ground,
									styles[`mainBlock__ground_${gameSection}`]
								)}
							></div>
						</div>
					</div>
				</CSSTransition>,
				document?.body
			)}
		</>
	)
}

export default Preloader
