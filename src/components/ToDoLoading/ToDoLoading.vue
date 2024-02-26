<template>
    <div :class="setClass"></div>
</template>
<script>
import '@/components/ToDoLoading/ToDoLoading.scss';
export default {
    props: {visible: {type: String, default: null}},
    computed: {
        setClass() {
            return this.visible ? 'loader--visible' : 'loader--hidden';
        },
    },
};
</script>
