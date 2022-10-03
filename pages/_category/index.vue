<template>
  <div class="mt-5 mb-20" v-if="data.category_articles">
    <Hero class="mb-[74px] px-7" :article="data.category_articles.data[0]" />
    <div class="mb-[55px] px-7" v-if="data.category_articles.data.length">
      <h3
        class="pb-1 mb-10 text-2xl font-bold text-black uppercase border-b border-black"
      >
        <span class="ml-5 border-b-[10px] border-black">
          TOVÁBBI {{ data.category.slug }}-HÍREK
        </span>
      </h3>

      <div class="grid flex-1 grid-cols-4 gap-x-5 gap-y-14">
        <ArticleCard
          v-for="(article, i) in data.category_articles.data.slice(1, 5)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div
      class="mb-[55px] px-7"
      v-if="data.standings && data.standings.drivers && data.standings.teams"
    >
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
                  v-for="(driver, i) in data.standings.drivers.slice(
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
            <div class="mt-4 text-center">
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
                  v-for="(team, i) in data.standings.teams.slice(0, 10)"
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
    <div class="mb-[55px] px-7">
      <div class="flex justify-between gap-24">
        <div class="flex flex-col flex-1 gap-12 pr-10">
          <div
            v-for="(article, i) in data.category_articles.data.slice(5, 100)"
            :key="i"
            class="flex gap-5"
          >
            <div class="relative">
              <!-- <div
                class="absolute -top-1.5 -left-1.5 h-[80%] w-2 bg-[#ED1C24]"
              ></div>
              <div
                class="absolute -top-1.5 -left-1.5 h-2 w-[80%] bg-[#ED1C24]"
              ></div> -->
              <nuxt-link
                :to="{
                  name: 'category-article',
                  params: {
                    category: article.post_categories[0].slug,
                    article: article.slug,
                  },
                }"
                class="block"
              >
                <img
                  v-if="article.featured_image"
                  :src="article.featured_image.url"
                  alt="article"
                  class="h-[195px] w-[315px] rounded-[4px] object-cover"
                />
              </nuxt-link>
              <div class="absolute flex items-center gap-2 -bottom-5">
                <nuxt-link
                  :to="{
                    name: 'category',
                    params: {
                      category: article.post_categories[0].slug,
                    },
                  }"
                  class="border-b-[3px] border-[#CF0000] bg-white px-1 py-0.5 text-[13px] font-bold text-black"
                  v-text="article.post_categories[0].title"
                />
                <a
                  href="#"
                  v-if="article.teams.length"
                  class="border-b-[3px] bg-white px-1 py-0.5 text-[13px] font-bold text-black"
                  :style="`border-color:${article.teams[0].color}`"
                  v-text="article.teams[0].title"
                />
              </div>
            </div>
            <div class="flex-1">
              <nuxt-link
                :to="{
                  name: 'category-article',
                  params: {
                    category: article.post_categories[0].slug,
                    article: article.slug,
                  },
                }"
              >
                <h3 class="mt-2.5 text-[26px] font-bold leading-8 text-black">
                  {{ article.title }}
                </h3>
              </nuxt-link>
              <p v-if="article.excerpt" class="pr-12 mt-3 excerpt">
                {{ article.excerpt }}
              </p>
            </div>
          </div>
          <div class="text-center" v-if="false">
            <button></button>
            <button
              v-for="i in meta.total / meta.per_page"
              :key="i"
              v-text="i"
            />
          </div>
        </div>
        <div class="flex w-[300px] flex-col gap-[50px]">
          <img src="/ad-1.png" alt="ad" class="object-cover w-full h-full" />
          <img src="/ad-1.png" alt="ad" class="object-cover w-full h-full" />
          <img src="/ad-1.png" alt="ad" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category',
  data: () => ({
    limit: 10,
  }),
  async asyncData({ $api, params, redirect }) {
    try {
      const { data } = await $api.articles.getItemsByCategory(params.category)
      return { data: data, meta: data.category_articles.meta }
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
}
</script>
