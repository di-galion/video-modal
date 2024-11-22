import styles from './styles.module.scss';
import { PanelItem } from './components/PanelItem';
import { useCurrentLessonIndex, useLessons } from '../../hooks/lessons';
import { useWebSocket } from '../../api/socket/useWebSocket';

const PanelItems = () => {
    const current = useCurrentLessonIndex();
    const lessons = useLessons();
    const { selectLesson } = useWebSocket();

    return (
        <div className={styles.content}>
            {lessons.map((item, index) => {
                return (
                    <PanelItem
                        key={index}
                        onItemClick={selectLesson}
                        index={index}
                        current={current}
                        item={item}
                    />
                );
            })}
        </div>
    );
};
export default PanelItems;
