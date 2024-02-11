<template>
    <div class="container">
        <ToDoLoading
            v-if="showToDoLoading"
            :visible="showToDoLoading"
        />
        <ul class="container__list" v-else>
            <ToDoList
                v-for="task in tasks"
                :key="task.id"
                :task="task.task"
                @deleteClicked = "processDeleteClick(task.id)"
                :showDeletingIndicator="showDeletingIndicator"
            />
        </ul>
        <ToDoForm
            @onTask = "processNewTask"
            :processingTask="requestProcessing"
            :retainTask="retainTask"
        />
    </div>
</template>

<script>
import ToDoLoading from '@/components/ToDoLoading/ToDoLoading.vue';
import ToDoList from '@/components/ToDoList/ToDoList.vue';
import ToDoForm from '@/components/ToDoForm/ToDoForm.vue';
import {mapActions, mapState, mapMutations} from 'vuex';

export default {
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
            requestProcessing: (state) => state.TaskModule.requestProcessing,
        }),
    },
    components: {
        ToDoList,
        ToDoForm,
        ToDoLoading,
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
                    message: {title: 'Invalid task'},
                });
                return;
            }
            if (!this.requestProcessing) {
                this.submitTask(data)
                    .then(() => {
                        this.addAlert({
                            type: 'info',
                            message: {title: 'Task Added'},
                        });
                        this.retainTask = false;
                    })
                    .catch((error) => {
                        this.addAlert({
                            type: 'error',
                            message: {title: error.message},
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
                        message: {title: 'Task Deleted'},
                    });
                })
                .catch((error) => {
                    this.showDeletingIndicator = false;
                    this.addAlert({
                        type: 'error',
                        message: {title: error.message},
                    });
                });
        },
        validateTask(task) {
            return task.length > 0;
        },
    }};
</script>
