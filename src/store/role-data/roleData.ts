import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EnumRole } from '../../constants/roles.constants';

interface IRoleState {
    currentRole: EnumRole;
}

const initialState: IRoleState = {
    currentRole: EnumRole.Student,
};

const roleData = createSlice({
    name: 'roleData',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<EnumRole>) => {
            state.currentRole = action.payload;
        },
    },
});

export const roleDataReducer = roleData.reducer;

export default roleData;
