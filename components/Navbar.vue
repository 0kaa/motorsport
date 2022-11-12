<template>
  <div>
    <Search
      v-if="searchModal"
      @close="searchModal = false"
      @searchSubmit="searchSubmit"
    />
    <div
      class="flex items-center justify-between w-full px-6 py-5 mb-1 bg-dark"
    >
      <nuxt-link to="/" class="max-w-[180px] xl:max-w-[240px]">
        <img src="/logo.png" alt="logo" />
      </nuxt-link>
      <button class="text-white lg:hidden" @click="nav = true">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class="fixed top-0 left-0 flex items-center gap-8 z-90 lg:static lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent"
        :class="{
          'h-full w-full flex-col bg-dark py-10 opacity-95': nav,
          'left-full': !nav,
        }"
        @click="nav = false"
      >
        <button
          v-if="nav"
          @click="nav = false"
          class="absolute flex items-center justify-center w-10 h-10 text-black bg-white rounded-full top-3 right-3 lg:hidden"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <template v-if="categories && categories.length">
          <nuxt-link
            class="text-xl font-bold text-white uppercase"
            v-for="(category, i) in categories"
            :key="i"
            :to="{ name: 'category', params: { category: category.slug } }"
            v-text="category.title"
          />
        </template>
        <!-- <button>
          <img src="/dark.png" alt="search" />
        </button> -->
        <button @click="searchModal = true">
          <img src="/search.png" alt="search" />
        </button>
      </div>
    </div>
    <div
      class="navbar-slick relative max-h-[35px] overflow-hidden bg-dark px-3 pr-4 text-[#F0F0F0]"
      v-if="drivers && Object.keys(drivers).length"
    >
      <slick ref="navbar" :options="slickOptions">
        <div v-for="(driver, i) in drivers.drivers.slice(0, 20)" :key="'d' + i">
          <div
            class="!flex !w-auto cursor-pointer gap-2 border-l-[4px] px-2 py-2 text-xs font-semibold"
            :style="`border-color:${driver.team.color}`"
          >
            <span v-text="driver.position + '.'" />
            <span v-text="driver.driver.title" />
            <span> - </span>
            <span v-text="driver.points + ' pont'" />
          </div>
        </div>
        <div v-for="(team, i) in drivers.teams.slice(0, 20)" :key="'t' + i">
          <div
            class="!flex !w-auto cursor-pointer gap-2 border-l-[4px] px-2 py-2 text-xs font-semibold"
            :style="`border-color:${team.team.color}`"
          >
            <span v-text="team.position + '.'" />
            <span v-text="team.team.title" />
            <span> - </span>
            <span v-text="team.points + ' pont'" />
          </div>
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
    nav: false,
    slickOptions: {
      slidesToShow: 7,
      infinite: true,
      swipeToSlide: true,
      nextArrow: '.nav-next-btn',
      prevArrow: false,

      responsive: [
        {
          breakpoint: 1480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      // Any other options that can be got from plugin documentation
    },
    searchModal: false,
  }),
  methods: {
    searchSubmit(searchTerm) {
      this.searchModal = false
      this.$router.push({
        name: 'kereses',
        query: {
          q: searchTerm,
        },
      })
    },
  },

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    drivers: {
      type: Object,
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
