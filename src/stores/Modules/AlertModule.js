export default {
    namespaced: true,
    state() {
        return {
            key: 0,
            alerts: [],
        };
    },
    mutations: {
        setKey(state) {
            state.key++;
        },
        addAlert(state, obj) {
            state.alerts.push(obj);
        },
        removeAlert(state) {
            state.alerts.shift();
        },

    },
    actions: {
        generateKey({commit, state}) {
            commit('setKey');
            return state.key;
        },
    },
};
