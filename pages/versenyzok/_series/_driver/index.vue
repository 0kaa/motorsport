<template>
  <div class="mt-5 mb-20" v-if="data.driver_articles">
    <Hero
      class="mb-10 px-4 lg:mb-[74px] lg:px-7"
      home
      :article="data.driver_articles.data[0]"
    />
    <div
      class="mb-[55px] px-4 lg:px-7"
      v-if="data.driver_articles.data.length > 1"
    >
      <h3
        class="mb-10 border-b border-black pb-1 text-lg font-bold uppercase text-black lg:text-2xl"
      >
        <span class="ml-5 border-b-[10px] border-black">
          TOVÁBBI {{ data.driver.slug }}-HÍREK
        </span>
      </h3>

      <div class="grid flex-1 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-y-14">
        <ArticleCard
          v-for="(article, i) in data.driver_articles.data.slice(1, 5)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div
      class="mb-[55px] px-4 lg:px-7"
      v-if="data.driver_articles.data.length > 1"
    >
      <div class="flex flex-col justify-between gap-24 lg:flex-row">
        <div class="flex flex-1 flex-col gap-12 lg:pr-10">
          <div
            v-for="(article, i) in data.driver_articles.data.slice(5, 100)"
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
                <nuxt-img
                  placeholder
                  format="webp"
                  loading="lazy"
                  v-if="article.featured_image"
                  :src="
                    article.featured_image['4x']
                      ? article.featured_image['4x']
                      : '/placeholder.jpeg'
                  "
                  alt="article"
                  class="h-[200px] w-full rounded-[4px] object-cover lg:h-[175px] lg:w-[315px]"
                />
              </nuxt-link>
              <div class="absolute -bottom-5 flex items-center gap-2">
                <nuxt-link
                  :to="{
                    name: 'category',
                    params: {
                      category: article.post_categories[0].slug,
                    },
                  }"
                  class="border-b-[3px] border-[#CF0000] bg-white px-1 py-0.5 text-[13px] font-bold uppercase text-black"
                  v-text="article.post_categories[0].title"
                />
                <nuxt-link
                  :to="{
                    name: 'csapatok-series-team',
                    params: {
                      team: article.teams[0].slug,
                      series: article.teams[0].taxonomny_slug,
                    },
                  }"
                  v-if="article.teams.length"
                  class="border-b-[3px] bg-white px-1 py-0.5 text-[13px] font-bold uppercase text-black"
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
        <div class="flex w-[300px] flex-col gap-2.5">
          <div id="oldalsav_1_versenyzok"></div>
          <div id="oldalsav_2_versenyzok"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'driver',
  data: () => ({
    limit: 10,
    buttonDisabled: false,
  }),
  async asyncData({ $api, query, params, redirect }) {
    try {
      const page = query.oldal ? query.oldal : 1
      const { data } = await $api.articles.getItemsByDriver(
        params.driver,
        params.series,
        page
      )
      return { data: data, meta: data.driver_articles.meta }
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
      title: this.data.driver.title,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: this.data.driver.description,
        },
      ],
    }
  },
  methods: {
    async paginate(index) {
      this.buttonDisabled = true
      await this.$api.articles
        .getItemsByDriver(
          this.data.driver.slug,
          this.data.driver.taxonomy_id.slug,
          index
        )
        .then((res) => {
          this.data = res.data
          this.meta = res.data.driver_articles.meta
          this.$route.query.oldal = this.meta.current_page
          history.pushState(
            {},
            null,
            `${this.$route.path}?oldal=${this.$route.query.oldal}`
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
