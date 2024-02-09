import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            tasks: [],
            requestProcessing: false,
            baseUrl: 'http://localhost:3000/task/',
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
        async retriveTasks({commit, state}) {
            return await axios.get(state.baseUrl)
                .then((result) => {
                    commit('setTasks', result.data);
                });
        },

        async submitTask({commit, state}, task) {
            commit('setRequestProcessing');
            return await axios.post(state.baseUrl, {task})
                .then((result) => {
                    commit('addTask', result.data.createdTask);
                    return this;
                })
                .finally(() => {
                    commit('resetRequestProcessing');
                });
        },

        async deleteTask({commit, state}, id) {
            return await axios.delete(`${state.baseUrl}${id}`)
                .then(() => {
                    commit('deleteTask', id);
                    return this;
                });
        },
    },
};

