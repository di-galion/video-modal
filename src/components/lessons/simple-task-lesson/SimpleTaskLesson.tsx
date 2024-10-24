import { useCurrentLesson } from '../../../hooks/lessons';
import { ISimpleTaskLesson } from '../../../typings/lesson.module';
import { SimpleTaskLessonWrapper } from './SimpleTaskLessonWrapper/SimpleTaskLessonWrapper';
import styles from './styles.module.scss';
import imgMult from './img/mult.png';
import imgTaskMult from './img/taskMult.png';

const imgMap: Record<string, string> = {
    mult: imgMult,
    taskMult: imgTaskMult,
};

export const SimpleTaskLesson = () => {
    const [lesson] = useCurrentLesson();
    const task = (lesson as ISimpleTaskLesson).task;

    return (
        <SimpleTaskLessonWrapper imgSrc={imgMap[task]}>
            <div className={styles.content}>
                <textarea
                    className={styles.textArea}
                    rows={2}
                    cols={30}
                ></textarea>
            </div>
        </SimpleTaskLessonWrapper>
    );
};
