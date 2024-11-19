import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../../constants/roles.constants';

type IUser = {
    name: string;
    id: number;
    online?: boolean;
};

type NotificationType = 'info' | 'success' | 'error';

interface IAccountState {
    role: Role;
    teacher: IUser;
    students: IUser[];
    me: IUser;
    userCount: number;
    notification: {
        show: boolean;
        text: string;
        type: NotificationType;
    };
    ready: boolean;
    sync: boolean;
}

const initialState: IAccountState = {
    role: Role.Teacher,
    teacher: { id: 1, name: 'Иван Михайлов', online: false },
    me: { id: 1, name: 'Иван Михайлов', online: true },
    students: [
        { id: 1, name: 'Иван Михайлов', online: false },
        { id: 1, name: 'Иван Михайлов', online: false },
    ],
    ready: false,
    notification: { show: false, text: '', type: 'info' },
    userCount: 0,
    sync: false,
};

const accountData = createSlice({
    name: 'accountData',
    initialState,
    reducers: {
        setSync: (state, action: PayloadAction<boolean>) => {
            state.sync = action.payload;
        },
        setReady: (state, action: PayloadAction<boolean>) => {
            state.ready = action.payload;
        },
        showNotification: (
            state,
            action: PayloadAction<{ text: string; type: NotificationType }>
        ) => {
            state.notification = {
                text: action.payload.text,
                type: action.payload.type,
                show: true,
            };
        },
        hideNotification: (state) => {
            state.notification = { text: '', show: false, type: 'info' };
        },
        addUserCount: (state) => {
            state.userCount = state.userCount + 1;
        },
        resetUserCount: (state) => {
            state.userCount = 0;
        },
        setRole: (state, action: PayloadAction<Role>) => {
            state.role = action.payload;
        },
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

export const {
    addUserCount,
    resetUserCount,
    hideNotification,
    showNotification,
} = accountData.actions;

export const accountDataReducer = accountData.reducer;

export default accountData;
