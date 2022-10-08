<template>
  <div class="px-4 mb-20 lg:px-7">
    <h1 class="my-16 text-xl font-bold text-black lg:text-4xl">
      KERESÉSI TALÁLATOK SZÁMA: {{ meta.total }}
    </h1>
    <div class="mb-[55px]" v-if="data.length">
      <h3
        class="pb-1 mb-10 text-lg font-bold text-black uppercase border-b border-black lg:text-2xl"
      >
        <span class="ml-5 border-b-[10px] border-black"> *-HÍREK </span>
      </h3>
      <div class="grid flex-1 gap-x-5 gap-y-5 lg:grid-cols-4 lg:gap-y-14">
        <ArticleCard
          v-for="(article, i) in data.slice(0, 4)"
          :key="i"
          :article="article"
        />
      </div>
    </div>
    <div class="mb-[55px] px-4 lg:px-7" v-if="data.length > 4">
      <div class="flex flex-col justify-between gap-24 lg:flex-row">
        <div class="flex flex-col flex-1 gap-12 lg:pr-10">
          <div
            v-for="(article, i) in data.slice(4, 12)"
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
                  class="border-b-[3px] border-[#CF0000] bg-white px-1 py-0.5 text-[13px] font-bold uppercase text-black"
                  v-text="article.post_categories[0].title"
                />
                <nuxt-link
                  :to="{
                    name: 'csapatok-team',
                    params: {
                      team: article.teams[0].slug,
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
  name: 'kereses',
  data: () => ({
    limit: 10,
    buttonDisabled: false,
  }),
  computed: {
    pages() {
      return Math.ceil(this.meta.total / this.meta.per_page)
    },
  },
  async asyncData({ $api, query, params, redirect }) {
    try {
      if (!query.q) {
        redirect('/')
      }
      const page = query.oldal ? query.oldal : 1
      const { data } = await $api.articles.getArticlesByTitle(query.q, page)

      return { data: data.items.data, meta: data.items.meta }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  head() {
    return {
      title: this.$route.query.q,
    }
  },
  methods: {
    async paginate(index) {
      this.buttonDisabled = true
      await this.$api.articles
        .getArticlesByTitle(this.$route.query.q, index)
        .then((res) => {
          this.data = res.data.items.data
          this.meta = res.data.items.meta
          this.$route.query.oldal = this.meta.current_page
          history.pushState(
            {},
            null,
            `${this.$route.path}?oldal=${this.$route.query.oldal}&q=${this.$route.query.q}`
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
    async postsBySearchTerm(searchTerm) {
      const page = this.$route.query.oldal ? this.$route.query.oldal : 1

      const { data } = await this.$api.articles.getArticlesByTitle(
        searchTerm,
        page
      )
      this.data = data.items.data
      this.meta = data.items.meta
    },
  },
  watch: {
    '$route.query.q'(val) {
      this.postsBySearchTerm(val)
    },
  },
}
</script>
