<template>
   <button :class="setBtnClass" type="button"></button>
</template>

<script>
import '@/components/ButtonElement/ButtonElement.scss';

export default {
    props: {
        btnClass: [Array, String],
    },

    computed: {
        setBtnClass() {
            if (this.btnClass) {
                return ['btn', this.btnClass];
            }
            return 'btn';
        },
    },
};
</script>
