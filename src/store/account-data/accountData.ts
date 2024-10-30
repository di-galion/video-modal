import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../../constants/roles.constants';

type IUser = {
    name: string;
    id: number;
    online?: boolean;
};

interface IAccountState {
    role: Role;
    teacher: IUser;
    students: IUser[];
    me: IUser;
}

const initialState: IAccountState = {
    role: 'teacher',
    teacher: { id: 1, name: 'Иван Михайлов', online: false },
    me: { id: 1, name: 'Иван Михайлов', online: true },
    students: [
        { id: 1, name: 'Иван Михайлов', online: false },
        { id: 1, name: 'Иван Михайлов', online: false },
    ],
};

const accountData = createSlice({
    name: 'accountData',
    initialState,
    reducers: {
        setAccountData: (state, action: PayloadAction<IAccountState>) => {
            state.role = action.payload.role;
            state.students = action.payload.students;
            state.teacher = action.payload.teacher;
        },
        addStudent: (state, action: PayloadAction<IUser>) => {
            state.students = [...state.students, action.payload];
        },
    },
});

export const accountDataReducer = accountData.reducer;

export default accountData;
