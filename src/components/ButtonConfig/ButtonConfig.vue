<template>
   <button :class="btnClass" type="button"></button>
</template>

<script>
import './ButtonConfig.scss';

export default {
    props: {
        btnClass: String,
    },
};
</script>
