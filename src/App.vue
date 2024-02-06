<template>
  <div class="container" id="listContainer">
    <LoadingIndicator
        :visible="showLoadingIndicator"
    />
      <ul class="container__list">
        <ListElement
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task.task"
          @deleteClicked = "processDeleteClick(task.id)"
          :showDeletingIndicator="showDeletingIndicator"
        />
      </ul>
      <TaskForm
        @onTask = "processNewTask"
        :processingTask="this.taskStore.requestProcessing"
      />
      <div>
        <AlertElement
        v-for="alert in alertStore.alerts"
        :message="alert.message"
        :key="alert.key"
        :type="alert.type"
        @removeAlertElement="this.alertStore.removeAlertElement()"
        ></AlertElement>
      </div>
  </div>
</template>

<script>
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator.vue';
import ListElement from './components/ListElement/ListElement.vue';
import TaskForm from './components/TaskForm/TaskForm.vue';
import AlertElement from './components/AlertElement/AlertElement.vue';
import {taskStore} from './stores/TaskStore';
import {alertStore} from './stores/AlertStore';

export default {
    data() {
        return {
            taskStore,
            alertStore,
            showLoadingIndicator: false,
            showDeletingIndicator: false,
        };
    },
    components: {
        ListElement,
        TaskForm,
        AlertElement,
        LoadingIndicator,
    },
    mounted() {
        this.showLoadingIndicator = true;
        this.taskStore.retriveTasks()
            .catch((error) => {
                this.alertStore.setAlertElement({
                    type: 'error',
                    message: error.message,
                    key: this.alertStore.generateKey(),
                });
            })
            .finally(() => {
                this.showLoadingIndicator = false;
            });
    },
    methods: {
        processNewTask(data) {
            if (!taskStore.validateTask(data.value)) {
                this.alertStore.setAlertElement({
                    type: 'error',
                    message: 'Invalid task',
                    key: this.alertStore.generateKey(),
                });
                return;
            }
            if (!taskStore.requestProcessing) {
                taskStore.submitTask(data.value)
                    .then(() => {
                        this.alertStore.setAlertElement({
                            type: 'info',
                            message: 'Task Added',
                            key: this.alertStore.generateKey(),
                        });
                        data.value = '';
                    })
                    .catch((error) => {
                        this.alertStore.setAlertElement({
                            type: 'error',
                            message: error.message,
                            key: this.alertStore.generateKey(),
                        });
                    });
            }
        },
        processDeleteClick(id) {
            this.showDeletingIndicator = true;
            taskStore.deleteTask(id)
                .then(() => {
                    this.alertStore.setAlertElement({
                        type: 'info',
                        message: 'Task Deleted',
                        key: this.alertStore.generateKey(),
                    });
                })
                .catch((error) => {
                    this.showDeletingIndicator = false;
                    this.alertStore.setAlertElement({
                        type: 'error',
                        message: error.message,
                        key: this.alertStore.generateKey(),
                    });
                });
        },
    }};
</script>
