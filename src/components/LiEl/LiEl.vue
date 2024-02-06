<template>
    <li class="container__listEl">
        <p class="container__paragraph">{{ task }}</p>
        <ButtonConfig
            :btnClass="setBtnClass"
            @click="deleteTask"
        />
    </li>
</template>

<script>
import './LiEl.scss';
import ButtonConfig from '../ButtonConfig/ButtonConfig.vue';

export default {
    components: {
        ButtonConfig,
    },
    computed: {
        setBtnClass() {
            if (this.deleteProcessing && this.spinner) {
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
        if (this.deleteProcessing && !this.spinner) {
            this.deleteProcessing = false;
        }
    },
    props: {
        task: String,
        spinner: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        deleteTask() {
            if (!this.deleteProcessing) {
                this.deleteProcessing = true;
                this.$emit('deleteClicked');
            }
        },
    },
};
</script>
