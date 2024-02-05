import {reactive} from 'vue';
import axios from 'axios';

export const taskStore = reactive({
    tasks: [],
    requestProcessing: false,
    baseUrl: 'http://localhost:3000/task/',

    validateTask(task) {
        return task.length > 0;
    },

    async retriveTasks() {
        return await axios.get(this.baseUrl)
            .then((result) => {
                this.tasks = result.data;
            });
    },

    async submitTask(task) {
        return await axios.post(this.baseUrl, {task})
            .then((result) => {
                this.tasks.push(result.data.createdTask);
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
            .finally(() => {
                this.requestProcessing = false;
            });
    },
});
