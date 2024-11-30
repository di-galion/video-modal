import { ILesson } from '../typings/lesson.module';
import TU_1 from './lessons/mult-table/1';
import MAO_1 from './lessons/mental-arith/simple/1-1.tsx';
import MAO_2 from './lessons/mental-arith/friends/3-21.tsx'

function getLesson(lesson: Array<string | ILesson[]>) {
    return {
        themeName: lesson[0] as string,
        lessons: lesson[1] as ILesson[],
    };
}

const LESSONS: Record<string, { themeName: string; lessons: ILesson[] }[]> = {
    'mult-table': [getLesson(TU_1)],
    'mental-arithmetics': [getLesson(MAO_1), getLesson(MAO_2)],
};

export function getLessons(theme: string, index: number) {
    return LESSONS[theme][index] || [];
}
