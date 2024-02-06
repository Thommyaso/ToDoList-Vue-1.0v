import {reactive} from 'vue';

export const alertStore = reactive({
    key: 0,
    alerts: [],
    generateKey() {
        this.key++;
        return this.key;
    },
    setAlertElement(obj) {
        this.alerts.push(obj);
    },
    removeAlertElement() {
        this.alerts.shift();
    },
});
