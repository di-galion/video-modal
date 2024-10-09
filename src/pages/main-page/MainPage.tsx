import MainSection from '../../components/main-section/MainSection'
import PanelSectionMiddle from '../../components/panel-section-middle/PanelSectionMiddle'
import Video from '../../components/video/Video'
import styles from './styles.module.scss'

const MainPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.content}>
					<div className={styles.lesson}>
						<div id={'inner'} className={styles.lesson__inner}>
							<div className={styles.panel}>
								<div className={styles.panel__inner}>
									<div className={styles.panel__content}>
										<div className={styles.top}>
											<Video />

											<div className={styles.info}>
												<p className={styles.info__text}>
													Ксения Сайфуллаева
													<span className={styles.info__status}></span>
												</p>
												<p>
													<span>Тема:</span> Просто 0 - 4
												</p>
											</div>
										</div>
										<PanelSectionMiddle />
										<div className={styles.bottom}>
											<a href='' className={styles.bottom__buttonWrapper}>
												<button className={styles.bottom__button}>Выход</button>
											</a>
										</div>
									</div>
								</div>
							</div>
							<MainSection />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
