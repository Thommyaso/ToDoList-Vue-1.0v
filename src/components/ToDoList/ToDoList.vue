<template>
    <li class="container__listEl">
        <p class="container__paragraph">{{ task }}</p>
        <ToDoButton
            :btnClass="setBtnClass"
            @click="handleDeleteClick"
        />
    </li>
</template>

<script>
import '@/components/ToDoList/ToDoList.scss';
import ToDoButton from '@/components/ToDoButton/ToDoButton.vue';

export default {
    components: {
        ToDoButton,
    },
    computed: {
        setBtnClass() {
            if (this.deleteProcessing && this.showDeletingIndicator) {
                return 'btn--loading';
            }
            return 'btn--delete';
        },
    },
    data() {
        return {
            deleteProcessing: false,
        };
    },
    updated() {
        if (this.deleteProcessing && !this.showDeletingIndicator) {
            this.deleteProcessing = false;
        }
    },
    props: {
        task: String,
        showDeletingIndicator: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleDeleteClick() {
            if (!this.deleteProcessing) {
                this.deleteProcessing = true;
                this.$emit('deleteClicked');
            }
        },
    },
};
</script>
