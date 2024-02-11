<template>
    <form class="container__form" action="">
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
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
        this.textarea = this.$refs.myTextarea;
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' && document.activeElement === this.textarea) {
                event.preventDefault();
                this.handleSubmitClick();
            }
        });
    },
    methods: {
        handleSubmitClick() {
            if (!this.processingTask) {
                this.$emit('onTask', this.textarea.value);
            }
        },
    },
};
</script>
