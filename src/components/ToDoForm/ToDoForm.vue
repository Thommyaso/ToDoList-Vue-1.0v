<template>
    <form
        class="container__form"
        action=""
    >
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
            @keydown="textareaEvent"
        ></textarea>
        <ToDoButton
            :btnClass="setBtnClass"
            @click="handleSubmitClick"
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
    props: {
        processingTask: Boolean,
        retainTask: Boolean,
    },
    emits: ['onTaskSubmit'],
    data() {
        return {
            textarea: null,
        };
    },
    computed: {
        setBtnClass() {
            if (this.processingTask) {
                return 'btn--loading';
            }
            return 'btn--add';
        },
    },
    updated() {
        if (!this.retainTask) {
            this.$refs.myTextarea.value = '';
        }
    },
    methods: {
        handleSubmitClick() {
            if (!this.processingTask) {
                this.$emit('onTaskSubmit', this.$refs.myTextarea.value);
            }
        },

        textareaEvent(evt) {
            if (evt.key === 'Enter') {
                evt.preventDefault();
                this.handleSubmitClick();
            }
        },
    },
};
</script>
