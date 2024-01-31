<template>
  <div class="container" id="listContainer">
    <MessageConfig
      :message="this.taskStore.message"
      :classes="alertClasses"
    ></MessageConfig>
      <ul class="container__list">
        <LiEl
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task.task"
          @deleteClicked = "handleDelete(task.id)"
        >
        </LiEl>
      </ul>
      <TaskForm
        @onTask = "handleTask"
      >
      </TaskForm>
  </div>
</template>

<script>
import MessageConfig from './components/MessageConfig/MessageConfig.vue';
import LiEl from './components/LiEl/LiEl.vue';
import TaskForm from './components/TaskForm/TaskForm.vue';
import {taskStore} from './stores/TaskStore';

export default {
    data() {
        return {taskStore};
    },
    components: {
        LiEl,
        TaskForm,
        MessageConfig,
    },
    computed: {
        alertClasses() {
            return {
                'alert--visible': this.taskStore.displayMessage,
                'alert--hidden': !this.taskStore.displayMessage,
            };
        },
    },
    mounted() {
        this.taskStore.retriveTasks();
    },
    methods: {
        handleTask(data) {
            taskStore.resetAlert();
            taskStore.submitTask(data);
        },
        handleDelete(id) {
            taskStore.resetAlert();
            taskStore.deleteTask(id);
        },
    }};
</script>

