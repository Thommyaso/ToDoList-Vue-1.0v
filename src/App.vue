<template>
  <div class="container" id="listContainer">
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
    methods: {
        handleTask(data) {
            taskStore.submitTask(data);
        },
    }};

</script>
