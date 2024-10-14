import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumSectionTypes } from '../../constants/sectionTypes.constants';

interface ISectionState {
    currentSection: EnumSectionTypes;
}

const initialState: ISectionState = {
    currentSection: EnumSectionTypes.Plan,
};

const sectionData = createSlice({
    name: 'sectionData',
    initialState,
    reducers: {
        setSection: (state, action: PayloadAction<EnumSectionTypes>) => {
            state.currentSection = action.payload;
        },
    },
});

export const sectionDataReducer = sectionData.reducer;

export default sectionData;
