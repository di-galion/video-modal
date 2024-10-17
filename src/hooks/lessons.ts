import { useCallback } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { ILesson, LESSONS_MAP } from '../constants/lessons.constants';
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

export function useLessons() {
    return useTypedSelector((state) => state.lessonsData.lessons);
}

export function useLessonSwitcher() {
    const { addNewLesson } = useActions();
    const lessons = useLessons();

    const switchLesson = useCallback(
        (index: number) => {
            addNewLesson(lessons[index]);
        },
        [addNewLesson, lessons]
    );

    return switchLesson;
}

export function useLessonPager() {
    const change = useLessonSwitcher();
    const index = useCurrentLessonIndex();
    const lessons = useLessons();

    const next = useCallback(
        () => index < lessons.length - 1 && change(index + 1),
        [index, lessons]
    );
    const prev = useCallback(
        () => index > 0 && change(index - 1),
        [index, lessons]
    );

    return [prev, next];
}
