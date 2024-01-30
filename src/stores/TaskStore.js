import {reactive} from 'vue';
import {v4 as uuidv4} from 'uuid';

export const taskStore = reactive({
    tasks: [
        {
            id: '34ec12bd-d5a1-4b55-a66f-228ba2b4e0c4',
            task: 'go do this',
        },
        {
            id: '71b22a8c-82ee-484a-89a5-72242d9905f5',
            task: 'go do that',
        },
        {
            id: '87a28615-49e0-4789-8835-332b4d021ffa',
            task: 'uauauiua',
        },
    ],
    submitTask(data) {
        this.tasks.push({
            id: uuidv4(),
            task: data,
        });
    },
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    },
});
