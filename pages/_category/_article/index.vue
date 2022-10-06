<template>
  <div class="mt-5 mb-20">
    <Hero class="mb-10 px-4 lg:mb-[74px] lg:px-7" :article="data.article" />
    <div class="flex flex-col-reverse gap-8 px-4 lg:flex-row lg:px-7">
      <div class="sticky h-full lg:-top-[50px] lg:w-[15%] lg:pt-[70px]">
        <div class="flex flex-col gap-6">
          <nuxt-link
            :to="`/${category.slug}/${article.slug}`"
            v-for="(article, i) in data.connectionArticles"
            :key="i"
          >
            <img
              :src="
                article.featured_image.url
                  ? article.featured_image.url
                  : '/placeholder.jpeg'
              "
              alt=""
              class="max-h-[195px] w-full rounded-md object-cover lg:max-h-[130px]"
            />
            <h3
              class="mt-2 mb-4 text-sm font-semibold text-black"
              v-text="article.title"
            ></h3>
            <div class="h-px bg-black"></div>
          </nuxt-link>
        </div>
        <div class="flex items-center justify-between mt-8">
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 text-xl border border-black"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 text-xl border border-black"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a
            :href="`/${category.slug}/${data.article.slug}`"
            class="flex items-center justify-center w-10 h-10 text-xl border border-black"
            @click.prevent="copyLink(category.slug, data.article.slug)"
          >
            <i class="fa-regular fa-copy"></i>
          </a>
        </div>
      </div>
      <div class="flex-1">
        <div
          class="relative mb-7 flex items-center justify-between border-b-[10px] border-black after:absolute after:right-0 after:top-full after:h-[150px] after:w-2.5 after:bg-black"
        >
          <a
            href="#"
            class="text-xs font-semibold text-black lg:text-md"
            v-text="data.article.post_author.name"
          />

          <div
            class="text-xs font-semibold text-black lg:text-md"
            v-text="data.article.published_at"
          />
        </div>
        <div
          class="flex flex-col justify-between gap-10 pr-4 lg:flex-row lg:pr-7"
        >
          <div class="flex-1">
            <div
              class="mb-4 text-sm font-bold text-black lg:mb-8 lg:text-2xl"
              v-text="data.article.excerpt"
            />
            <RecommendedArticle
              :article="recommendedArticle"
              v-if="recommendedArticle.id !== data.article.id"
            />
            <div class="article-content mb-7" v-html="articleContent" />

            <!-- <ConnectionArticles /> -->
            <Taxonomies
              :category="category"
              :driver="driver"
              :team="team"
              :tag="tag"
            />
          </div>
          <div class="flex w-[300px] flex-col gap-[50px]">
            <div class="max-w-[300px]">
              <img
                src="/ad-1.png"
                alt="ad"
                class="object-cover w-full h-full"
              />
            </div>
            <Standings
              :standings="standings"
              :series="series"
              @selected="getStandingsBySeries"
            />
            <div class="max-w-[300px]">
              <img
                src="/ad-1.png"
                alt="ad"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-single',
  async asyncData({ $api, params, redirect }) {
    try {
      const { data } = await $api.articles.getArticle(
        params.category,
        params.article
      )
      const recommendedArticle = await $api.articles.getRecommendedArticle()
      const standings = await $api.standings.getStandings(1)
      const series = await $api.series.getSeries()
      return {
        data: data.data,
        standings: standings.data.data,
        series: series.data.data,
        recommendedArticle: recommendedArticle.data,
      }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  methods: {
    async copyLink() {
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert('Copied')
      } catch ($e) {
        alert('Cannot copy')
      }
    },
    async getStandingsBySeries(serie) {
      // console.log(serie)
      try {
        await this.$api.standings.getStandings(serie).then((res) => {
          this.standings = res.data.data
        })
      } catch (error) {}
    },
  },
  head() {
    return {
      title: this.data.article.title,
    }
  },
  computed: {
    driver() {
      return this.data.article.drivers.length
        ? this.data.article.drivers[0]
        : {}
    },
    team() {
      return this.data.article.teams.length ? this.data.article.teams[0] : {}
    },
    tag() {
      return this.data.article.tags.length ? this.data.article.tags[0] : {}
    },
    category() {
      return this.data.article.post_categories.find(
        (cat) => cat.slug == this.$route.params.category
      )
    },
    articleContent() {
      return this.data.article.content
    },
  },
}
</script>

<style>
.article-content p {
  @apply mb-3 text-xs font-normal lg:mb-7 lg:text-lg;
}

.article-content blockquote {
  @apply font-normal italic underline decoration-[#FF8686] decoration-[2px];
}

.article-content a {
  @apply text-lg font-semibold text-primary underline;
}
</style>
