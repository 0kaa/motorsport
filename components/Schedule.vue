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
    <div
      class="relative px-4 py-4 overflow-hidden text-white bg-black schedule-slick lg:px-10 lg:py-7"
    >
      <slick ref="schedule_slick" :options="slickOptions">
        <div
          v-for="(race, i) in races"
          :key="i"
          class="relative my-3 flex h-[140px] flex-col items-center justify-center gap-2 rounded-[4px] border border-white px-3 py-6 text-center"
          :class="{
            'border-primary':
              race.lowDate > today && race.lowDate <= highDateInRaces,
          }"
        >
          <img :src="race.flag" alt="hun" class="mx-auto !w-[45px]" />
          <h3 class="mt-3 font-bold text-white text-md" v-text="race.title" />
          <div
            class="text-[13px] font-bold text-white"
            v-if="race.infos.length"
          >
            {{ $dateFns.format(new Date(race.lowDate), 'yyyy.MM.dd') }}
            -
            {{ $dateFns.format(new Date(race.highDate), 'MM.dd') }}
          </div>
          <nuxt-link
            :to="{
              name: 'futam-series-year-race',
              params: {
                series: race.series,
                year: race.year,
                race: race.slug,
              },
            }"
            class="absolute left-0 right-0 -bottom-3 z-10 mx-auto flex h-8 w-8 items-center justify-center rounded-[4px] border-2 border-white bg-black"
          >
            <i class="fa-solid fa-plus"></i>
          </nuxt-link>
        </div>
      </slick>
      <button
        class="absolute top-0 bottom-0 m-auto text-white client-next-btn right-2 lg:right-5"
      >
        <i class="fa-solid fa-angles-right fa-2x"></i>
      </button>
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
      swipeToSlide: true,
      nextArrow: '.client-next-btn',
      prevArrow: false,
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

    // if mobile viewport change slidesToShow
  },
  watch: {
    races(newVal, val) {
      // this.$refs.slick.reSlick()
      this.$refs.schedule_slick.destroy()
      this.$nextTick(() => {
        this.$refs.schedule_slick.create(this.slickOptions)
        // this.$refs.schedule_slick.goTo(20, true)
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
      this.$refs.schedule_slick.next()
    },

    prev() {
      this.$refs.schedule_slick.prev()
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.schedule_slick.reSlick()
        this.$refs.schedule_slick.goTo(
          this.races.length - this.slickOptions.slidesToShow,
          true
        )
        if (window.innerWidth < 600) {
          this.$refs.schedule_slick.goTo(this.races.length - 2)
        }
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
  computed: {
    today() {
      // format 2022/03/20 16:00
      return this.$dateFns.format(new Date(), 'yyyy/MM/dd HH:mm')
    },
    highDateInRaces() {
      var dates = this.races.map((race) => {
        var date = race.infos[0].start_date
        race.infos.forEach((info) => {
          if (info.start_date < date) {
            date = info.start_date
          }
        })
        return date
      })
      // get the highest date
      var date = dates[0]
      dates.forEach((d) => {
        if (d > date) {
          date = d
        }
      })
      return date
    },
  },
}
</script>
<style>
.schedule-slick .slick-slide {
  margin: 0 10px !important;
  height: 100%;
}

/* the parent */
.schedule-slick .slick-list {
  margin-right: 30px !important;
}

.schedule-slick .slick-disabled {
  @apply cursor-not-allowed opacity-30;
}
</style>
