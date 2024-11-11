import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Settings {
    ABACUS_SETTINGS: Record<string, number | boolean>;
    REGIME_SETTINGS: Record<string, number | boolean>;
    INTERFACE_SETTINGS: Record<string, number | boolean>;
    START_SETTINGS: Record<string, number | boolean>;
    SOUND: number;
}

const initialState: { settings: Settings } = {
    settings: {
        ABACUS_SETTINGS: { '1': 1, '2': 0, '3': 0 },
        REGIME_SETTINGS: { '1': 0, '2': 0, '3': 0 },
        INTERFACE_SETTINGS: { '1': 0, '2': 0, '3': 0 },
        START_SETTINGS: { '1': 0, '2': 0 },
        SOUND: 20,
    },
};

const settingsData = createSlice({
    name: 'settingsData',
    initialState,
    reducers: {
        setSetting: (
            state,
            action: PayloadAction<{
                group: keyof Settings;
                key?: string;
                value: boolean | number;
            }>
        ) => {
            const group =
                action.payload.group !== 'SOUND'
                    ? {
                          ...state.settings[action.payload.group],
                          [action.payload.key!]: action.payload.value,
                      }
                    : action.payload.value;

            state.settings = {
                ...state.settings,
                [action.payload.group]: group,
            };
        },
    },
});

export const SettingsReducer = settingsData.reducer;

export default settingsData;
