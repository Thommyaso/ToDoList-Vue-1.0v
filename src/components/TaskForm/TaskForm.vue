<template>
    <form class="container__form" action="">
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
        ></textarea>
        <ButtonConfig
            class="btn--add"
            :isDisabled="disableBtn"
            @click = "newTask"
        />
    </form>
</template>

<script>
import './TaskForm.scss';
import ButtonConfig from '../ButtonConfig/ButtonConfig.vue';

export default {
    components: {
        ButtonConfig,
    },
    props: {
        disableBtn: Boolean,
    },
    mounted() {
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        newTask() {
            this.$emit('onTask', this.textarea.value);
        },
    },
};
</script>
