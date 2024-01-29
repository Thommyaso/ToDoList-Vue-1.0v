<template>
  <div class="container" id="listContainer">
      <ul class="container__list">
        <li class="container__listEl" v-for="task in this.tasks">
          <p>{{ task.task }}</p>
          <button class="btn-delete" type="button" @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <form class="container__form" action="">
          <textarea ref="myTextarea" name="textarea" class="container__textarea" id="" cols="30" rows="10"></textarea>
          <button @click="add" class="container__btn" type="button">Add</button>
      </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
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
  mounted(){
    console.log(this.tasks)
    this.textarea = this.$refs.myTextarea;
  },

  methods: {
    add(){
      this.tasks.push({
        id: uuidv4(),
        task: this.textarea.value
      })
      this.textarea.value = ''
    },
    deleteTask(id){
      console.log(uuidv4())
      this.tasks = this.tasks.filter(task =>task.id !== id)
    }
  }
}
</script>

<style>
.container__listEl{
  display: flex;
  margin-bottom: 0.5rem;
}
</style>