import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGameState, IStateSettings } from './GameData.module';

const initialState: IGameState = {
    status: 'settings',
    settings: {},
    gameName: 'laboratory',
    gameSection: '',
    task: [],
    result: {
        correctAnswers: 0,
        allAnswers: 0,
        time: 0,
        stars: 0,
        bestSpeed: 0,
    },
    spriteChange: undefined,
    section: '',
    state: {},
};

const gameData = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        clearSettings: (state) => {
            state.settings = {};
        },
        addNewSetting: (state, action: PayloadAction<IStateSettings>) => {
            state.settings = { ...state.settings, ...action.payload };
        },
        setGameName: (state, action) => {
            state.gameName = action.payload;
        },
        setPageStatus: (state, action) => {
            state.status = action.payload;
        },
        setGameSection: (state, action) => {
            state.gameSection = action.payload;
        },
        addCorrectAnswer: (state) => {
            state.result.correctAnswers = state.result.correctAnswers + 1;
        },
        addAnswer: (state) => {
            state.result.allAnswers = state.result.allAnswers + 1;
        },
        addTime: (state, action) => {
            state.result.time = action.payload;
        },
        addStars: (state, action) => {
            state.result.stars = action.payload;
        },
        clearResult: (state) => {
            state.result = {
                correctAnswers: 0,
                allAnswers: 0,
                time: 0,
                stars: 0,
            };
        },
    },
});

export const gameDataReducer = gameData.reducer;

export default gameData;
