<template>
    <div class="container">
        <ToDoLoading
            v-if="showToDoLoading"
            :visible="showToDoLoading"
        />
        <ul
            v-else
            class="container__list"
        >
            <ToDoList
                v-for="task in tasks"
                :key="task.id"
                :task="task.task"
                :showDeletingIndicator="showDeletingIndicator"
                @deleteClicked="processDeleteClick(task.id)"
            />
        </ul>
        <ToDoForm
            :processingTask="isRequestProcessing"
            :retainTask="retainTask"
            @onTaskSubmit="processNewTask"
        />
    </div>
</template>

<script>
import ToDoLoading from '@/components/ToDoLoading/ToDoLoading.vue';
import ToDoList from '@/components/ToDoList/ToDoList.vue';
import ToDoForm from '@/components/ToDoForm/ToDoForm.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {

    components: {
        ToDoList,
        ToDoForm,
        ToDoLoading,
    },
    data() {
        return {
            showToDoLoading: false,
            showDeletingIndicator: false,
            retainTask: true,
        };
    },
    computed: {
        ...mapState({
            tasks: (state) => state.TaskModule.tasks,
            isRequestProcessing: (state) => state.TaskModule.isRequestProcessing,
        }),
    },
    mounted() {
        this.showToDoLoading = true;
        this.retriveTasks()
            .catch(() => {
                this.addAlert({
                    type: 'error',
                    message: {
                        title: 'Task-storage server offline!',
                        text: 'Run: \' node server.js \' in the project\'s root directory.',
                    },
                    persistent: true,
                });
            })
            .finally(() => {
                this.showToDoLoading = false;
            });
    },
    methods: {
        ...mapMutations('AlertModule', ['addAlert']),
        ...mapActions('TaskModule', ['retriveTasks', 'submitTask', 'deleteTask']),
        processNewTask(data) {
            this.retainTask = true;
            if (!this.validateTask(data)) {
                this.addAlert({
                    type: 'error',
                    message: { title: 'Invalid task' },
                });
                return;
            }
            if (!this.isRequestProcessing) {
                this.submitTask(data)
                    .then(() => {
                        this.addAlert({
                            type: 'info',
                            message: { title: 'Task Added' },
                        });
                        this.retainTask = false;
                    })
                    .catch((error) => {
                        this.addAlert({
                            type: 'error',
                            message: { title: error.message },
                        });
                    })
                    .finally(() => {
                        this.retainTask = true;
                    });
            }
        },
        processDeleteClick(id) {
            this.showDeletingIndicator = true;
            this.deleteTask(id)
                .then(() => {
                    this.addAlert({
                        type: 'info',
                        message: { title: 'Task Deleted' },
                    });
                })
                .catch((error) => {
                    this.showDeletingIndicator = false;
                    this.addAlert({
                        type: 'error',
                        message: { title: error.message },
                    });
                });
        },
        validateTask(task) {
            return task.length > 0;
        },
    },
};
</script>
