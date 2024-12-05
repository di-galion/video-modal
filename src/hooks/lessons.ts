import { useCallback, useMemo } from 'react';
import { useTypedSelector } from './useTypedSelector';
import { useActions } from '../hooks/useActions';
import { LESSONS_MAP } from '../constants/lessonsMap';
import { GameLessonMode, IGameLesson, ILesson } from '../typings/lesson.module';
import { useGameName } from './game';
import { useWebSocket } from '../api/socket/useWebSocket';
import { createGames } from '../utils/games';
import { useSearchParams } from 'react-router-dom';

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

export function useLessonCount() {
    const lessons = useTypedSelector((state) => state.lessonsData.lessons);
    return lessons.length;
}

export function useLessons() {
    return useTypedSelector((state) => state.lessonsData.lessons);
}

export function useLessonSwitcher() {
    const { addNewLesson } = useActions();
    const lessons = useLessons();

    const switchLesson = useCallback(
        (index: number) => {
            if (index < lessons.length) {
                addNewLesson(lessons[index]);
            } else {
                console.error('Номер урока выходит за диапазон');
            }
        },
        [addNewLesson, lessons]
    );

    return switchLesson;
}

export function useLessonPager() {
    const { selectLesson } = useWebSocket();
    const index = useCurrentLessonIndex();
    const lessons = useLessons();

    const next = useCallback(
        () => index < lessons.length - 1 && selectLesson(index + 1),
        [index, lessons]
    );
    const prev = useCallback(
        () => index > 0 && selectLesson(index - 1),
        [index, lessons]
    );

    return [prev, next];
}

export function useGameLessonMode(): [
    GameLessonMode,
    (mode: GameLessonMode, sync?: boolean) => void
] {
    const { mode } = useTypedSelector((state) => state.lessonsData);
    const { setLessonMode } = useActions();
    const { setGameMode } = useWebSocket();

    const setMode = useCallback(
        (mode: GameLessonMode, sync: boolean = true) => {
            if (sync) {
                setGameMode(mode);
            } else {
                setLessonMode(mode);
            }
        },
        []
    );

    return [mode, setMode];
}

export function useLessonGameList() {
    const { games } = useTypedSelector(
        (state) => state.lessonsData.currentLesson as IGameLesson
    );
    const out = createGames(games);
    return out || [];
}

export function useLessonCurrentGame() {
    const games = useLessonGameList();
    const [gameName] = useGameName();
    return games.find((game) => game.name === gameName);
}

export const useLessonId = () => {
    const [searchParams] = useSearchParams();

    const id = useMemo(() => {
        const lesson = searchParams.get('lesson');
        return lesson ? Number(lesson) : 0;
    }, [searchParams]);

    return id;
};
