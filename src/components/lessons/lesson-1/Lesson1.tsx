import styles from './styles.module.scss'

const Lesson1 = () => {
	return (
		<div>
			<div className={styles.imgWrapper}>
				<img
					className={styles.imgWrapper__img}
					src='/assets/img/ma/hello/hello.jpg'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Lesson1
