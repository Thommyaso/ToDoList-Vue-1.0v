<template>
    <div class="alertContainer">
        <AlertElement
          v-for="alert in alerts"
          :message="alert.message"
          :key="alert.key"
          :type="alert.type"
          @removeAlertElement="processRemove"
          ></AlertElement>
    </div>
</template>
<script>
import './AlertContainer.scss';
import AlertElement from '../AlertElement/AlertElement.vue';

export default {
    props: {
        alerts: Array,
        processRemove: Function,
    },
    components: {
        AlertElement,
    },
};
</script>
