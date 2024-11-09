import styles from './styles.module.scss';
import { PanelItem } from './components/PanelItem';
import {
    useCurrentLessonIndex,
    useLessons,
    useLessonSwitcher,
} from '../../hooks/lessons';

const PanelItems = () => {
    const current = useCurrentLessonIndex();
    const changeLesson = useLessonSwitcher();
    const lessons = useLessons();

    const onItemClick = (index: number) => {
        changeLesson(index);
    };

    return (
        <div className={styles.content}>
            {lessons.map((item, index) => {
                return (
                    <PanelItem
                        key={index}
                        onItemClick={onItemClick}
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
