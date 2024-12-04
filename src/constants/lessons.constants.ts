import { ILesson } from '../typings/lesson.module';
import TU_1 from './lessons/mult-table/1';
import MA_ADDON_1 from './lessons/mental-arith/addon/1.tsx';
import MA_ADDON_2 from './lessons/mental-arith/addon/2.tsx';

import SIMPLE_1 from './lessons/mental-arith/simple/1-1.tsx';
import SIMPLE_2 from './lessons/mental-arith/simple/1-2.tsx';
import SIMPLE_3 from './lessons/mental-arith/simple/1-3.tsx';
import SIMPLE_4 from './lessons/mental-arith/simple/1-4.tsx';
import SIMPLE_5 from './lessons/mental-arith/simple/1-5.tsx';
import SIMPLE_6 from './lessons/mental-arith/simple/1-6.tsx';
import SIMPLE_7 from './lessons/mental-arith/simple/1-7.tsx';
import SIMPLE_8 from './lessons/mental-arith/simple/1-8.tsx';

import BROTHERS_1 from './lessons/mental-arith/brothers/2-1.tsx';
import BROTHERS_2 from './lessons/mental-arith/brothers/2-2.tsx';
import BROTHERS_3 from './lessons/mental-arith/brothers/2-3.tsx';
import BROTHERS_4 from './lessons/mental-arith/brothers/2-4.tsx';
import BROTHERS_5 from './lessons/mental-arith/brothers/2-5.tsx';
import BROTHERS_6 from './lessons/mental-arith/brothers/2-6.tsx';
import BROTHERS_7 from './lessons/mental-arith/brothers/2-7.tsx';
import BROTHERS_8 from './lessons/mental-arith/brothers/2-8.tsx';
import BROTHERS_9 from './lessons/mental-arith/brothers/2-9.tsx';
import BROTHERS_10 from './lessons/mental-arith/brothers/2-10.tsx';
import BROTHERS_11 from './lessons/mental-arith/brothers/2-11.tsx';

import FRIENDS_1 from './lessons/mental-arith/friends/3-1.tsx';
import FRIENDS_2 from './lessons/mental-arith/friends/3-2.tsx';
import FRIENDS_3 from './lessons/mental-arith/friends/3-3.tsx';
import FRIENDS_4 from './lessons/mental-arith/friends/3-4.tsx';
import FRIENDS_5 from './lessons/mental-arith/friends/3-5.tsx';
import FRIENDS_6 from './lessons/mental-arith/friends/3-6.tsx';
import FRIENDS_7 from './lessons/mental-arith/friends/3-7.tsx';
import FRIENDS_8 from './lessons/mental-arith/friends/3-8.tsx';
import FRIENDS_9 from './lessons/mental-arith/friends/3-9.tsx';
import FRIENDS_10 from './lessons/mental-arith/friends/3-10.tsx';
import FRIENDS_11 from './lessons/mental-arith/friends/3-11.tsx';
import FRIENDS_12 from './lessons/mental-arith/friends/3-12.tsx';
import FRIENDS_13 from './lessons/mental-arith/friends/3-13.tsx';
import FRIENDS_14 from './lessons/mental-arith/friends/3-14.tsx';
import FRIENDS_15 from './lessons/mental-arith/friends/3-15.tsx';
import FRIENDS_16 from './lessons/mental-arith/friends/3-16.tsx';
import FRIENDS_17 from './lessons/mental-arith/friends/3-17.tsx';
import FRIENDS_18 from './lessons/mental-arith/friends/3-18.tsx';
import FRIENDS_19 from './lessons/mental-arith/friends/3-19.tsx';
import FRIENDS_20 from './lessons/mental-arith/friends/3-20.tsx';
import FRIENDS_21 from './lessons/mental-arith/friends/3-21.tsx';

import ANZAN_1 from './lessons/mental-arith/anzan/4-1.tsx';
import ANZAN_2 from './lessons/mental-arith/anzan/4-2.tsx';
import ANZAN_3 from './lessons/mental-arith/anzan/4-3.tsx';
import ANZAN_4 from './lessons/mental-arith/anzan/4-4.tsx';
import ANZAN_5 from './lessons/mental-arith/anzan/4-5.tsx';
import ANZAN_6 from './lessons/mental-arith/anzan/4-6.tsx';
import ANZAN_7 from './lessons/mental-arith/anzan/4-7.tsx';
import ANZAN_8 from './lessons/mental-arith/anzan/4-8.tsx';
import ANZAN_9 from './lessons/mental-arith/anzan/4-9.tsx';
import ANZAN_10 from './lessons/mental-arith/anzan/4-10.tsx';
import ANZAN_11 from './lessons/mental-arith/anzan/4-11.tsx';

export function getLesson(lesson: Array<string | ILesson[]>) {
    return {
        themeName: lesson[0] as string,
        lessons: lesson[1] as ILesson[],
    };
}

export const LESSONS: Record<string, Array<Array<string | ILesson[]>>> = {
    'mult-table': [TU_1],
    'mental-arithmetics': [
        SIMPLE_1,
        SIMPLE_2,
        SIMPLE_3,
        SIMPLE_4,
        SIMPLE_5,
        SIMPLE_6,
        SIMPLE_7,
        SIMPLE_8,
        BROTHERS_1,
        BROTHERS_2,
        BROTHERS_3,
        BROTHERS_4,
        BROTHERS_5,
        BROTHERS_6,
        BROTHERS_7,
        BROTHERS_8,
        BROTHERS_9,
        BROTHERS_10,
        BROTHERS_11,
        FRIENDS_1,
        FRIENDS_2,
        FRIENDS_3,
        FRIENDS_4,
        FRIENDS_5,
        FRIENDS_6,
        FRIENDS_7,
        FRIENDS_8,
        FRIENDS_9,
        FRIENDS_10,
        FRIENDS_11,
        FRIENDS_12,
        FRIENDS_13,
        FRIENDS_14,
        FRIENDS_15,
        FRIENDS_16,
        FRIENDS_17,
        FRIENDS_18,
        FRIENDS_19,
        FRIENDS_20,
        FRIENDS_21,
        ANZAN_1,
        ANZAN_2,
        ANZAN_3,
        ANZAN_4,
        ANZAN_5,
        ANZAN_6,
        ANZAN_7,
        ANZAN_8,
        ANZAN_9,
        ANZAN_10,
        ANZAN_11,
        MA_ADDON_1,
        MA_ADDON_2,
    ],
};

export function getLessons(theme: string, index: number) {
    return getLesson(LESSONS[theme][index]) || [];
}
