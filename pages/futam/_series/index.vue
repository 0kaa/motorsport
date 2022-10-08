<template>
  <NuxtChild />
</template>

<script>
export default {
  middleware: [
    ({ redirect, route }) => {
      redirect('/')
    },
  ],
}
</script>
