<template>
   <!-- <p :class="classes">{{ message }}</p> -->
   <div :class="setClass"></div>
</template>
<script>
import './Loader.scss';
export default {
    props: ['visible'], /* 'classes', 'message' */
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
