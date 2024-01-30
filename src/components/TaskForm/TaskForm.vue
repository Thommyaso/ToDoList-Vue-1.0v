<template>
    <form class="container__form" action="">
        <textarea ref="myTextarea" name="textarea" class="container__textarea" id="" cols="30" rows="10"></textarea>
        <ButtonConfig
            :class = "btnClass"
            @click = "newTask"
        >
        </ButtonConfig>
    </form>
</template>

<script>
import './TaskForm.scss';
import ButtonConfig from '../ButtonConfig/ButtonConfig.vue';

export default {
    components: {
        ButtonConfig,
    },
    data() {
        return {
            btnClass: 'btn--add',
        };
    },
    mounted() {
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        newTask() {
            this.$emit('submitEvent', this.textarea.value);
            this.textarea.value = '';
        },
    },
};
</script>
