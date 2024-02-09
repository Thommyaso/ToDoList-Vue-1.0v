
<template>
    <AlertContainerView/>
    <router-view></router-view>
</template>
<script>
import AlertContainerView from '@/views/AlertContainerView.vue';

export default {
    components: {
        AlertContainerView,
    },
};
</script>
