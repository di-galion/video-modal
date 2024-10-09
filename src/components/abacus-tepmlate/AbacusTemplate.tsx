import styles from './styles.module.scss'

const AbacusTemplate = ({ src }) => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.img} src={src} alt='' />
		</div>
	)
}

export default AbacusTemplate
