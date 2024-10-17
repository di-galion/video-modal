import { GameLesson } from '../components/lessons/game-lesson/GameLesson';
import Lesson1 from '../components/lessons/lesson-1/Lesson1';
import Lesson2 from '../components/lessons/lesson-2/Lesson2';
import Lesson3 from '../components/lessons/lesson-3/Lesson3';
import Lesson4 from '../components/lessons/lesson-4/Lesson4';
import { LessonName } from './lessons.constants';

export const LESSONS_MAP: Record<LessonName, () => JSX.Element> = {
    lesson1: () => <Lesson1 />,
    lesson2: () => <Lesson2 />,
    lesson3: () => <Lesson3 />,
    lesson4: () => <Lesson4 />,
    game: () => <GameLesson />,
    empty: () => <></>,
};
