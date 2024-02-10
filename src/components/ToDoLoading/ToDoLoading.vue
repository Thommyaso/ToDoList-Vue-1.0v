<template>
   <div :class="setClass"></div>
</template>
<script>
import '@/components/ToDoLoading/ToDoLoading.scss';
export default {
    props: ['visible'],
    computed: {
        setClass() {
            if (this.visible) {
                return 'loader--visible';
            }
            return 'loader--hidden';
        },
    },
};
</script>
