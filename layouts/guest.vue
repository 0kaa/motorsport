<template>
  <transition name="layouts" mode="out-in">

    <div lang="en" class="flex flex-col h-screen pt-24 cursor-default bg-gray-50 font-bai">
      <Nuxt />
    </div>

  </transition>
</template>

<script>
export default {
  name: 'guest',
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
