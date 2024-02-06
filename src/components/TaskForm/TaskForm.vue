<template>
    <form class="container__form" action="">
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
        ></textarea>
        <ButtonElement
            :btnClass="setBtnClass"
            @click = "handleSubmitClick"
        />
    </form>
</template>

<script>
import './TaskForm.scss';
import ButtonElement from '../ButtonElement/ButtonElement.vue';

export default {
    components: {
        ButtonElement,
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
    },
    mounted() {
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        handleSubmitClick() {
            if (!this.processingTask) {
                this.$emit('onTask', this.textarea, this.validateTask());
            }
        },
        validateTask() {
            const task = this.textarea.value;
            return task.length > 0;
        },
    },
};
</script>
