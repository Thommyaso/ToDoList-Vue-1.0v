import {reactive} from 'vue';
import axios from 'axios';

export const taskStore = reactive({
    tasks: [],
    baseUrl: 'http://localhost:3000/task/',

    async retriveTasks() {
        return await axios.get(this.baseUrl)
            .then((result) => {
                this.tasks = result.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async submitTask(task) {
        return await axios.post(this.baseUrl, {task})
            .then((result) => {
                this.tasks.push(result.data.createdTask);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async deleteTask(id) {
        return await axios.delete(`${this.baseUrl}${id}`)
            .then(() => {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            })
            .catch((error) => {
                console.log(error);
            });
    },
});
