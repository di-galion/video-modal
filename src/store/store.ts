import { configureStore } from '@reduxjs/toolkit';
import { apiMiddleware } from './apiMiddleware';
import { lessonsDataReducer } from './lessons-data/lessonsData';
import { accountDataReducer } from './account-data/accountData';
import { sectionDataReducer } from './section-data/sectionData';
import { apiDataReducer } from './api-status-data/apiStatusData';

export const store = configureStore({
    reducer: {
        lessonsData: lessonsDataReducer,
        accountData: accountDataReducer,
        sectionData: sectionDataReducer,
        apiData: apiDataReducer,
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
