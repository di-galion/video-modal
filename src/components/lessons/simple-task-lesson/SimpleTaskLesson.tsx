import { useCurrentLesson } from '../../../hooks/lessons';
import { ISimpleTaskLesson } from '../../../typings/lesson.module';
import { SimpleTaskLessonWrapper } from './SimpleTaskLessonWrapper/SimpleTaskLessonWrapper';
import styles from './styles.module.scss';
import imgMult from './img/mult.png';
import imgTaskMult from './img/taskMult.png';
import { useEffect, useState } from 'react';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';

const imgMap: Record<string, string> = {
    mult: imgMult,
    taskMult: imgTaskMult,
};

export const SimpleTaskLesson = () => {
    const [lesson] = useCurrentLesson();
    const task = (lesson as ISimpleTaskLesson).task;
    const [value, setValue] = useState('');
    const { sendAction } = useWebSocket();

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setValue(e.target.value);
    };

    useWsAction((name, params = {}) => {
        if (name === 'setValue' && value !== params.value) {
            setValue(params.value);
        }
    });

    useEffect(() => {
        sendAction('setValue', { value });
    }, [value]);

    return (
        <SimpleTaskLessonWrapper imgSrc={imgMap[task]}>
            <div className={styles.content}>
                <textarea
                    value={value}
                    onChange={handleChange}
                    className={styles.textArea}
                    rows={2}
                    cols={30}
                ></textarea>
            </div>
        </SimpleTaskLessonWrapper>
    );
};
