<template>
  <transition name="layouts" mode="out-in">
    <client-only>
      <div
        lang="en"
        class="flex min-h-screen cursor-default flex-col justify-between gap-5 bg-gray-50 font-inter"
      >
        <AppNavbarSignUp
          class="sticky top-0 z-50 flex w-full justify-center bg-white"
        />
        <Nuxt />

        <p class="w-full py-6 text-center text-md font-normal text-gray-500">
          By signing up, you agree to our
          <span class="cursor-pointer font-medium text-violet-600"
            >Terms of service</span
          >
          and
          <span class="cursor-pointer font-medium text-violet-600"
            >Privacy Policy</span
          >.
        </p>
      </div>
    </client-only>
  </transition>
</template>

<script>
export default {
  name: 'signup',
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
