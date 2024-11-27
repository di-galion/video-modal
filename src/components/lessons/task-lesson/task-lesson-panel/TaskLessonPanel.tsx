import { FC } from 'react';
import styles from './styles.module.scss';
import { TaskLessonWrap } from '../task-lesson-wrapper/TaskLessonWrapper';
import { TaskLessonRow } from '../task-lesson-row/TaskLessonRow';
import { Panel } from '../../../panel/Panel';

type TaskLessonPanelItem = {
    title: string;
    answer: number;
};

export const TaskLessonPanel: FC<{
    items: TaskLessonPanelItem[];
    maxLength?: number;
    collapse?: boolean;
    disabled?: boolean;
    name: string;
    title: string;
}> = ({ items, maxLength = 2, collapse = false, disabled, name, title }) => {
    return (
        <Panel name={name} height={860} title={title} collapse={collapse}>
            <TaskLessonWrap disabled={disabled}>
                <div className={styles.content__table_content}>
                    {items.map(({ title, answer }, index) => (
                        <TaskLessonRow
                            panel={name}
                            index={index}
                            title={title}
                            answer={answer}
                            maxLength={maxLength}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </TaskLessonWrap>
        </Panel>
    );
};
