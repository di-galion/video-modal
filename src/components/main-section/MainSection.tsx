import { useCurrentLesson } from '../../hooks/lessons';
import BottomPart from './bottom-part/BottomPart';
import styles from './styles.module.scss';
import TopPart from './top-part/TopPart';

const MainSection = () => {
    const [currentLesson, renderLesson] = useCurrentLesson();

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <TopPart />
                    <div className={styles.contentInner}>
                        <p className={styles.title}>{currentLesson.title}</p>
                        {currentLesson.secondTitle && (
                            <p className={styles.secondTitle}>
                                : {currentLesson.secondTitle}
                            </p>
                        )}
                    </div>
                    {renderLesson()}
                </div>
                <BottomPart />
            </div>
        </div>
    );
};

export default MainSection;
