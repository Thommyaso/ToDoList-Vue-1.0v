<template>
    <AlertContainer/>
    <div class="container">
        <LoadingIndicator
            v-if="showLoadingIndicator"
            :visible="showLoadingIndicator"
        />
        <ul class="container__list" v-else>
            <ListElement
                v-for="task in tasks"
                :key="task.id"
                :task="task.task"
                @deleteClicked = "processDeleteClick(task.id)"
                :showDeletingIndicator="showDeletingIndicator"
            />
        </ul>
        <TaskForm
            @onTask = "processNewTask"
            :processingTask="requestProcessing"
            :retainTask="retainTask"
        />
    </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator.vue';
import ListElement from '@/components/ListElement/ListElement.vue';
import TaskForm from '@/components/TaskForm/TaskForm.vue';
import AlertContainer from '@/components/AlertContainer/AlertContainer.vue';
import {mapActions, mapState, mapMutations} from 'vuex';

export default {
    data() {
        return {
            showLoadingIndicator: false,
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
        ListElement,
        TaskForm,
        LoadingIndicator,
        AlertContainer,
    },
    mounted() {
        this.showLoadingIndicator = true;
        this.retriveTasks()
            .catch((error) => {
                this.addAlert({
                    type: 'error',
                    message: error.message,
                });
            })
            .finally(() => {
                this.showLoadingIndicator = false;
            });
    },
    methods: {
        ...mapMutations('AlertModule', ['addAlert']),
        ...mapActions('TaskModule', ['retriveTasks', 'submitTask', 'deleteTask']),
        processNewTask(data, validation) {
            this.retainTask = true;
            if (!validation) {
                this.addAlert({
                    type: 'error',
                    message: 'Invalid task',
                });
                return;
            }
            if (!this.requestProcessing) {
                this.submitTask(data)
                    .then(() => {
                        this.addAlert({
                            type: 'info',
                            message: 'Task Added',
                        });
                        this.retainTask = false;
                    })
                    .catch((error) => {
                        this.addAlert({
                            type: 'error',
                            message: error.message,
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
                        message: 'Task Deleted',
                    });
                })
                .catch((error) => {
                    this.showDeletingIndicator = false;
                    this.addAlert({
                        type: 'error',
                        message: error.message,
                    });
                });
        },
    }};
</script>
