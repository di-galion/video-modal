import { useEffect, useState } from 'react';
import { generateRandomNumberFillArray } from '../../../utils';
import { TaskLessonPanel } from './task-lesson-panel/TaskLessonPanel';

const map = (array: number[]) =>
    array.map((value) => ({
        title: `${value}+${value}=`,
        answer: value * 2,
    }));

export const TaskLesson = () => {
    const [array1, setArray1] = useState<number[]>([]);
    const [array2, setArray2] = useState<number[]>([]);

    useEffect(() => {
        const _array1 = generateRandomNumberFillArray(1, 10);
        const _array2 = generateRandomNumberFillArray(11, 80).slice(0, 10);
        setArray1(_array1);
        setArray2(_array2);
    }, []);

    return (
        <div>
            <TaskLessonPanel items={map(array1)} maxLength={2} />
            <TaskLessonPanel items={map(array2)} maxLength={3} collapse />
        </div>
    );
};
