<template>
  <div class="my-[55px]">
    <div class="reltaive mb-[55px] px-7 xl:h-[500px]">
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
        <div class="absolute top-24 left-20 z-20 max-w-[400px] text-white">
          <h3 class="mb-2 text-xl font-extrabold" v-text="race.date" />
          <h4
            class="mb-2 font-bold text-white text-display-lg"
            v-text="race.title"
          />
          <h5 class="text-xl font-bold text-white">
            <i class="inline fa-solid fa-location-dot fa-xs"></i>
            <span v-text="race.location" class="inline ml-1" />
          </h5>
        </div>
      </div>
    </div>
    <div class="mb-[55px] grid grid-cols-4 bg-[#151515] p-7">
      <div class="text-center text-white" v-for="(info, i) in infos" :key="i">
        <h3 class="mb-6 text-xl font-bold">
          <i class="fa-regular fa-clock fa-xs"></i>
          <span v-text="i" />
        </h3>
        <ul class="flex flex-col gap-2.5">
          <li v-for="(date, i) in info" :key="i">
            {{ date.title.replace('.', '') }}: {{ date.start_time }} -
            {{ date.end_time }}
          </li>
        </ul>
      </div>
      <div class="text-center text-white">
        <h3 class="mb-6 text-xl font-bold">
          <i class="fa-solid fa-trophy"></i>
          <span>KORÁBBI GYŐZTES</span>
        </h3>
        <h4 v-text="race.past_winner" />
      </div>
    </div>
    <div class="mb-[55px] flex w-full justify-between gap-16 px-7">
      <div class="flex-1">
        <h3
          class="mb-10 inline-block border-b-[10px] border-black text-[22px] font-bold leading-none text-black"
        >
          LEÍRÁS
        </h3>
        <div class="content" v-html="race.content" />
      </div>
      <div class="max-w-[600px] flex-1">
        <img :src="race.map" alt="map" class="object-cover w-full" />
      </div>
    </div>
    <div class="mb-[55px] grid grid-cols-5 bg-[#151515] p-7">
      <div class="text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>ELSŐ FUTAM</span>
        </h3>
        <h4 v-text="race.first_race" class="text-4xl font-bold text-white" />
      </div>
      <div class="text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>PÁLYA HOSSZA</span>
        </h3>
        <h4 v-text="race.track_length" class="text-4xl font-bold text-white" />
      </div>
      <div class="text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>VERSENYTÁV</span>
        </h3>
        <h4 v-text="race.race_distance" class="text-4xl font-bold text-white" />
      </div>
      <div class="text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>KÖRÖK SZÁMA</span>
        </h3>
        <h4
          v-text="race.number_of_rounds"
          class="text-4xl font-bold text-white"
        />
      </div>
      <div class="text-center">
        <h3 class="mb-1 text-[15px] font-medium text-[#BDBDBD]">
          <span>KÖRREKORD</span>
        </h3>
        <h4
          v-text="race.circular_order"
          class="text-4xl font-bold text-white"
        />
      </div>
    </div>
    <div class="mb-[55px] px-7" v-if="race.posts.length">
      <h3
        class="pb-1 mb-10 text-2xl font-bold text-black uppercase border-b border-black"
      >
        <span class="ml-5 border-b-[10px] border-black">
          {{ race.title }} HÍREK
        </span>
      </h3>

      <div class="grid flex-1 grid-cols-4 gap-x-5 gap-y-14">
        <ArticleCard
          v-for="(article, i) in race.posts.slice(0, 4)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div class="mb-[55px] px-7" v-if="race.drivers.length && race.teams.length">
      <h3
        class="pb-1 mb-10 text-2xl font-bold text-center text-black uppercase"
      >
        <span class="ml-5 border-b-[10px] border-black">
          {{ race.title }} VÉGEREDMÉNY
        </span>
      </h3>
      <div class="grid flex-1 grid-cols-2 gap-x-5">
        <div>
          <h3
            class="pb-1 mb-10 text-2xl font-bold text-black border-b-2 border-black"
          >
            VERSENYZŐK
          </h3>
          <div class="relative">
            <table class="w-full text-xs text-left">
              <thead class="text-[10px] uppercase text-black">
                <tr>
                  <th scope="col" class="px-6 py-2 font-normal">Poz.</th>
                  <th scope="col" class="px-6 py-2 font-normal">Versenyző</th>
                  <th scope="col" class="px-6 py-2 font-normal">Csapat</th>
                  <th scope="col" class="px-6 py-2 font-normal">Pont</th>
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
                    class="px-6 py-2 font-bold text-black whitespace-nowrap"
                    v-text="driver.position"
                  />
                  <td class="px-6 py-2" scope="row">
                    <div class="font-bold" v-text="driver.driver.title" />
                  </td>
                  <td class="px-6 py-2" scope="row">
                    <div class="font-bold" v-text="driver.team.title" />
                  </td>
                  <td class="px-6 py-2 font-bold" v-text="driver.points" />
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
            class="pb-1 mb-10 text-2xl font-bold text-black border-b-2 border-black"
          >
            CSAPATOK
          </h3>
          <div class="relative">
            <table class="w-full text-xs text-left">
              <thead class="text-[10px] uppercase text-black">
                <tr>
                  <th scope="col" class="px-6 py-2 font-normal">Poz.</th>
                  <th scope="col" class="px-6 py-2 font-normal">Csapat</th>
                  <th scope="col" class="px-6 py-2 font-normal">Pont</th>
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
                    class="px-6 py-2 font-bold text-black whitespace-nowrap"
                    v-text="team.position"
                  />
                  <td class="px-6 py-2" scope="row">
                    <div class="font-bold" v-text="team.team.title" />
                  </td>
                  <td class="px-6 py-2 font-bold" v-text="team.points" />
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
  @apply mb-7 text-lg font-normal;
}

.content blockquote {
  @apply font-normal italic underline decoration-[#FF8686] decoration-[2px];
}

.content a {
  @apply text-lg font-semibold text-primary underline;
}
</style>
