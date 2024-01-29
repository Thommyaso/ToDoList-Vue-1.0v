<template>
    <button type="button" :class="class">{{ text }}</button>
</template>

<script>
export default {
    props: ['text', 'class']
}
</script>