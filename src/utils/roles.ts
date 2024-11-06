import { Role } from '../constants/roles.constants';

export const isTeacher = (role: Role) => role === Role.Teacher;
export const isStudent = (role: Role) => role === Role.Student;
