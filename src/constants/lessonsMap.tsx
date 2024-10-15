import { Laboratory } from '../components/lessons/laboratory/Laboratory';
import Lesson1 from '../components/lessons/lesson-1/Lesson1';
import Lesson2 from '../components/lessons/lesson-2/Lesson2';
import Lesson3 from '../components/lessons/lesson-3/Lesson3';
import Lesson4 from '../components/lessons/lesson-4/Lesson4';

export const enum EnumLessonName {
    Lesson1 = 'lesson1',
    Lesson2 = 'lesson2',
    Lesson3 = 'lesson3',
    Lesson4 = 'lesson4',
    Laboratory = 'laboratory',
}

export const LESSONS_MAP: Record<EnumLessonName, () => JSX.Element> = {
    [EnumLessonName.Lesson1]: () => <Lesson1 />,
    [EnumLessonName.Lesson2]: () => <Lesson2 />,
    [EnumLessonName.Lesson3]: () => <Lesson3 />,
    [EnumLessonName.Lesson4]: () => <Lesson4 />,
    [EnumLessonName.Laboratory]: () => <Laboratory />,
};
