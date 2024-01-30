<template>
   <button type="button" :class="btnClass">{{ text }}</button>
</template>

<script>
export default {
    props: ['text', 'btnClass'],
};
</script>
