<template>
    <div
    :class="setClass">{{ message }}</div>
</template>
<script>
import './AlertElement.scss';

export default {
    props: {
        message: String,
        type: String,
    },
    mounted() {
        setTimeout(() => {
            this.$emit('removeAlertElement');
        }, 3000);
    },
    computed: {
        setClass() {
            if (this.type === 'error') {
                return 'alert--error';
            } else if (this.type === 'info') {
                return 'alert--info';
            }
            return 'alert--hidden';
        },
    },
};
</script>
