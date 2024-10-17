import { Role } from '../constants/roles.constants';

export const isTeacher = (role: Role) => role === 'teacher';
export const isStudent = (role: Role) => role === 'student';
