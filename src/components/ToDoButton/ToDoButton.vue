<template>
    <button
        :class="setBtnClass"
        type="button"
    ></button>
</template>

<script>
import '@/components/ToDoButton/ToDoButton.scss';

export default {
    props: {
        btnClass: {
            type: [Array, String],
            default: null,
        },
    },

    computed: {
        setBtnClass() {
            return this.btnClass ? ['btn', this.btnClass] : 'btn';
        },
    },
};
</script>
