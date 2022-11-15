<template>
  <div>
    <div
      class="relative px-4 py-4 overflow-hidden text-white bg-black client-slick lg:px-10 lg:py-10"
    >
      <slick ref="client-slick" :options="slickOptions" class="flex">
        <nuxt-link
          :to="{
            name: 'csapatok-series-team',
            params: {
              team: team.team.slug,
              series: team.team.taxonomny_slug,
            },
          }"
          v-for="(team, i) in teams"
          :key="'c_' + i + 1"
          class="!flex h-[90px] items-center justify-center rounded-[4px] border border-white py-3"
        >
          <nuxt-img
            format="webp"
            loading="lazy"
            :src="
              team.team.image.url ? team.team.image.url : '/placeholder.jpeg'
            "
            alt="oracle"
            class="max-h-[45px] object-cover"
          />
        </nuxt-link>
      </slick>
      <button
        class="absolute top-0 bottom-0 m-auto text-white brand-next-btn right-2 lg:right-5"
      >
        <i class="fa-solid fa-angles-right fa-2x"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  computed: {
    teams() {
      return this.$store.getters.getTeams
    },
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 5,
      swipeToSlide: true,
      infinite: true,
      nextArrow: '.brand-next-btn',
      prevArrow: false,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 600,
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
    },
  }),
}
</script>
<style>
.client-slick .slick-slide {
  margin: 0 10px !important;
  height: 100%;
}

/* the parent */
.client-slick .slick-list {
  margin-right: 30px !important;
}

.client-slick .slick-disabled {
  @apply cursor-not-allowed opacity-30;
}
</style>
