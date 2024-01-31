<template>
   <p :class="classes">{{ message }}</p>
</template>
<script>
import './MessageConfig.scss';
export default {
    props: ['classes', 'message'],
};
</script>
