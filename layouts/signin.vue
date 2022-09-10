<template>
  <transition name="layouts" mode="out-in">
    <client-only>
      <div
        lang="en"
        class="flex min-h-screen cursor-default flex-col bg-gray-50 font-inter"
      >
        <AppNavbarSignIn
          class="sticky top-0 z-50 mb-24 flex w-full justify-center bg-white"
        />
        <Nuxt />
      </div>
    </client-only>
  </transition>
</template>

<script>
export default {
  name: 'signin',
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
