<template>
    <li class="container__listEl">
        <p>{{ task }}</p>
        <Buttons
          :class = "btnClass"
          :text = "btnText"
          @click="deleteTask"
        >
        </Buttons>
    </li>
</template>

<script>
import Buttons from '../Buttons/Buttons.vue';

export default {
  components: {
    Buttons
  },
  data(){
    return {
      btnClass: 'btn--delete',
      btnText: 'delete'
    }
  },
  props: ['task'],
  methods: {
    deleteTask(){
        this.$emit('deleteClicked')
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