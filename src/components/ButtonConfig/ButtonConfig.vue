<template>
   <button type="button" :class="classes" :disabled="isDisabled"></button>
</template>

<script>
import './ButtonConfig.scss';

export default {
    props: {
        btnClass: String,
        isDisabled: Boolean,
    },
    computed: {
        classes() {
            return {
                'btn--disabled': this.isDisabled,
            };
        },
    },
};
</script>
