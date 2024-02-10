<template>
    <div class="AlertContainer">
        <ToDoAlert
            v-for="alert in alerts"
            :message="alert.message"
            :key="alert.id"
            :type="alert.type"
            :persistent="alert.persistent"
            @removeToDoAlert="removeAlert(alert.id)"
        />
    </div>
</template>
<script>
import ToDoAlert from '@/components/ToDoAlert/ToDoAlert.vue';
import {mapState, mapMutations} from 'vuex';

export default {
    components: {
        ToDoAlert,
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
