<template>
    <form class="container__form" action="">
          <textarea ref="myTextarea" name="textarea" class="container__textarea" id="" cols="30" rows="10"></textarea>
          <button @click="newTask" class="container__btn" type="button">Add</button>
      </form>
</template>

<script>
export default {
    mounted(){
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        newTask() {
            this.$emit('submitEvent', this.textarea.value)
            this.textarea.value = ''
        }
    }
}
</script>