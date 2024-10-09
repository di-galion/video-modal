import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	status: 'settings',
	currentLesson: {
		title: 'Приветствие',
		secondTitle: '',
		status: true,
		index: 0,
	},
}

const lessonsData = createSlice({
	name: 'lessonsData',
	initialState,
	reducers: {
		addNewLesson: (state, action) => {
			state.currentLesson = action.payload
		},
	},
})

export const lessonsDataReducer = lessonsData.reducer

export default lessonsData
