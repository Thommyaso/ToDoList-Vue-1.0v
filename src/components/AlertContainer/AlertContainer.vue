<template>
    <div class="alertContainer">
        <AlertElement
          v-for="alert in alerts"
          :message="alert.message"
          :key="alert.id"
          :type="alert.type"
          @removeAlertElement="removeAlert(alert.id)"
          ></AlertElement>
    </div>
</template>
<script>
import './AlertContainer.scss';
import AlertElement from '../AlertElement/AlertElement.vue';
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        AlertElement,
    },
    computed: {
        ...mapState({
            alerts: (state) => state.AlertModule.alerts,
        }),
    },
    methods: {
        ...mapMutations('AlertModule', ['removeAlert']),
    },
};
</script>
