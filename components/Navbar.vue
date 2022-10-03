<template>
  <div>
    <div
      class="flex items-center justify-between w-full px-6 py-5 mb-1 bg-dark"
    >
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" />
      </nuxt-link>
      <div class="flex items-center gap-8">
        <nuxt-link
          class="text-xl font-bold text-white uppercase"
          v-for="(category, i) in categories"
          :key="i"
          :to="{ name: 'category', params: { category: category.slug } }"
          v-text="category.title"
        />
        <button>
          <img src="/dark.png" alt="search" />
        </button>
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
    <div class="navbar-slick relative bg-dark px-3 pr-4 text-[#F0F0F0]">
      <slick ref="navbar" :options="slickOptions">
        <div
          class="!flex !w-auto cursor-pointer gap-2 border-l-[4px] px-2 py-2 text-xs font-semibold"
          :style="`border-color:${driver.team.color}`"
          v-for="(driver, i) in drivers.drivers.slice(0, 20)"
          :key="i"
        >
          <span v-text="driver.position" />
          <span v-text="driver.driver.title" />
          <span v-text="driver.points" />
        </div>
      </slick>

      <button class="absolute text-white nav-next-btn right-5 top-1">
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    slickOptions: {
      slidesToShow: 7,
      infinite: false,
      swipeToSlide: true,
      nextArrow: '.nav-next-btn',
      prevArrow: false,
      autoplay: true,
      autoplaySpeed: 2000,
      // Any other options that can be got from plugin documentation
    },
  }),

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    drivers: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style>
.navbar-slick .slick-slide {
  margin: 0 !important;
  height: 100%;
}

/* the parent */
.navbar-slick .slick-list {
  margin-right: 30px !important;
}

.navbar-slick .slick-disabled {
  @apply cursor-not-allowed opacity-30;
}
</style>
