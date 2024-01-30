<template>
    <li class="container__listEl">
        <p>{{ task }}</p>
        <ButtonConfig
          :class = "btnClass"
          :text = "btnText"
          @click="deleteTask"
        >
        </ButtonConfig>
    </li>
</template>

<script>
import ButtonConfig from '../ButtonConfig/ButtonConfig.vue';

export default {
    components: {
        ButtonConfig,
    },
    data() {
        return {
            btnClass: 'btn--delete',
            btnText: 'delete',
        };
    },
    props: ['task'],
    methods: {
        deleteTask() {
            this.$emit('deleteClicked');
        },
    },
};
</script>

<style>
    .container__listEl{
    display: flex;
    margin-bottom: 0.5rem;
    }
</style>
