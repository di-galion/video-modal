import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../api/http/api';
import { GameLessonMode, ILesson } from '../../typings/lesson.module';

interface ILessonState {
    status: 'settings';
    currentLesson: ILesson;
    currentIndex: number;
    lessons: ILesson[];
    themeName: string;
    mode: GameLessonMode;
}

const DEFAULT_LESSON: ILesson = {
    title: 'Загрузка...',
    secondTitle: '',
    status: false,
    index: 0,
    name: 'empty',
};

const initialState: ILessonState = {
    status: 'settings',
    currentLesson: DEFAULT_LESSON,
    lessons: [DEFAULT_LESSON],
    currentIndex: 0,
    themeName: 'Загрузка...',
    mode: 'list',
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
        setLessonMode: (state, action: PayloadAction<GameLessonMode>) => {
            state.mode = action.payload;
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
