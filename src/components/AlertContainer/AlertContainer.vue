<template>
    <div class="alertContainer">
        <AlertElement
          v-for="alert in alertStore.alerts"
          :message="alert.message"
          :key="alert.key"
          :type="alert.type"
          @removeAlertElement="this.alertStore.removeAlertElement()"
          ></AlertElement>
    </div>
</template>
<script>
import './AlertContainer.scss';
import AlertElement from '../AlertElement/AlertElement.vue';

export default {
    props: {
        alertStore: Object,

    },
    components: {
        AlertElement,
    },
};
</script>
