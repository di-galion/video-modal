import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const enum StudentInterfaceAccess {
    Full = 1,
    Observer = 2,
}

interface CommonSettings {
    ABACUS_SETTINGS: Record<string, number | boolean>;
    REGIME_SETTINGS: Record<string, number | boolean>;
    START_SETTINGS: Record<string, number | boolean>;
}

const initialState: {
    common: CommonSettings;
    sound: number;
    interface: number;
    video: boolean;
    withoutStudent: boolean;
} = {
    common: {
        ABACUS_SETTINGS: { '1': 1, '2': 0, '3': 0 },
        REGIME_SETTINGS: { '1': 0, '2': 0, '3': 0 },
        START_SETTINGS: { '1': 1, '2': 1 },
    },
    video: true,
    interface: 1,
    withoutStudent: true,
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

        setExternalSettings: (
            state,
            action: PayloadAction<{ video: boolean; interface: number }>
        ) => {
            state.interface = action.payload.interface;
            state.video = action.payload.video;
        },

        setSettingSound: (state, action: PayloadAction<number>) => {
            state.sound = action.payload;
        },

        setSettingInterface: (state, action: PayloadAction<number>) => {
            state.interface = action.payload;
        },

        setSettingVideo: (state, action: PayloadAction<boolean>) => {
            state.video = action.payload;
        },

        setSettingWithoutSudent: (state, action: PayloadAction<boolean>) => {
            state.withoutStudent = action.payload;
        },
    },
});

export const SettingsReducer = settingsData.reducer;

export default settingsData;
