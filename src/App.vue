
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
          :disableBtn = "taskStore.requestProcessing"
        />
      </ul>
      <TaskForm
        @onTask = "handleTask"
        :disableBtn = "taskStore.requestProcessing"
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
        };
    },
    components: {
        LiEl,
        TaskForm,
        Alert,
        Loader,
    },
    computed: {
        alertClasses() {
            return {
                'alert--visible': this.taskStore.alert.display,
                'alert--hidden': !this.taskStore.alert.display,
                'alert--error': this.taskStore.alert.display && this.taskStore.alert.error,
                'alert--info': this.taskStore.alert.display && !this.taskStore.alert.error,
            };
        },
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
            if (!taskStore.validateTask(data)) {
                this.alertStore.setAlert({
                    type: 'error',
                    message: 'Invalid task',
                    key: this.alertStore.generateKey(),
                });
                return;
            }
            if (!taskStore.requestProcessing) {
                taskStore.requestProcessing = true;
                taskStore.submitTask(data)
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
            if (!taskStore.requestProcessing) {
                taskStore.requestProcessing = true;
                taskStore.deleteTask(id)
                    .catch((error) => {
                        this.alertStore.setAlert({
                            type: 'error',
                            message: error.message,
                            key: this.alertStore.generateKey(),
                        });
                    });
            }
        },
    }};
</script>

./components/Loader/Loader.vue
