<template>
  <div class="mt-5 mb-20">
    <FirstArticle v-if="firstArticle" :article="firstArticle" />
    <Hero
      class="mb-[74px] px-7"
      home
      :article="stickyArticle !== null ? stickyArticle : featuredArticle"
    />

    <div class="mb-[55px] flex gap-5 px-7">
      <div class="grid flex-1 grid-cols-3 gap-x-5 gap-y-14">
        <ArticleCard
          v-for="(article, i) in data.slice(0, 6)"
          :key="i"
          :article="article"
        />
      </div>
      <div class="max-w-[300px] flex-1 bg-black">
        <img src="/ad-1.png" alt="ad" class="object-cover w-full h-full" />
      </div>
    </div>
    <Clients class="mb-[55px]" />
    <section class="mb-[55px] px-7">
      <InlineTitle title="TOVÁBBI HÍREINK" />
      <div class="mt-8 mb-[64px] grid grid-cols-2 gap-5">
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
      <div class="grid flex-1 grid-cols-4 gap-x-5">
        <ArticleCard
          v-for="(article, i) in data.slice(10, 14)"
          :key="i"
          :article="article"
        />
      </div>
    </section>
    <Schedule :races="races" :series="series" @select="getRaces" />
    <section class="mt-[55px] flex bg-black py-[50px] pr-6 pl-9 text-white">
      <div class="relative z-10 mt-10 w-[30%]">
        <h2 class="mb-5 text-[88px] font-bold text-white">LEVEZETŐ</h2>
        <p class="text-4xl font-bold">
          „A Red Bull sem mindig hoz jó döntéseket“
        </p>
      </div>
      <div class="overflow-hidden rounded-[4px] border-[3px] border-white">
        <img src="/levezeto.jpg" alt="levezeto" class="" />
      </div>
    </section>
    <section class="mx-3 mt-[55px] border border-black p-5">
      <div class="inline-flex items-end gap-4 mb-8 border-b border-black">
        <h2 class="text-3xl italic font-bold text-black">
          LEGOLVASOTTABB CIKKEK
        </h2>
        <h3 class="text-lg italic font-bold text-primary">
          AZ ELMÚLT 24 ÓRÁBÓL
        </h3>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div
          class="flex gap-5"
          v-for="(article, i) in data.slice(14, 20)"
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
            <img
              :src="article.featured_image.url"
              alt="article"
              class="h-[92px] w-[140px] object-cover"
            />
          </nuxt-link>
          <div class="flex flex-col justify-between flex-1 h-full">
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
                class="text-[22px] font-bold italic text-black"
                v-text="article.title"
              />
            </nuxt-link>
            <div class="flex gap-3 text-xs italic font-medium text-black">
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
  async asyncData({ $api, params, redirect }) {
    try {
      const { data } = await $api.articles.getArticles()
      const series = await $api.series.getSeries()
      return {
        data: data.posts,
        firstArticle: data.first_article,
        series: series.data.data,
        stickyArticle: data.sticky_article,
        featuredArticle: data.featured_article,
        races: data.races,
      }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  methods: {
    async getRaces(id) {
      await this.$api.races.getRaces(id).then((res) => {
        this.races = res.data.data
      })
    },
  },
}
</script>
