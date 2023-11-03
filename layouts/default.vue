<template>
  <transition name="layouts" mode="out-in">
    <!-- <client-only> -->
    <div
      lang="en"
      class="flex min-h-screen flex-col justify-between gap-5 bg-white font-bai"
    >
      <Navbar :categories="categories" :drivers="drivers" />
      <div id="motorsport_top hidden"></div>
      <div>
        <Nuxt
          class="mx-auto max-w-[1320px]"
          keep-alive
          :keep-alive-props="{ exclude: ['article-single'] }"
        />
      </div>
      <Footer />
    </div>
    <!-- </client-only> -->
  </transition>
</template>

<script>
export default {
  name: 'default',
  data: () => ({
    categories: [],
    drivers: {},
  }),
  created() {
    this.$api.series
      .navbarContent(1, this.$dateFns.format(new Date(), 'yyyy'))
      .then((res) => {
        this.categories = res.data.categories
        this.drivers = res.data.drivers
        this.$store.commit('setTeams', res.data.drivers.teams)
        this.$store.commit('setDrivers', res.data.drivers.drivers)
      })
    // this.$api.standings
    //   .getDrivers(1, this.$dateFns.format(new Date(), 'yyyy'))
    //   .then((res) => {
    //     this.drivers = res.data.data
    //     this.$store.commit('setTeams', res.data.data.teams)
    //     this.$store.commit('setDrivers', res.data.data.drivers)
    //   })
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
