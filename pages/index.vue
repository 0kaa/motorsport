<template>
  <div class="mt-5 mb-4" v-if="data.length">
    <FirstArticle v-if="firstArticle" :article="firstArticle" />
    <Hero
      class="mb-10 px-4 lg:mb-[74px] lg:px-7"
      home
      :article="stickyArticle !== null ? stickyArticle : featuredArticle"
    />

    <div class="mb-[55px] flex flex-col gap-5 px-4 lg:flex-row lg:px-7">
      <div
        class="grid flex-1 grid-cols-1 gap-x-5 gap-y-6 lg:grid-cols-3 lg:gap-y-14"
      >
        <ArticleCard
          v-for="(article, i) in data.slice(0, 6)"
          :key="i"
          :article="article"
        />
      </div>
      <div class="flex-1 lg:max-w-[300px]">
        <client-only>
          <div id="motorsporthu_jobb_1" class="h-px w-full">
            <component :is="'script'">
              activateBanner('motorsporthu_jobb_1')
            </component>
          </div>
        </client-only>
      </div>
    </div>
    <Clients class="mb-[55px]" />
    <section class="mb-[55px] px-4 lg:px-7">
      <InlineTitle title="TOVÁBBI HÍREINK" />
      <div class="mt-8 mb-5 grid gap-5 lg:mb-[64px] lg:grid-cols-2">
        <div>
          <ArticleCard :article="data[6]" size="lg" excerpt />
        </div>
        <div class="flex flex-col gap-10">
          <ArticleCard
            v-for="(article, i) in data.slice(7, 10)"
            :key="i"
            :article="article"
            excerpt
            inline
          />
        </div>
      </div>
      <div class="grid flex-1 gap-x-5 gap-y-5 lg:grid-cols-4">
        <ArticleCard
          v-for="(article, i) in data.slice(10, 14)"
          :key="i"
          :article="article"
        />
      </div>
    </section>
    <Schedule :races="races" :series="series" @select="getRaces" />
    <section
      class="mt-[55px] flex flex-col bg-black p-6 text-white lg:flex-row lg:py-[50px] lg:pr-6 lg:pl-9"
      v-if="levezeto"
    >
      <div class="relative z-10 lg:mt-10 lg:w-[30%]">
        <h2 class="mb-5 font-bold text-white lg:text-[88px]">LEVEZETŐ</h2>
        <nuxt-link
          :to="{
            name: 'category-article',
            params: {
              category: levezeto.post_categories[0].slug,
              article: levezeto.slug,
            },
          }"
          class="mb-6 block text-xl font-bold lg:mb-0 lg:text-4xl"
        >
          {{ levezeto.title }}
        </nuxt-link>
      </div>
      <div
        class="flex-1 overflow-hidden rounded-[4px] border-[3px] border-white"
      >
        <nuxt-img
          format="webp"
          placeholder
          :src="
            levezeto.featured_image['7x']
              ? levezeto.featured_image['7x']
              : '/placeholder.jpeg'
          "
          alt="levezeto"
          class="max-h-[500px] w-full object-cover"
        />
      </div>
    </section>
    <section
      class="mt-5 p-4 lg:mx-3 lg:mt-[55px] lg:border lg:border-black lg:p-5"
      v-if="highlighted && highlighted.length"
    >
      <div class="mb-8 items-end gap-4 border-b border-black lg:inline-flex">
        <h2 class="text-3xl font-bold italic text-black">
          LEGOLVASOTTABB CIKKEK
        </h2>
        <h3 class="text-lg font-bold italic text-primary">
          AZ ELMÚLT 24 ÓRÁBÓL
        </h3>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <div
          class="flex flex-col gap-5 lg:flex-row"
          v-for="(article, i) in highlighted"
          :key="i"
        >
          <nuxt-link
            :to="{
              name: 'category-article',
              params: {
                category: article.post_categories[0].slug,
                article: article.slug,
              },
            }"
          >
            <nuxt-img
              placeholder
              format="webp"
              :src="
                article.featured_image['3x']
                  ? article.featured_image['3x']
                  : '/placeholder.jpeg'
              "
              alt="article"
              class="h-[200px] w-full rounded-[4px] object-cover lg:h-[92px] lg:w-[140px]"
            />
          </nuxt-link>
          <div class="flex h-full flex-1 flex-col justify-between">
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
                class="text-lg font-bold italic text-black lg:text-[22px]"
                v-text="article.title"
              />
            </nuxt-link>
            <div class="flex gap-3 text-xs font-medium italic text-black">
              <div>
                <!-- {{ $dateFns.formatDistanceStrict(new Date(), new Date(article.published_at)) }} -->
                {{
                  $dateFns.format(
                    new Date(article.published_at),
                    'yyyy. MMMM dd - hh:mm',
                    { locale: 'hu' }
                  )
                }}
              </div>
              <div>|</div>
              <div>
                <span v-text="article.post_author.name" />
                <span>/</span>
                <nuxt-link
                  :to="{
                    name: 'category',
                    params: {
                      category: article.post_categories[0].slug,
                    },
                  }"
                  v-text="article.post_categories[0].title"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    data: [],
    levezeto: {},
    firstArticle: {},
    series: [],
    stickyArticle: {},
    featuredArticle: [],
    highlighted: [],
    races: [],
  }),
  async fetch() {
    await this.$api.articles.getArticles().then((res) => {
      // console.log(res.data)
      this.data = res.data.posts
      this.levezeto = res.data.levezeto
      this.firstArticle = res.data.first_article
      this.series = res.data.series
      this.stickyArticle = res.data.sticky_article
      this.featuredArticle = res.data.featured_article
      this.highlighted = res.data.highlighted
      this.races = res.data.races.sort((a, b) => {
        return new Date(a.lowDate) - new Date(b.lowDate)
      })
    })
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  mounted() {
    if (window.__adsConfig) {
      setTimeout(() => {
        window.__adsConfig.repopulate()
        console.log('ads working')
      }, 1000)
    }
  },
  // async asyncData({ $api, params, redirect }) {
  //   try {
  //     const { data } = await $api.articles.getArticles()
  //     // const series = await $api.series.getSeries()
  //     return {
  //       data: data.posts,
  //       levezeto: data.levezeto,
  //       firstArticle: data.first_article,
  //       series: data.series,
  //       stickyArticle: data.sticky_article,
  //       featuredArticle: data.featured_article,
  //       races: data.races.sort((a, b) => {
  //         return new Date(a.lowDate) - new Date(b.lowDate)
  //       }),
  //     }
  //   } catch (error) {
  //     // console.log(error)
  //     redirect('/404')
  //   }
  // },
  head() {
    return {
      meta: [
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Motorsport.hu',
        },
        // description
        {
          hid: 'description',
          name: 'description',
          content:
            'F1 hírek, eredmények és egyéb érdekességek a motorsport világából',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'F1 hírek, eredmények és egyéb érdekességek a motorsport világából',
        },
        {
          hid: 'mobile-web-app-capable',
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Motorsport.hu',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Motorsport.hu',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://motorsport.hu/`,
        },
      ],
    }
  },
  methods: {
    async getRaces(id) {
      await this.$api.races.getRaces(id).then((res) => {
        // sort races by lowDate
        this.races = res.data.data.sort((a, b) => {
          return new Date(a.lowDate) - new Date(b.lowDate)
        })
      })
    },
  },
}
</script>
