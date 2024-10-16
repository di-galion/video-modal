import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILesson, LESSONS } from '../../constants/lessons.constants';

interface IThemeState {
    name: string;
    lessons: ILesson[];
}

const initialState: IThemeState = {
    lessons: LESSONS,
    name: 'Таблица умножения',
};

const themeData = createSlice({
    name: 'themeData',
    initialState,
    reducers: {
        setThemeData: (state, action: PayloadAction<IThemeState>) => {
            state.lessons = action.payload.lessons;
            state.name = action.payload.name;
        },
    },
});

export const themeDataReducer = themeData.reducer;

export default themeData;
