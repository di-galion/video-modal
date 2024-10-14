import { useCallback } from 'react';
import { useTypedSelector } from './useTypedSelector';
import {
    ILesson,
    LESSON_COUNT,
    LESSONS,
    LESSONS_MAP,
} from '../constants/lessons.constants';
import { useActions } from '../hooks/useActions';

export function useLessonRenderer() {
    const { currentLesson } = useTypedSelector((state) => state.lessonsData);
    const render = useCallback(() => {
        return LESSONS_MAP[currentLesson.name]();
    }, [currentLesson]);
    return render;
}

export function useCurrentLesson(): [ILesson, () => JSX.Element] {
    const { currentLesson } = useTypedSelector((state) => state.lessonsData);
    const render = useLessonRenderer();
    return [currentLesson, render];
}

export function useCurrentLessonIndex() {
    const index = useTypedSelector(
        (state) => state.lessonsData.currentLesson.index
    );
    return index;
}

export function useLessonSwitcher() {
    const { addNewLesson } = useActions();

    const switchLesson = useCallback(
        (index: number) => {
            addNewLesson(LESSONS[index]);
        },
        [addNewLesson]
    );

    return switchLesson;
}

export function useLessonPager() {
    const change = useLessonSwitcher();
    const index = useCurrentLessonIndex();

    const next = useCallback(
        () => index < LESSON_COUNT - 1 && change(index + 1),
        [index]
    );
    const prev = useCallback(() => index > 0 && change(index - 1), [index]);

    return [prev, next];
}
