import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonSettings {
    ABACUS_SETTINGS: Record<string, number | boolean>;
    REGIME_SETTINGS: Record<string, number | boolean>;
    INTERFACE_SETTINGS: Record<string, number | boolean>;
    START_SETTINGS: Record<string, number | boolean>;
}

const initialState: { common: CommonSettings; sound: number } = {
    common: {
        ABACUS_SETTINGS: { '1': 1, '2': 0, '3': 0 },
        REGIME_SETTINGS: { '1': 0, '2': 0, '3': 0 },
        INTERFACE_SETTINGS: { '1': 0, '2': 0, '3': 0 },
        START_SETTINGS: { '1': 0, '2': 0 },
    },
    sound: 20,
};

const settingsData = createSlice({
    name: 'settingsData',
    initialState,
    reducers: {
        setSettingCommon: (
            state,
            action: PayloadAction<{
                group: keyof CommonSettings;
                key: string;
                value: boolean | number;
            }>
        ) => {
            const group = {
                ...state.common[action.payload.group],
                [action.payload.key!]: action.payload.value,
            };

            state.common = {
                ...state.common,
                [action.payload.group]: group,
            };
        },

        setSettingSound: (state, action: PayloadAction<number>) => {
            state.sound = action.payload;
        },
    },
});

export const SettingsReducer = settingsData.reducer;

export default settingsData;
