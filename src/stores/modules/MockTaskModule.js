import {v4} from 'uuid';
import exampleTasks from '@/exampleTasks.js';

/*

    This is a mockup module to emulate server in github pages

 */

export default {
    namespaced: true,
    state() {
        return {
            tasks: [],
            requestProcessing: false,
        };
    },
    mutations: {
        setRequestProcessing(state) {
            state.requestProcessing = true;
        },

        resetRequestProcessing(state) {
            state.requestProcessing = false;
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
        async retriveTasks({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1500);
            })
                .then(() => {
                    commit('setTasks', exampleTasks);
                });
        },

        async submitTask({commit}, task) {
            commit('setRequestProcessing');
            const createdTask = {
                task,
                id: v4(),
            };
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({data: {createdTask}});
                    commit('addTask', createdTask);
                }, 2500);
            })
                .finally(() => {
                    commit('resetRequestProcessing');
                });
        },

        async deleteTask({commit, state}, id) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('deleteTask', id);
                    resolve({
                        data: {
                            tasks: state.tasks,
                            status: 'ok',
                        },
                    });
                }, 2500);
            });
        },
    },
};
