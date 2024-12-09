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
    multiPlayer: boolean;
}

const initialState: IAccountState = {
    role: Role.None,
    teacher: { id: 1, name: 'Загрузка...', online: false },
    me: { id: 1, name: 'Загрузка...', online: true },
    students: [{ id: 1, name: 'Загрузка...', online: false }],
    ready: false,
    notification: { show: false, text: '', type: 'info' },
    userCount: 0,
    multiPlayer: true,
};

const accountData = createSlice({
    name: 'accountData',
    initialState,
    reducers: {
        setMultiplayer: (state, action: PayloadAction<boolean>) => {
            state.multiPlayer = action.payload;
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
        setAccountData: (
            state,
            action: PayloadAction<
                Pick<IAccountState, 'role' | 'students' | 'teacher' | 'me'>
            >
        ) => {
            state.role = action.payload.role;
            state.students = action.payload.students;
            state.teacher = action.payload.teacher;
            state.me = action.payload.me;
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
    setReady,
} = accountData.actions;

export const accountDataReducer = accountData.reducer;

export default accountData;
