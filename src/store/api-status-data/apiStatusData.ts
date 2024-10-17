import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ApiStatus = 'unset' | 'error';

export const initialState: { value: ApiStatus } = {
    value: 'unset',
};

const apiData = createSlice({
    name: 'apiState',
    initialState,
    reducers: {
        set(state, action: PayloadAction<ApiStatus>) {
            state.value = action.payload;
        },
    },
});

export const { reducer: apiDataReducer } = apiData;

export const { set: setApiState } = apiData.actions;
