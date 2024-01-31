import {reactive} from 'vue';
import axios from 'axios';

export const taskStore = reactive({
    tasks: [],
    displayMessage: false,
    message: '',
    baseUrl: 'http://localhost:3000/task/',

    async retriveTasks() {
        this.message = '';
        this.displayMessage = false;
        return await axios.get(this.baseUrl)
            .then((result) => {
                this.tasks = result.data;
            })
            .catch((error) => {
                this.message = error.message;
                this.displayMessage = true;
                console.log(error);
            });
    },

    async submitTask(task) {
        this.message = '';
        this.displayMessage = false;
        return await axios.post(this.baseUrl, {task})
            .then((result) => {
                this.tasks.push(result.data.createdTask);
            })
            .catch((error) => {
                this.message = error.message;
                this.displayMessage = true;
                console.log(error);
            });
    },

    async deleteTask(id) {
        this.message = '';
        this.displayMessage = false;
        return await axios.delete(`${this.baseUrl}${id}`)
            .then(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            })
            .catch((error) => {
                this.message = error.message;
                this.displayMessage = true;
                console.log(error);
            });
    },
});