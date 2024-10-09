import styles from './styles.module.scss'
import VideoButton from './video-buttons/VideoButton'

const Video = () => {
	return (
		<div className={styles.video}>
			<div className={styles.video__inner}>
				<div className={styles.video__content}>
					<div className={styles.video__mainVideoWrapper}>
						<video className={styles.video__video}></video>
					</div>
					<div className={styles.video__bg}></div>

					<div className={styles.video__minVideoWrapper}>
						<video className={styles.video__video}></video>
					</div>
				</div>
				<div className={styles.video__divider}></div>
				<VideoButton />
			</div>
		</div>
	)
}

export default Video
