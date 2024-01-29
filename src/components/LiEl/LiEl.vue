<template>
    <li class="container__listEl">
        <p>{{ task }}</p>
        <button class="btn-delete" type="button" @click="deleteTask">Delete</button>
    </li>
</template>

<script>
export default {
  props: ['id','task'],
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