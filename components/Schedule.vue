<template>
  <div>
    <div class="flex items-center justify-between px-4 mb-4 lg:px-7">
      <div class="flex items-center gap-2">
        <img src="/calendar.png" alt="calendar" />
        <h3 class="text-sm font-bold text-black lg:text-xl">MENETREND</h3>
      </div>
      <div class="flex items-center gap-3 lg:gap-[18px]">
        <button
          class="text-xs font-medium text-black uppercase lg:text-xl"
          v-for="(serie, i) in series"
          :key="i"
          v-text="serie.title"
          :class="{
            'text-black': tab == serie.id,
            'text-[#ABABAB]': tab !== serie.id,
          }"
          @click.prevent="select(serie.id)"
        />
        <!-- <button class="text-xl font-medium text-[#ABABAB] uppercase">FORMA-2</button>
                <button class="text-xl font-medium text-[#ABABAB] uppercase">MOTOGP</button> -->
      </div>
    </div>
    <div class="px-10 overflow-hidden text-white bg-black py-7">
      <slick ref="slick" :options="slickOptions">
        <nuxt-link
          v-for="(race, i) in races"
          :key="i"
          :to="{
            name: 'futam-series-year-race',
            params: {
              series: race.series,
              year: race.year,
              race: race.slug,
            },
          }"
          class="relative my-3 flex flex-col items-center justify-center gap-2 rounded-[4px] border border-white px-3 py-6 text-center"
        >
          <img :src="race.flag" alt="hun" class="mx-auto !w-[50px]" />
          <h3 class="mt-3 font-bold text-white text-md" v-text="race.title" />
          <div
            class="text-[13px] font-bold text-white"
            v-if="race.infos.length"
          >
            {{ $dateFns.format(new Date(highDate(race.infos)), 'yyyy.MM.dd') }}
            -
            {{ $dateFns.format(new Date(lowDate(race.infos)), 'MM.dd') }}
          </div>
          <button
            class="absolute left-0 right-0 -bottom-3 z-10 mx-auto flex h-6 w-6 items-center justify-center rounded-[4px] border-2 border-white bg-black"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </nuxt-link>
      </slick>
      <!-- <h3 class="next-btn">Next</h3>
      <h3 class="prev-btn">Prev</h3> -->
      <!-- <carousel :items="5" :margin="12" :dots="false" :nav="false" :loop="false" :rewind="true">
                <nuxt-link v-for="(race,i) in races" :key="i" to="/"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img :src="race.flag" alt="hun" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md" v-text="race.title" />
                    <div class="font-bold text-[13px] text-white">
                        {{ $dateFns.format(new Date(highDate(race.infos) ), 'yyyy.MM.dd')}}
                        -
                        {{ $dateFns.format(new Date(lowDate(race.infos) ), 'MM.dd')}}

                    </div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </nuxt-link>
            </carousel> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data: () => ({
    tab: '',
    slickOptions: {
      slidesToShow: 5,
      infinite: false,
      arrows: false,
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
  mounted() {
    this.tab = this.series[0].id
    this.reInit()
    // this.slickOptions.nextArrow = document.querySelector('.next-btn')
    // this.slickOptions.prevArrow = document.querySelector('.prev-btn')
  },
  watch: {
    races(newVal, val) {
      // this.$refs.slick.reSlick()
      this.$refs.slick.destroy()
      this.$nextTick(() => {
        this.$refs.slick.create(this.slickOptions)
        this.$refs.slick.goTo(0, true)
      })
    },
  },
  props: {
    races: {
      type: Array,
      default: () => [],
    },
    series: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    select(id) {
      this.$emit('select', id)
      this.tab = id
    },
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    highDate(infos) {
      var date = infos[0].start_date
      infos.forEach((info) => {
        if (info.start_date < date) {
          date = info.start_date
        }
      })
      return date
    },
    lowDate(infos) {
      var date = infos[0].end_date
      infos.forEach((info) => {
        if (info.end_date > date) {
          date = info.end_date
        }
      })
      return date
    },
  },
}
</script>
<style>
.slick-slide {
  margin: 0 12px;
}

/* the parent */
.slick-list {
  margin: 0 -12px;
}
</style>
