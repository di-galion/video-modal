import { configureStore } from '@reduxjs/toolkit';
import { lessonsDataReducer } from './lessons-data/lessonsData';
import { roleDataReducer } from './role-data/roleData';
import { sectionDataReducer } from './section-data/sectionData';

export const store = configureStore({
    reducer: {
        lessonsData: lessonsDataReducer,
        roleData: roleDataReducer,
        sectionData: sectionDataReducer,
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
