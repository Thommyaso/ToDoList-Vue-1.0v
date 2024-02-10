
<template>
    <AlertContainer/>
    <router-view></router-view>
</template>
<script>
import AlertContainer from '@/views/AlertContainer.vue';

export default {
    components: {
        AlertContainer,
    },
};
</script>
