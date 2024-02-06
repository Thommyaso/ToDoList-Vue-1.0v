<template>
   <button :class="btnClass" type="button"></button>
</template>

<script>
import './ButtonElement.scss';

export default {
    props: {
        btnClass: String,
    },
};
</script>
