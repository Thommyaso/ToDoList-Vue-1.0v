<template>
    <form class="container__form" action="">
        <textarea
            ref="myTextarea"
            name="textarea"
            class="container__textarea"
            placeholder="Type-in task..."
        ></textarea>
        <ButtonConfig
            :btnClass="setBtnClass"
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
    computed: {
        setBtnClass() {
            if (this.processingTask) {
                return 'btn--loading';
            }
            return 'btn--add';
        },
    },
    props: {
        disableBtn: Boolean,
        processingTask: Boolean,
    },
    mounted() {
        this.textarea = this.$refs.myTextarea;
    },
    methods: {
        newTask() {
            if (!this.processingTask) {
                this.$emit('onTask', this.textarea);
            }
        },
    },
};
</script>
