import { ILesson } from '../typings/lesson.module';
import TU_1 from './lessons/mult-table/1';
import MAO_1 from './lessons/mental-arith/simple/1-1.tsx';
import MAO_2 from './lessons/mental-arith/brothers/2-1.tsx';
import MAO_ANZAN_1 from './lessons/mental-arith/anzan/4-1.tsx';
import MAO_ANZAN_2 from './lessons/mental-arith/anzan/4-2.tsx';
import MAO_ANZAN_3 from './lessons/mental-arith/anzan/4-3.tsx';
import MAO_ANZAN_4 from './lessons/mental-arith/anzan/4-4.tsx';
import MAO_ANZAN_5 from './lessons/mental-arith/anzan/4-5.tsx';
import MAO_ANZAN_6 from './lessons/mental-arith/anzan/4-6.tsx';
import MAO_ANZAN_7 from './lessons/mental-arith/anzan/4-7.tsx';
import MAO_ANZAN_8 from './lessons/mental-arith/anzan/4-8.tsx';
import MAO_ANZAN_9 from './lessons/mental-arith/anzan/4-9.tsx';
import MAO_ANZAN_10 from './lessons/mental-arith/anzan/4-10.tsx';
import MAO_ANZAN_11 from './lessons/mental-arith/anzan/4-11.tsx';
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
        getLesson(MA_ADDON_2),
    ],
};

export function getLessons(theme: string, index: number) {
    return LESSONS[theme][index] || [];
}
