<template>
    <form class="container__form" action="">
        <textarea ref="myTextarea" name="textarea" class="container__textarea" id="" cols="30" rows="10"></textarea>
        <Buttons
            :class = "btnClass"
            :text = "btnText"
            @click = "newTask"
        >
        </Buttons>
    </form>
</template>

<script>
import Buttons from '../Buttons/Buttons.vue'

export default {
    components: {
        Buttons
    },
    data(){
        return {
            btnClass: 'btn--add',
            btnText: 'Add'
        }
    },
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