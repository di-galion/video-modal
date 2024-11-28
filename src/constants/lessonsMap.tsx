import { CanvasLesson } from '../components/lessons/canvas-lesson/CanvasLesson';
import { GameLesson } from '../components/lessons/game-lesson/GameLesson';
import Lesson1 from '../components/lessons/lesson-1/Lesson1';
import Lesson2 from '../components/lessons/lesson-2/Lesson2';
import Lesson3 from '../components/lessons/lesson-3/Lesson3';
import Lesson4 from '../components/lessons/lesson-4/Lesson4';
import { MaoStatisticsLesson } from '../components/lessons/MAO-statistics-lesson/MaoStatisticsLesson';
import { VideoLesson } from '../components/lessons/video-lesson/VideoLesson';
import { PanelsLesson } from '../components/lessons/panels-lesson/PanelsLesson';
import { SignsLesson } from '../components/lessons/signs-lesson/SignsLesson';
import { SimpleTaskLesson } from '../components/lessons/simple-task-lesson/SimpleTaskLesson';
import { TaskLesson } from '../components/lessons/task-lesson/TaskLesson';
import { ImageLesson } from '../components/lessons/welcome-lesson/LessonWelcome';
import { LessonName } from '../typings/lesson.module';

export const LESSONS_MAP: Record<LessonName, () => JSX.Element> = {
    lesson1: () => <Lesson1 />,
    lesson2: () => <Lesson2 />,
    lesson3: () => <Lesson3 />,
    lesson4: () => <Lesson4 />,
    game: () => <GameLesson />,
    empty: () => <></>,
    image: () => <ImageLesson />,
    task: () => <TaskLesson />,
    simpleTask: () => <SimpleTaskLesson />,
    signs: () => <SignsLesson />,
    canvas: () => <CanvasLesson />,
    panels: () => <PanelsLesson />,
    video: () => <VideoLesson />,
    MaoStatisticsLesson: () => <MaoStatisticsLesson />,
};
