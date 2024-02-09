<template>
    <div class="alertContainerView">
        <AlertElement
            v-for="alert in alerts"
            :message="alert.message"
            :key="alert.id"
            :type="alert.type"
            :persistent="alert.persistent"
            @removeAlertElement="removeAlert(alert.id)"
        />
    </div>
</template>
<script>
import AlertElement from '@/components/AlertElement/AlertElement.vue';
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
