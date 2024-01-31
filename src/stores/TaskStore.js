import {reactive} from 'vue';
import axios from 'axios';

export const taskStore = reactive({
    tasks: [],
    displayMessage: false,
    message: '',
    baseUrl: 'http://localhost:3000/task/',

    resetAlert() {
        this.message = '';
        this.displayMessage = false;
    },

    setAlert(message) {
        this.message = message;
        this.displayMessage = true;
    },

    async retriveTasks() {
        return await axios.get(this.baseUrl)
            .then((result) => {
                this.tasks = result.data;
            })
            .catch((error) => {
                this.setAlert(error.message);
                console.log(error);
            });
    },

    async submitTask(task) {
        return await axios.post(this.baseUrl, {task})
            .then((result) => {
                this.tasks.push(result.data.createdTask);
            })
            .catch((error) => {
                this.setAlert(error.message);
                console.log(error);
            });
    },

    async deleteTask(id) {
        return await axios.delete(`${this.baseUrl}${id}`)
            .then(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            })
            .catch((error) => {
                this.setAlert(error.message);
                console.log(error);
            });
    },
});
