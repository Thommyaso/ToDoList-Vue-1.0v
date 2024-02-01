<template>
    <li class="container__listEl">
        <p class="container__paragraph">{{ task }}</p>
        <ButtonConfig
            class="btn--delete"
            @click="deleteTask"
            :isDisabled="disableBtn"
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
    props: {
        task: String,
        disableBtn: Boolean,
    },
    methods: {
        deleteTask() {
            this.$emit('deleteClicked');
        },
    },
};
</script>
