import {reactive} from 'vue';

export const alertStore = reactive({
    key: 0,
    alerts: [],
    generateKey() {
        this.key++;
        return this.key;
    },
    setAlert(obj) {
        this.alerts.push(obj);
    },
    removeAlert() {
        this.alerts.shift();
    },
});
