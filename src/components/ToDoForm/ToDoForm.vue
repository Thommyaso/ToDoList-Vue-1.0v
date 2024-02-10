<template>
    <form class="container__form" action="">
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
            onkeydown="if(event.keyCode===13){event.preventDefault();}"
        ></textarea>
        <ToDoButton
            :btnClass="setBtnClass"
            @click = "handleSubmitClick"
        />
    </form>
</template>

<script>
import '@/components/ToDoForm/ToDoForm.scss';
import ToDoButton from '@/components/ToDoButton/ToDoButton.vue';

export default {
    components: {
        ToDoButton,
    },
    computed: {
        setBtnClass() {
            if (this.processingTask) {
                return 'btn--loading';
            }
            return 'btn--add';
        },
    },
    props: {
        processingTask: Boolean,
        retainTask: Boolean,
    },
    updated() {
        if (!this.retainTask) {
            this.textarea.value = '';
        }
    },
    mounted() {
        document.addEventListener('keyup', this.handleGlobalKeyUp);
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        handleSubmitClick() {
            if (!this.processingTask) {
                this.$emit('onTask', this.textarea.value, this.validateTask());
            }
        },
        validateTask() {
            const task = this.textarea.value;
            return task.length > 0;
        },
        handleGlobalKeyUp(event) {
            if (event.keyCode === 13) {
                this.handleSubmitClick();
            }
        },
    },
};
</script>
