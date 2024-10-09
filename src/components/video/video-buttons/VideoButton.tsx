import { useState } from 'react'
import { FiCamera, FiCameraOff } from 'react-icons/fi'
import { TbVolume, TbVolumeOff } from 'react-icons/tb'
import styles from '../styles.module.scss'

const VideoButton = () => {
	const [sound, setSound] = useState(true)
	const [video, setVideo] = useState(true)

	const onClickChangeSound = () => {
		setSound(!sound)
	}
	const onClickChangeVideo = () => {
		setVideo(!video)
	}
	return (
		<div className={styles.video__bottom}>
			<div onClick={onClickChangeSound} className={styles.video__iconWrapper}>
				{sound ? (
					<TbVolume className={styles.video__icon} />
				) : (
					<TbVolumeOff className={styles.video__icon} />
				)}
			</div>
			<div onClick={onClickChangeVideo} className={styles.video__iconWrapper}>
				{video ? (
					<FiCamera className={styles.video__icon} />
				) : (
					<FiCameraOff className={styles.video__icon} />
				)}
			</div>
		</div>
	)
}

export default VideoButton
