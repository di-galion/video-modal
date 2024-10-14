import { EnumRole } from '../constants/roles.constants';

export const isTeacher = (role: EnumRole) => role === EnumRole.Teacher;
export const isStudent = (role: EnumRole) => role === EnumRole.Student;
