<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div :class="setClass"></div>
</template>
<script>
import './Loader.scss';
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
