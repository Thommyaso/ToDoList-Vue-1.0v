<template>
  <div class="container" id="listContainer">
    <p
      class="alert"
      :class="alertClasses"
    >{{ this.taskStore.message }}
    </p>
      <ul class="container__list">
        <LiEl
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task.task"
          @deleteClicked = "taskStore.deleteTask(task.id)"
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
    },
    computed: {
        alertClasses() {
            return {
                'alert--active': this.taskStore.displayMessage,
                'alert--hidden': !this.taskStore.displayMessage,
            };
        },
    },
    mounted() {
        this.taskStore.retriveTasks();
    },
    methods: {
        handleTask(data) {
            taskStore.submitTask(data);
        },
    }};

</script>
<style>
.alert--hidden{
  visibility: hidden;
}
.alert--active{
  visibility: visible;
  color: red;
}
</style>
