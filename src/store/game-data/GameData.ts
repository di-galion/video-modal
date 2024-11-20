import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    GameData,
    GameStatus,
    IGameState,
    IGameStateSettings,
    TimeDirection,
    StarCalculationMode
} from '../../typings/game.module';

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
    currentTime: 0,
    timeDirection: 'left',
    starCalculationMode: 'speed-correct-mode',
    data: {},
    syncStorage: {},
    syncAction: {},
};

const gameData = createSlice({
    name: 'gameData',
    initialState,
    reducers: {
        clearSettings: (state) => {
            state.settings = {};
        },
        addNewSetting: (state, action: PayloadAction<IGameStateSettings>) => {
            state.settings = { ...state.settings, ...action.payload };
        },
        setGameName: (state, action: PayloadAction<string>) => {
            state.gameName = action.payload;
        },
        setPageStatus: (state, action: PayloadAction<GameStatus>) => {
            state.status = action.payload;
        },
        addCorrectAnswer: (state) => {
            state.result.correctAnswers = state.result.correctAnswers + 1;
        },
        addAllAnswers: (state) => {
            state.result.allAnswers = state.result.allAnswers + 1;
        },
        setTime: (state, action: PayloadAction<number | undefined>) => {
            state.result.time = action.payload || state.currentTime;
        },
        setTimeDirection: (state, action: PayloadAction<TimeDirection>) => {
            state.timeDirection = action.payload;
        },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload;
        },
        setStarCalculationMode: (
            state,
            action: PayloadAction<StarCalculationMode>,
        ) => {
            state.starCalculationMode = action.payload;
        },
        setStars: (state, action: PayloadAction<number>) => {
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
        register: (state, action: PayloadAction<GameData>) => {
            state.data = action.payload;
        },
        clearStorage: (state) => {
            state.syncStorage = {};
            state.syncAction = {};
        },
        updateSyncStorage: (
            state,
            action: PayloadAction<Record<string, any>>
        ) => {
            state.syncStorage = { ...state.syncStorage, ...action.payload };
        },
        updateSyncAction: (
            state,
            action: PayloadAction<{
                name: string;
                params?: Record<string, any>;
            }>
        ) => {
            state.syncAction = action.payload;
        },
    },
});

export const { updateSyncStorage, updateSyncAction } = gameData.actions;

export const gameDataReducer = gameData.reducer;

export default gameData;
