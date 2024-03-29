import {v4} from 'uuid';

export default {
    namespaced: true,
    state() {
        return {
            alerts: [],
        };
    },
    mutations: {
        addAlert(state, obj) {
            obj.id = v4();
            obj.persistent = obj.persistent || false;
            state.alerts.push(obj);
        },
        removeAlert(state, id) {
            state.alerts = state.alerts.filter((alert) => alert.id !== id);
        },

    },
};
