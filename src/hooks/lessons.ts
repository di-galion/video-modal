import { useCallback } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { ILesson, LESSONS_MAP } from '../constants/lessons.constants';
import { useActions } from '../hooks/useActions';
import { useTheme } from './theme';

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
    const { lessons } = useTheme();

    const switchLesson = useCallback(
        (index: number) => {
            addNewLesson(lessons[index]);
        },
        [addNewLesson]
    );

    return switchLesson;
}

export function useLessonPager() {
    const change = useLessonSwitcher();
    const index = useCurrentLessonIndex();
    const { lessons } = useTheme();

    const next = useCallback(
        () => index < lessons.length - 1 && change(index + 1),
        [index]
    );
    const prev = useCallback(() => index > 0 && change(index - 1), [index]);

    return [prev, next];
}
