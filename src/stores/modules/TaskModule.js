import axios from 'axios';
import config from '@/service/config';

export default {
    namespaced: true,
    state() {
        return {
            tasks: [],
            isRequestProcessing: false,
            baseUrl: config.baseApiServerUrl,
        };
    },
    mutations: {
        setisRequestProcessing(state) {
            state.isRequestProcessing = true;
        },
        resetisRequestProcessing(state) {
            state.isRequestProcessing = false;
        },
        setTasks(state, tasks) {
            state.tasks = [...tasks];
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
    },
    actions: {
        async retriveTasks({ commit, state }) {
            return await axios.get(state.baseUrl)
                .then((result) => {
                    commit('setTasks', result.data);
                });
        },

        async submitTask({ commit, state }, task) {
            commit('setisRequestProcessing');
            return await axios.post(state.baseUrl, { task })
                .then((result) => {
                    commit('addTask', result.data.createdTask);
                    return this;
                })
                .finally(() => {
                    commit('resetisRequestProcessing');
                });
        },

        async deleteTask({ commit, state }, id) {
            return await axios.delete(`${state.baseUrl}${id}`)
                .then(() => {
                    commit('deleteTask', id);
                    return this;
                });
        },
    },
};

