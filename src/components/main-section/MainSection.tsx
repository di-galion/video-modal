import { useTypedSelector } from '../../hooks/useTypedSelector'
import Lesson1 from '../lessons/lesson-1/Lesson1'
import Lesson2 from '../lessons/lesson-2/Lesson2'
import Lesson3 from '../lessons/lesson-3/Lesson3'
import BottomPart from './bottom-part/BottomPart'
import styles from './styles.module.scss'
import TopPart from './top-part/TopPart'

const MainSection = () => {
	const { currentLesson } = useTypedSelector(state => state.lessonsData)
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.inner}>
					<TopPart />
					<div className={styles.contentInner}>
						<p className={styles.title}>{currentLesson.title}</p>
						{currentLesson?.index == 0 && <Lesson1 />}
						{currentLesson?.index == 1 && <Lesson2 />}
						{currentLesson?.index == 2 && <Lesson3 />}
					</div>
				</div>
				<BottomPart />
			</div>
		</div>
	)
}
export default MainSection
