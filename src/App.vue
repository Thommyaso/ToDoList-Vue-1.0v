<template>
  <div class="container" id="listContainer">
      <ul class="container__list">
        <LiEl
          v-for="task in tasks"
          :key="task.id"
          :task="task.task"
          @deleteClicked = "deleteTask(task.id)"
        >
        </LiEl>
      </ul>
      <Form
        @submitEvent = "submitTask"
      >
      </Form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import LiEl from './components/LiEl/LiEl.vue';
import Form from './components/Form/Form.vue'

export default {
  components: {
    LiEl,
    Form
  },
  data() {
    return {
      tasks: [
        {
            id:'34ec12bd-d5a1-4b55-a66f-228ba2b4e0c4',
            task: 'go do this'
        },
        {
            id:'71b22a8c-82ee-484a-89a5-72242d9905f5',
            task: 'go do that'
        },
        {
            id:'87a28615-49e0-4789-8835-332b4d021ffa',
            task: 'uauauiua'
        }
      ],
    }
  },
  methods: {
    submitTask(data){
      this.tasks.push({
        id: uuidv4(),
        task: data
      })
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task =>task.id !== id)
    },
  }
}
</script>