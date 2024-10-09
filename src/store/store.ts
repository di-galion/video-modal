import { configureStore } from '@reduxjs/toolkit'
import { lessonsDataReducer } from './lessons-data/lessonsData'
export const store = configureStore({
	reducer: {
		lessonsData: lessonsDataReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
			// serializableCheck: {
			//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			// }
		}),
})

export type TypeRootState = ReturnType<typeof store.getState>
