import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameLessonMode, ILesson } from '../../typings/lesson.module';
import { getLessons } from '../../constants/lessons.constants';
import api from '../../api/http/api';

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

export const fetchLessons = createAsyncThunk(
    'api/fetchLessons',
    async ({ theme, id }: { theme: string; id: number }) => {
        const data: any = await api.getLesson(id);
        console.log('select theme: ', data?.theme_id?.order - 1);
        return getLessons(theme, data?.theme_id?.order - 1);
    }
);

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
            state.themeName = action.payload.themeName;
        });
    },
});

export const lessonsDataReducer = lessonsData.reducer;

export default lessonsData;
