import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { IoMdVolumeHigh, IoMdVolumeOff } from 'react-icons/io'
import { toTimeFormat } from '../../utils/timeToFormat'
import SliderCustom from '../slider/Slider'
import styles from './styles.module.scss'

const VideoPlayer = ({ src = '/assets/video/' }) => {
	const [sound, setSound] = useState()

	const [currentTime, setCurrentTime] = useState(0.5)
	const [play, setPlay] = useState(false)
	const videoRef = useRef(null)

	const onPlayClick = e => {
		if (videoRef.current.paused) {
			videoRef.current.play()
			setPlay(true)
		} else {
			videoRef.current.pause()
			setPlay(false)
		}
	}
	const onChangeDuration = value => {
		videoRef.current.currentTime = value
	}

	const onChangeValume = value => {
		videoRef.current.volume = value / 100
		if (value / 100 === 0.01) {
			setSound(0)
		} else {
			setSound(value / 100)
		}
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (!!videoRef?.current) {
				console.log('intervalId')
				setCurrentTime(videoRef.current.currentTime)
			}
		}, 1000)

		return function () {
			clearInterval(intervalId)
		}
	}, [])

	const onClickMuteButton = () => {
		if (!!sound) {
			videoRef.current.volume = 0
			setSound(0)
		} else {
			setSound(sound)
		}
	}

	console.log('play', videoRef?.current?.volume)
	return (
		<div className={styles.videoWrapper}>
			<div style={{ width: '640px', height: '360px' }}>
				<video
					onClick={onPlayClick}
					// controls
					ref={videoRef}
					style={{ width: '100%', height: '100%' }}
					src='/assets/video/720.mp4'
				></video>
			</div>
			<div className={styles.bottom}>
				<div className={styles.length}>
					<SliderCustom
						min={0}
						value={currentTime}
						max={videoRef?.current?.duration || 0}
						onChange={onChangeDuration}
						withValue={false}
					/>
				</div>
				<div className={styles.controls}>
					<div className={styles.left}>
						<button
							onClick={onPlayClick}
							className={classNames(styles.play, {
								[styles.play_paused]: play,
							})}
						>
							{/* <FaPlay /> */}
						</button>
						<span className={styles.time}>
							<time className={styles.time__off}>
								{toTimeFormat(currentTime)}
							</time>{' '}
							/{' '}
							<time className={styles.time__on}>
								{' '}
								{toTimeFormat(videoRef?.current?.duration)}
							</time>
						</span>
					</div>
					<div className={styles.right}>
						<span onClick={onClickMuteButton} className={styles.sound}>
							{!!sound ? (
								<IoMdVolumeHigh size={23} className={styles.video__icon} />
							) : (
								<IoMdVolumeOff size={23} className={styles.video__icon} />
							)}
						</span>
						<span className={styles.volume}>
							<SliderCustom
								onChange={onChangeValume}
								variant='sm'
								withValue={false}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer
