<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
    :class="setClass">{{ message }}</div>
</template>
<script>
import './Alert.scss';

export default {
    props: {
        message: String,
        type: String,
    },
    mounted() {
        setTimeout(() => {
            this.$emit('removeAlert');
        }, 3000);
    },
    computed: {
        setClass() {
            if (this.type === 'error') {
                return 'alert--error';
            } else if (this.type === 'info') {
                return 'alert--info';
            } else if (this.type === 'warning') {
                return 'alert--warning';
            }
            return 'alert--hidden';
        },
    },
};
</script>
