import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_LESSON, ILesson } from '../../constants/lessons.constants';
import { ApiStatus } from '../api-status-data/apiStatusData';
import api from '../../api/api';

interface ILessonState {
    status: 'settings';
    currentLesson: ILesson;
    currentIndex: number;
    apiStatus: ApiStatus;
    lessons: ILesson[];
    themeName: string;
}

const initialState: ILessonState = {
    status: 'settings',
    currentLesson: DEFAULT_LESSON,
    lessons: [DEFAULT_LESSON],
    currentIndex: 0,
    apiStatus: 'unset',
    themeName: 'Загрузка...',
};

export const fetchLessons = createAsyncThunk('api/fetchLessons', async () => {
    try {
        const lessons = await api.fetchLessons();
        return { lessons };
    } catch (error) {
        return { lessons: [DEFAULT_LESSON], apiStatus: 'error' };
    }
});

const lessonsData = createSlice({
    name: 'lessonsData',
    initialState,
    reducers: {
        addNewLesson: (state, action: PayloadAction<ILesson>) => {
            state.currentLesson = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLessons.fulfilled, (state, action) => {
            state.lessons = action.payload.lessons;
            state.currentLesson = action.payload.lessons[0];
            state.themeName = 'Таблица умножения';
        });
    },
});

export const lessonsDataReducer = lessonsData.reducer;

export default lessonsData;
