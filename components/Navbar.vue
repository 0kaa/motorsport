<template>
  <div>
    <Search
      v-if="searchModal"
      @close="searchModal = false"
      @searchSubmit="searchSubmit"
    />
    <div
      class="mb-1 flex w-full items-center justify-between bg-dark px-6 py-5"
    >
      <nuxt-link to="/" class="max-w-[180px] xl:max-w-[240px]">
        <nuxt-img format="webp" src="/logo.png" alt="logo" />
      </nuxt-link>
      <button class="text-white lg:hidden" @click="nav = true">
        <i class="fa-solid fa-bars"></i>
      </button>
      <div
        class="fixed top-0 left-0 z-90 flex items-center gap-8 lg:static lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent"
        :class="{
          'h-full w-full flex-col bg-dark py-10 opacity-95': nav,
          'left-full': !nav,
        }"
        @click="nav = false"
      >
        <button
          v-if="nav"
          @click="nav = false"
          class="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black lg:hidden"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <template v-if="categories && categories.length">
          <nuxt-link
            class="text-xl font-bold uppercase text-white"
            v-for="(category, i) in categories"
            :key="i"
            :to="{ name: 'category', params: { category: category.slug } }"
            v-text="category.title"
          />
        </template>
        <template v-else>
          <nuxt-link
            class="text-xl font-bold uppercase text-white"
            v-for="(category, i) in localCategories"
            :key="i"
            :to="{ name: 'category', params: { category: category.slug } }"
            v-text="category.title"
          />
        </template>
        <!-- <button>
          <img src="/dark.png" alt="search" />
        </button> -->
        <button @click="searchModal = true">
          <nuxt-img
            placeholder
            format="webp"
            loading="lazy"
            src="/search.png"
            alt="search"
          />
        </button>
      </div>
    </div>
    <!-- <div
      class="navbar-slick relative max-h-[35px] min-h-[35px] overflow-hidden bg-dark px-3 pr-4 text-[#F0F0F0]"
    >
      <slick
        ref="navbar"
        :options="slickOptions"
        v-if="drivers && Object.keys(drivers).length"
      >
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    nav: false,
    slickOptions: {
      slidesToShow: 6,
      infinite: true,
      swipeToSlide: true,
      nextArrow: '.nav-next-btn',
      prevArrow: false,
      autoplay: true,
      autoplaySpeed: 2000,
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
    localCategories: [
      {
        title: 'FORMA-1',
        slug: 'f1',
      },
      {
        title: 'MOTOGP',
        slug: 'motogp',
      },
      {
        title: 'F2/F3',
        slug: 'f2f3',
      },
      {
        title: 'MOTORSPORTOK',
        slug: 'motorsportok',
      },
      {
        title: 'GYORSKÖR',
        slug: 'gyorskor',
      },
      {
        title: 'AUTÓ',
        slug: 'auto',
      },
    ],
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
