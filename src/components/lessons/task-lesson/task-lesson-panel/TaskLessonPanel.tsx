import { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { TaskLessonWrap } from '../task-lesson-wrapper/TaskLessonWrapper';
import { TaskLessonRow } from '../task-lesson-row/TaskLessonRow';

type TaskLessonPanelItem = {
    title: string;
    answer: number;
};
export const TaskLessonPanel: FC<{
    items: TaskLessonPanelItem[];
    maxLength?: number;
    collapse?: boolean;
    disabled?: boolean;
}> = ({ items, maxLength = 2, collapse = false, disabled }) => {
    const [rotate, setRotate] = useState(collapse);

    return (
        <>
            <div
                className={styles.collapse__header}
                onClick={() => setRotate((value) => !value)}
            >
                <div className={styles.expand__icon}>
                    <i className={classNames({ [styles.rotate]: rotate })}>
                        <svg width="16" height="11" fill="none">
                            <path
                                d="M3 .3h10a2 2 0 011.8 1.2 2.5 2.5 0 01-.3 2.6l-5 6a2 2 0 01-3 0l-5-6a2.4 2.4 0 01-.3-2.6A2 2 0 013.1.3z"
                                fill="#000"
                            ></path>
                        </svg>
                    </i>
                </div>
                <span className={styles.collapse__text}>
                    <span className={styles.collapse__title}>Реши примеры</span>
                </span>
            </div>
            <TaskLessonWrap collapse={rotate} disabled={disabled}>
                <div className={styles.content__table_content}>
                    {items.map(({ title, answer }) => (
                        <TaskLessonRow
                            title={title}
                            answer={answer}
                            maxLength={maxLength}
                            disabled={disabled}
                        />
                    ))}
                </div>
            </TaskLessonWrap>
        </>
    );
};
