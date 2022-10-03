<template>
  <div>
    <h1>
      {{ pageNotFound }}
    </h1>

    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script>
export default {
  name: '404',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
