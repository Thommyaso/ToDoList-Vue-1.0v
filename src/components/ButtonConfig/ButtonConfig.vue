<template>
   <button type="button" :class="btnClass"></button>
</template>

<script>
import './ButtonConfig.scss';

export default {
    props: ['btnClass'],
};
</script>
