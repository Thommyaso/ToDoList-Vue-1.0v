<template>
    <AlertContainer
        :alerts="alerts"
        :processRemove="removeAlert"
    />
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
        };
    },
    computed: {
        ...mapState({
            alerts: (state) => state.AlertModule.alerts,
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
                    key: this.generateKey(),
                });
            })
            .finally(() => {
                this.showLoadingIndicator = false;
            });
    },
    methods: {
        ...mapMutations('AlertModule', ['addAlert', 'removeAlert']),
        ...mapActions('TaskModule', ['retriveTasks', 'submitTask', 'deleteTask']),
        ...mapActions('AlertModule', ['generateKey']),
        processNewTask(data, validation) {
            if (!validation) {
                this.addAlert({
                    type: 'error',
                    message: 'Invalid task',
                    key: this.generateKey(),
                });
                return;
            }
            if (!this.requestProcessing) {
                this.submitTask(data.value)
                    .then(() => {
                        this.addAlert({
                            type: 'info',
                            message: 'Task Added',
                            key: this.generateKey(),
                        });
                        data.value = '';
                    })
                    .catch((error) => {
                        this.addAlert({
                            type: 'error',
                            message: error.message,
                            key: this.generateKey(),
                        });
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
                        key: this.generateKey(),
                    });
                })
                .catch((error) => {
                    this.showDeletingIndicator = false;
                    this.addAlert({
                        type: 'error',
                        message: error.message,
                        key: this.generateKey(),
                    });
                });
        },
    }};
</script>
