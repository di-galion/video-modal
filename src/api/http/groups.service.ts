import { toErrorWithMessage } from './catchErrorMessage';
import { instance } from './api.interceptors';

// @ts-ignore

export const GroupsService = {
    getAll: async (params: any) => {
        try {
            const response = await instance({
                method: 'GET',
                url: `api/groups/?${params}`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    getById: async (id: number) => {
        try {
            const response = await instance({
                method: 'GET',
                url: `api/groups/${id}/?expand=students,students.student_id,age_category_id,classroom_id,subject_id,teacher_id,classroom_id.filial_id`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    getGroupsToStudentById: async (id: number) => {
        try {
            const response = await instance({
                method: 'GET',
                url: `api/groups/students/${id}/?expand=group_id,student_id`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    getAllGroupsToStudent: async (params: any) => {
        try {
            const response = await instance({
                method: 'GET',
                url: `api/groups/students/?${params}&expand=group_id,group_id.teacher_id`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    create: async (data: any) => {
        try {
            const response = await instance({
                method: 'POST',
                url: `api/groups/`,
                data: data.data,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    update: async ({ id, data }: { id: number; data: any }) => {
        try {
            const response = await instance({
                method: 'PATCH',
                url: `api/groups/${id}/`,
                data: data,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    delete: async (id: number) => {
        try {
            const response = await instance({
                method: 'DELETE',
                url: `api/groups/${id}/`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    createGroupToStudent: async (data: any) => {
        try {
            const response = await instance({
                method: 'POST',
                url: `api/groups/students/`,
                data,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    deleteGroupToStudent: async (id: number) => {
        try {
            const response = await instance({
                method: 'DELETE',
                url: `api/groups/students/${id}/`,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    updateGroupToStudent: async ({ id, data }: { id: number; data: any }) => {
        try {
            const response = await instance({
                method: 'PATCH',
                url: `api/groups/students/${id}/`,
                data,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
    createGroupTimeCells: async (data: any) => {
        try {
            const response = await instance({
                method: 'POST',
                url: `api/groups/timecells/`,
                data,
            });
            return response.data;
        } catch (error) {
            toErrorWithMessage(error);
        }
    },
};
