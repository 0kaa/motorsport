<template>
  <div class="mt-5 mb-20" v-if="data.tag_articles">
    <Hero
      class="mb-10 px-4 lg:mb-[74px] lg:px-7"
      home
      :article="data.tag_articles.data[0]"
    />
    <div
      class="mb-[55px] px-4 lg:px-7"
      v-if="data.tag_articles.data.length > 1"
    >
      <h3
        class="pb-1 mb-10 text-lg font-bold text-black uppercase border-b border-black lg:text-2xl"
      >
        <span class="ml-5 border-b-[10px] border-black">
          TOVÁBBI {{ data.tag.slug }}-HÍREK
        </span>
      </h3>

      <div class="grid flex-1 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-y-14">
        <ArticleCard
          v-for="(article, i) in data.tag_articles.data.slice(1, 5)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div
      class="mb-10 px-4 lg:mb-[55px] lg:px-7"
      v-if="data.standings && data.standings.drivers && data.standings.teams"
    >
      <div class="grid flex-1 gap-x-5 lg:grid-cols-2">
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
                  v-for="(team, i) in data.standings.teams.slice(0, 10)"
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
    <div
      class="mb-[55px] px-4 lg:px-7"
      v-if="data.tag_articles.data.length > 1"
    >
      <div class="flex flex-col justify-between gap-24 lg:flex-row">
        <div class="flex flex-col flex-1 gap-12 lg:pr-10">
          <div
            v-for="(article, i) in data.tag_articles.data.slice(5, 100)"
            :key="i"
            class="flex flex-col gap-5 lg:flex-row"
          >
            <div class="relative z-10">
              <div
                v-if="highlight(article)"
                class="absolute -top-1.5 -left-1.5 z-[-1] h-[80%] w-2 rounded-tl-lg bg-[#ED1C24]"
              ></div>
              <div
                v-if="highlight(article)"
                class="absolute -top-1.5 -left-1.5 z-[-1] h-2 w-[80%] rounded-tl-lg bg-[#ED1C24]"
              ></div>
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
                  :src="
                    article.featured_image.url
                      ? article.featured_image.url
                      : '/placeholder.jpeg'
                  "
                  alt="article"
                  class="h-[195px] w-full rounded-[4px] object-cover lg:h-[195px] lg:w-[315px]"
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
                <nuxt-link
                  :to="{
                    name: 'teams-team',
                    params: {
                      team: article.teams[0].slug,
                    },
                  }"
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
                <h3
                  class="mt-2.5 text-lg font-bold leading-8 text-black lg:text-[26px]"
                >
                  {{ article.title }}
                </h3>
              </nuxt-link>
              <p v-if="article.excerpt" class="excerpt lg:mt-3 lg:pr-12">
                {{ article.excerpt }}
              </p>
            </div>
          </div>
          <Pagination
            v-if="meta.last_page > 1"
            :currentPage="meta.current_page"
            :totalPages="pages"
            :buttonDisabled="buttonDisabled"
            @select="(i) => paginate(i)"
          />
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
  name: 'tag',
  data: () => ({
    limit: 10,
    buttonDisabled: false,
  }),
  async asyncData({ $api, query, params, redirect }) {
    try {
      const page = query.page ? query.page : 1
      const { data } = await $api.articles.getItemsByTag(params.tag, page)
      return { data: data, meta: data.tag_articles.meta }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.meta.total / this.meta.per_page)
    },
  },
  head() {
    return {
      title: this.data.tag.title,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: this.data.tag.description,
        },
      ],
    }
  },
  methods: {
    async paginate(index) {
      this.buttonDisabled = true
      await this.$api.articles
        .getItemsByTag(this.data.tag.slug, index)
        .then((res) => {
          this.data = res.data
          this.meta = res.data.tag_articles.meta
          this.$route.query.page = this.meta.current_page
          history.pushState(
            {},
            null,
            `${this.$route.path}?page=${this.$route.query.page}`
          )
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          this.buttonDisabled = false
        })
    },
    highlight(article) {
      return article.post_settings.find(
        (setting) => setting.key == 'highlight_green'
      ).value == '0'
        ? false
        : true
    },
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
