import {reactive} from 'vue';
import axios from 'axios';

export const taskStore = reactive({
    tasks: [],
    alert: {
        display: false,
        error: false,
        message: '',
    },
    requestProcessing: false,
    baseUrl: 'http://localhost:3000/task/',

    resetAlert() {
        this.alert.message = '';
        this.alert.display = false;
        this.error = false;
    },

    setAlert(data) {
        this.alert.display = true;
        this.alert.error = data.error;
        this.alert.message = data.message;
    },

    async retriveTasks() {
        return await axios.get(this.baseUrl)
            .then((result) => {
                this.tasks = result.data;
                this.resetAlert();
            })
            .catch((error) => {
                this.setAlert(
                    {
                        error: true,
                        message: error.message,
                    },
                );
                console.log(error);
            });
    },

    async submitTask(task) {
        return await axios.post(this.baseUrl, {task})
            .then((result) => {
                this.tasks.push(result.data.createdTask);
            })
            .catch((error) => {
                this.setAlert(
                    {
                        error: true,
                        message: error.message,
                    },
                );
                console.log(error);
            })
            .finally(() => {
                this.requestProcessing = false;
            });
    },

    async deleteTask(id) {
        return await axios.delete(`${this.baseUrl}${id}`)
            .then(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            })
            .catch((error) => {
                this.setAlert(
                    {
                        error: true,
                        message: error.message,
                    },
                );
                console.log(error);
            })
            .finally(() => {
                this.requestProcessing = false;
            });
    },
});
