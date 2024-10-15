import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILesson, LESSONS } from '../../constants/lessons.constants';

interface ILessonState {
    status: 'settings';
    currentLesson: ILesson;
    currentIndex: number;
}

const initialState: ILessonState = {
    status: 'settings',
    currentLesson: {
        ...LESSONS[0],
    },
    currentIndex: 0,
};

const lessonsData = createSlice({
    name: 'lessonsData',
    initialState,
    reducers: {
        addNewLesson: (state, action: PayloadAction<ILesson>) => {
            state.currentLesson = action.payload;
        },
    },
});

export const lessonsDataReducer = lessonsData.reducer;

export default lessonsData;
