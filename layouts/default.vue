<template>
  <transition name="layouts" mode="out-in">
    <client-only>
      <div
        lang="en"
        class="flex flex-col justify-between min-h-screen gap-5 bg-white cursor-default font-bai"
      >
        <div>
          <Navbar />
          <Nuxt />
        </div>
      </div>
    </client-only>
  </transition>
</template>

<script>
export default {
  name: 'default',
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
