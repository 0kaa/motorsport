<template>
    <h3 class="underline-title"><span>{{title}}</span></h3>
</template>

<script>
export default {
    name: 'InlineTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
