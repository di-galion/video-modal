import { configureStore } from '@reduxjs/toolkit';
import { accountDataReducer } from './account-data/accountData';
import { apiDataReducer } from './api-status-data/apiStatusData';
import { apiMiddleware } from './apiMiddleware';
import { gameDataReducer } from './game-data/GameData';
import { lessonsDataReducer } from './lessons-data/lessonsData';
import { sectionDataReducer } from './section-data/sectionData';
import { SettingsReducer } from './settings-data/SettingsData';

export const store = configureStore({
    reducer: {
        lessonsData: lessonsDataReducer,
        accountData: accountDataReducer,
        sectionData: sectionDataReducer,
        apiData: apiDataReducer,
        gameData: gameDataReducer,
        settingsData: SettingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // }
        }).concat(apiMiddleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
