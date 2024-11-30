import { ILesson } from '../typings/lesson.module';
import TU_1 from './lessons/mult-table/1';
import MAO_1 from './lessons/mental-arith/brothers/2-1.tsx';
//import MAO_2 from './lessons/mental-arith/brothers/2-1.tsx';
import MA_ADDON_1 from './lessons/mental-arith/addon/1.tsx';
import MAO_2 from './lessons/mental-arith/addon/2.tsx';

function getLesson(lesson: Array<string | ILesson[]>) {
    return {
        themeName: lesson[0] as string,
        lessons: lesson[1] as ILesson[],
    };
}

const LESSONS: Record<
    string,
    Array<{ themeName: string; lessons: ILesson[] }>
> = {
    'mult-table': [getLesson(TU_1)],
    'mental-arithmetics': [
        getLesson(MAO_1),
        getLesson(MAO_2),
        getLesson(MA_ADDON_1),
    ],
};

export function getLessons(theme: string, index: number) {
    return LESSONS[theme][index] || [];
}
