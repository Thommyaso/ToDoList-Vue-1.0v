<template>
    <li class="container__listEl">
        <p class="container__paragraph">{{ task }}</p>
        <ButtonConfig
          :class = "btnClass"
          @click="deleteTask"
        >
        </ButtonConfig>
    </li>
</template>

<script>
import './LiEl.scss';
import ButtonConfig from '../ButtonConfig/ButtonConfig.vue';

export default {
    components: {
        ButtonConfig,
    },
    data() {
        return {
            btnClass: 'btn--delete',
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
