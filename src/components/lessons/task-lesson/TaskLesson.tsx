import { useEffect, useState } from 'react';
import { generateRandomNumberFillArray } from '../../../utils';
import { TaskLessonPanel } from './task-lesson-panel/TaskLessonPanel';
import { useWebSocket, useWsAction } from '../../../api/socket/useWebSocket';
import { useSyncStorage } from '../../../api/socket/useSyncStorage';

const map = (array: number[]) =>
    array.map((value) => ({
        title: `${value}+${value}=`,
        answer: value * 2,
    }));

export const TaskLesson = () => {
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({
        '1': false,
        '2': true,
    });
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

    const { sendAction } = useWebSocket();

    useWsAction((name, params = {}) => {
        if (name === 'collapse') {
            setCollapsed((cold) => ({ ...cold, ...params.value }));
        }
    });

    const handleCollapse = (name: string, collapse: boolean) => {
        sendAction('collapse', { value: { [name]: collapse } });
    };

    return (
        <div>
            <TaskLessonPanel
                name="1"
                items={map(array1)}
                maxLength={2}
                onCollapse={handleCollapse}
                collapse={collapsed['1']}
            />
            <TaskLessonPanel
                name="2"
                items={map(array2)}
                maxLength={3}
                onCollapse={handleCollapse}
                collapse={collapsed['2']}
            />
        </div>
    );
};
