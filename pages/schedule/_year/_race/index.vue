<template>
  <div class="my-[55px]">
    <div class="reltaive mb-10 px-4 lg:mb-[55px] lg:px-7 xl:h-[500px]">
      <div class="relative z-10">
        <div
          class="relative overflow-hidden after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-r after:from-black after:opacity-60 xl:h-[500px]"
        >
          <img :src="race.image" alt="hero image" class="object-cover w-full" />
        </div>
        <div
          class="absolute -bottom-3 -left-3 z-[-1] h-[50%] w-5 bg-black"
        ></div>
        <div
          class="absolute -bottom-3 -left-3 z-[-1] h-5 w-[50%] bg-black"
        ></div>
        <div class="absolute -top-3 -right-3 z-[-1] h-[50%] w-5 bg-black"></div>
        <div class="absolute -top-3 -right-3 z-[-1] h-5 w-[50%] bg-black"></div>
        <div
          class="absolute top-14 left-4 z-20 max-w-[400px] text-white lg:top-24 lg:left-20"
        >
          <h3
            class="mb-2 text-xs font-extrabold lg:text-xl"
            v-text="race.date"
          />
          <h4
            class="mb-2 text-xl font-bold text-white lg:text-display-lg"
            v-text="race.title"
          />
          <h5 class="text-xs font-bold text-white lg:text-xl">
            <i class="inline fa-solid fa-location-dot fa-xs"></i>
            <span v-text="race.location" class="inline ml-1" />
          </h5>
        </div>
      </div>
    </div>
    <div
      class="mb-10 grid grid-cols-1 gap-y-10 bg-[#151515] p-4 py-8 lg:mb-[55px] lg:grid-cols-4 lg:p-7"
    >
      <div
        class="text-white lg:text-center"
        v-for="(info, i) in infos"
        :key="i"
      >
        <h3 class="mb-3 text-sm font-bold lg:mb-6 lg:text-xl">
          <i class="fa-regular fa-clock fa-xs"></i>
          <span v-text="i" />
        </h3>
        <ul class="flex flex-col gap-2.5 text-xs lg:text-md">
          <li v-for="(date, i) in info" :key="i">
            {{ date.title.replace('.', '') }}: {{ date.start_time }} -
            {{ date.end_time }}
          </li>
        </ul>
      </div>
      <div class="text-white lg:text-center">
        <h3 class="mb-3 text-sm font-bold lg:mb-6 lg:text-xl">
          <i class="fa-solid fa-trophy"></i>
          <span>KORÁBBI GYŐZTES</span>
        </h3>
        <h4 v-text="race.past_winner" class="text-xs lg:text-md" />
      </div>
    </div>
    <div
      class="mb-10 flex w-full flex-col justify-between px-4 lg:mb-[55px] lg:flex-row lg:gap-16 lg:px-7"
    >
      <div class="flex-1">
        <h3
          class="mb-5 inline-block border-b-[10px] border-black text-md font-bold leading-none text-black lg:mb-10 lg:text-[22px]"
        >
          LEÍRÁS
        </h3>
        <div class="content" v-html="race.content" />
      </div>
      <div class="max-w-[600px] flex-1">
        <img :src="race.map" alt="map" class="object-cover w-full" />
      </div>
    </div>
    <div
      class="mb-10 grid grid-cols-1 gap-y-5 bg-[#151515] p-4 py-8 lg:mb-[55px] lg:grid-cols-5 lg:p-7"
    >
      <div class="lg:text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>ELSŐ FUTAM</span>
        </h3>
        <h4
          v-text="race.first_race"
          class="text-2xl font-bold text-white lg:text-4xl"
        />
      </div>
      <div class="lg:text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>PÁLYA HOSSZA</span>
        </h3>
        <h4
          v-text="race.track_length"
          class="text-2xl font-bold text-white lg:text-4xl"
        />
      </div>
      <div class="lg:text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>VERSENYTÁV</span>
        </h3>
        <h4
          v-text="race.race_distance"
          class="text-2xl font-bold text-white lg:text-4xl"
        />
      </div>
      <div class="lg:text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>KÖRÖK SZÁMA</span>
        </h3>
        <h4
          v-text="race.number_of_rounds"
          class="text-2xl font-bold text-white lg:text-4xl"
        />
      </div>
      <div class="lg:text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>KÖRREKORD</span>
        </h3>
        <h4
          v-text="race.circular_order"
          class="text-2xl font-bold text-white lg:text-4xl"
        />
      </div>
    </div>
    <div class="mb-10 px-4 lg:mb-[55px] lg:px-7" v-if="race.posts.length">
      <h3
        class="pb-1 mb-5 font-bold text-black uppercase border-b border-black text-md lg:mb-10 lg:text-2xl"
      >
        <span class="ml-5 border-b-[10px] border-black">
          {{ race.title }} HÍREK
        </span>
      </h3>

      <div class="grid flex-1 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-y-14">
        <ArticleCard
          v-for="(article, i) in race.posts.slice(0, 4)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div
      class="mb-10 px-4 lg:mb-[55px] lg:px-7"
      v-if="race.drivers.length && race.teams.length"
    >
      <h3
        class="pb-1 mb-10 font-bold text-center text-black uppercase text-md lg:text-2xl"
      >
        <span class="ml-5 border-b-[10px] border-black">
          {{ race.title }} VÉGEREDMÉNY
        </span>
      </h3>
      <div class="grid flex-1 gap-y-5 gap-x-5 lg:grid-cols-2">
        <div>
          <h3
            class="pb-1 mb-5 font-bold text-black border-b-2 border-black text-md lg:mb-10 lg:text-2xl"
          >
            VERSENYZŐK
          </h3>
          <div class="relative">
            <table class="w-full text-xs text-left">
              <thead class="text-[10px] uppercase text-black">
                <tr>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Poz.
                  </th>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Versenyző
                  </th>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Csapat
                  </th>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Pont
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class=""
                  v-for="(driver, i) in race.drivers.slice(
                    limit == 10 ? 0 : 10,
                    limit
                  )"
                  :key="i"
                  :class="{
                    'bg-[#F5F5F5]': i % 2 === 0,
                  }"
                >
                  <th
                    class="px-3 py-2 font-bold text-black whitespace-nowrap lg:px-6"
                    v-text="driver.position"
                  />
                  <td class="px-3 py-2 lg:px-6" scope="row">
                    <div class="font-bold" v-text="driver.driver.title" />
                  </td>
                  <td class="px-3 py-2 lg:px-6" scope="row">
                    <div class="font-bold" v-text="driver.team.title" />
                  </td>
                  <td
                    class="px-3 py-2 font-bold lg:px-6"
                    v-text="driver.points"
                  />
                </tr>
              </tbody>
            </table>
            <div class="mt-8 text-center">
              <button @click="changeLimit">
                <img
                  src="/more.png"
                  alt="more"
                  :class="{
                    '-scale-y-100': limit !== 10,
                  }"
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3
            class="pb-1 mb-5 font-bold text-black border-b-2 border-black text-md lg:mb-10 lg:text-2xl"
          >
            CSAPATOK
          </h3>
          <div class="relative">
            <table class="w-full text-xs text-left">
              <thead class="text-[10px] uppercase text-black">
                <tr>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Poz.
                  </th>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Csapat
                  </th>
                  <th scope="col" class="px-3 py-2 font-normal lg:px-6">
                    Pont
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  class=""
                  v-for="(team, i) in race.teams.slice(0, 10)"
                  :key="i"
                  :class="{
                    'bg-[#F5F5F5]': i % 2 === 0,
                  }"
                >
                  <th
                    class="px-3 py-2 font-bold text-black whitespace-nowrap lg:px-6"
                    v-text="team.position"
                  />
                  <td class="px-3 py-2 lg:px-6" scope="row">
                    <div class="font-bold" v-text="team.team.title" />
                  </td>
                  <td
                    class="px-3 py-2 font-bold lg:px-6"
                    v-text="team.points"
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'race',
  data: () => ({
    limit: 10,
  }),
  async asyncData({ $api, params, redirect }) {
    try {
      const { data } = await $api.races.getRace(params.year, params.race)
      return {
        race: data.data,
      }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  methods: {
    changeLimit() {
      if (this.limit == 10) {
        this.limit = 100
      } else {
        this.limit = 10
      }
    },
  },
  computed: {
    infos() {
      let list = this.race.infos.map((info) => ({
        start_date: this.$dateFns.format(
          new Date(info.start_date),
          'yyyy.MM.dd'
        ),
        start_time: this.$dateFns.format(new Date(info.start_date), 'HH:mm'),
        end_date: this.$dateFns.format(new Date(info.end_date), 'yyyy.MM.dd'),
        end_time: this.$dateFns.format(new Date(info.end_date), 'HH:mm'),
        title: info.title,
        id: info.id,
      }))
      let dates = _.groupBy(list, 'start_date')
      return dates
    },
  },
}
</script>
<style>
.content p {
  @apply mb-3 text-xs font-normal lg:mb-7 lg:text-lg;
}

.content blockquote {
  @apply font-normal italic underline decoration-[#FF8686] decoration-[2px];
}

.content a {
  @apply text-lg font-semibold text-primary underline;
}
</style>
