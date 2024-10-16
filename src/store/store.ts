import { configureStore } from '@reduxjs/toolkit';
import { lessonsDataReducer } from './lessons-data/lessonsData';
import { accountDataReducer } from './account-data/accountData';
import { sectionDataReducer } from './section-data/sectionData';
import { themeDataReducer } from './theme-data/themeData';

export const store = configureStore({
    reducer: {
        lessonsData: lessonsDataReducer,
        accountData: accountDataReducer,
        sectionData: sectionDataReducer,
        themeData: themeDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // }
        }),
});

export type TypeRootState = ReturnType<typeof store.getState>;
