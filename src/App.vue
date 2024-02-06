<template>
  <div class="container" id="listContainer">
    <Loader
        :visible="showLoader"
    />
      <ul class="container__list">
        <LiEl
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task.task"
          @deleteClicked = "handleDelete(task.id)"
          :spinner="spinner"
        />
      </ul>
      <TaskForm
        @onTask = "handleTask"
        :processingTask="this.taskStore.requestProcessing"
      />
      <div>
        <Alert
        v-for="alert in alertStore.alerts"
        :message="alert.message"
        :key="alert.key"
        :type="alert.type"
        @removeAlert="this.alertStore.removeAlert()"
        ></Alert>
      </div>
  </div>
</template>

<script>
import Loader from './components/Loader/Loader.vue';
import LiEl from './components/LiEl/LiEl.vue';
import TaskForm from './components/TaskForm/TaskForm.vue';
import Alert from './components/Alert/Alert.vue';
import {taskStore} from './stores/TaskStore';
import {alertStore} from './stores/AlertStore';

export default {
    data() {
        return {
            taskStore,
            alertStore,
            showLoader: false,
            spinner: false,
        };
    },
    components: {
        LiEl,
        TaskForm,
        Alert,
        Loader,
    },
    mounted() {
        this.showLoader = true;
        this.taskStore.retriveTasks()
            .catch((error) => {
                this.alertStore.setAlert({
                    type: 'error',
                    message: error.message,
                    key: this.alertStore.generateKey(),
                });
            })
            .finally(() => {
                this.showLoader = false;
            });
    },
    methods: {
        handleTask(data) {
            if (!taskStore.validateTask(data.value)) {
                this.alertStore.setAlert({
                    type: 'error',
                    message: 'Invalid task',
                    key: this.alertStore.generateKey(),
                });
                return;
            }
            if (!taskStore.requestProcessing) {
                taskStore.submitTask(data.value)
                    .then(() => {
                        this.alertStore.setAlert({
                            type: 'info',
                            message: 'Task Added',
                            key: this.alertStore.generateKey(),
                        });
                        data.value = '';
                    })
                    .catch((error) => {
                        this.alertStore.setAlert({
                            type: 'error',
                            message: error.message,
                            key: this.alertStore.generateKey(),
                        });
                    });
            }
        },
        handleDelete(id) {
            this.spinner = true;
            taskStore.deleteTask(id)
                .then(() => {
                    this.alertStore.setAlert({
                        type: 'info',
                        message: 'Task Deleted',
                        key: this.alertStore.generateKey(),
                    });
                })
                .catch((error) => {
                    this.spinner = false;
                    this.alertStore.setAlert({
                        type: 'error',
                        message: error.message,
                        key: this.alertStore.generateKey(),
                    });
                });
        },
    }};
</script>
