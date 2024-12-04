import { useEffect } from 'react';
import { generateRandomNumberFillArray } from '../../../utils';
import { TaskLessonPanel } from './task-lesson-panel/TaskLessonPanel';
import { useSyncStorage } from '../../../api/socket/useSyncStorage';

const map = (array: number[]) =>
    array.map((value) => ({
        title: `${value}+${value}=`,
        answer: value * 2,
    }));

export const TaskLesson = () => {
    const {
        array1 = [],
        array2 = [],
        updateStorage,
    } = useSyncStorage<{
        array1: number[];
        array2: number[];
    }>();

    useEffect(() => {
        updateStorage({
            array1: generateRandomNumberFillArray(1, 10),
            array2: generateRandomNumberFillArray(11, 80).slice(0, 10),
        });
    }, []);

    return (
        <div>
            <TaskLessonPanel
                title="Реши примеры"
                name="1"
                items={map(array1)}
                maxLength={2}
                collapse={false}
            />
            <TaskLessonPanel
                title="Реши примеры"
                name="2"
                items={map(array2)}
                maxLength={3}
                collapse={true}
            />
        </div>
    );
};
