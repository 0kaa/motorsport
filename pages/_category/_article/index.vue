<template>
  <div class="mt-0 mb-4">
    <Hero class="mb-10 px-4 lg:mb-[74px] lg:px-7" :article="data.article" />
    <div class="flex flex-col-reverse gap-8 px-4 lg:flex-row lg:px-7">
      <div class="sticky h-full lg:-top-[50px] lg:w-[15%]">
        <div
          class="mb-5 inline-block bg-black px-4 py-2.5 text-md font-bold uppercase text-white md:hidden"
        >
          OLVASS TOVÁBB
        </div>
        <div class="flex flex-col gap-6">
          <nuxt-link
            :to="`/${category.slug}/${article.slug}`"
            v-for="(article, i) in data.connectionArticles"
            :key="i"
            class="flex items-end gap-2 lg:block"
          >
            <nuxt-img
              placeholder
              format="webp"
              loading="lazy"
              :src="
                article.featured_image['3x']
                  ? article.featured_image['3x']
                  : '/placeholder.jpeg'
              "
              alt=""
              class="max-h-[65px] min-h-[65px] max-w-[100px] rounded-md object-cover lg:max-h-[130px] lg:min-h-[130px] lg:max-w-full"
            />
            <div>
              <nuxt-link
                :to="{
                  name: 'category',
                  params: {
                    category: !category
                      ? article.post_categories[0].slug
                      : category.slug,
                  },
                }"
                class="text-[10px] font-bold text-black lg:hidden"
                v-text="
                  !category ? article.post_categories[0].title : category.title
                "
              />
              <h3
                class="text-md font-semibold text-black lg:mt-2 lg:mb-4 lg:text-[15px]"
                v-text="article.title"
              ></h3>
            </div>
            <div class="h-px bg-black"></div>
          </nuxt-link>
        </div>
        <div
          class="flex items-center justify-center gap-3 mt-8 lg:justify-between"
        >
          <a
            target="_blank"
            :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
            class="flex items-center justify-center w-10 h-10 text-xl border border-black"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            :href="`https://twitter.com/intent/tweet?text=${data.article.title} &url=${currentUrl}`"
            target="_blank"
            class="flex items-center justify-center w-10 h-10 text-xl border border-black"
          >
            <i class="fa-brands fa-twitter"></i>
          </a>

          <div class="relative">
            <a
              :href="`/${category.slug}/${data.article.slug}`"
              class="flex items-center justify-center w-10 h-10 text-xl border border-black"
              @click.prevent="copyLink(category.slug, data.article.slug)"
            >
              <i class="fa-regular fa-copy"></i>
            </a>
            <transition name="layouts" mode="out-in">
              <div
                v-if="showCopyTooltip"
                class="absolute top-[-35px] left-[-35px] right-0 z-10 w-[110px] bg-white py-1 px-2 text-center text-xs font-bold shadow-lg"
              >
                URL másolva!
              </div>
            </transition>
          </div>
        </div>
        <div class="mt-8">
          <nuxt-link
            to="/"
            class="flex items-center justify-center gap-3 px-4 py-2 text-sm border border-black lg:hidden lg:text-lg"
          >
            <i class="fa-solid fa-house"></i>
            <h3 class="pl-3 font-semibold text-black border-l border-black">
              Kezdőlap
            </h3>
          </nuxt-link>
        </div>
      </div>
      <div class="flex-1">
        <client-only>
          <div class="mb-8">
            <div id="motorsporthu_fekvo_1">
              <component :is="'script'">
                activateBanner('motorsporthu_fekvo_1')
              </component>
            </div>
          </div>
        </client-only>
        <div
          class="relative mb-7 flex items-center justify-between border-b-[10px] border-black after:absolute after:right-0 after:top-full after:h-[150px] after:w-2.5 after:bg-black"
        >
          <a
            href="#"
            class="text-xs font-semibold text-black uppercase lg:text-md"
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
              class="mb-4 text-xl font-bold leading-[1.5] text-black lg:mb-8 lg:text-2xl"
              v-text="data.article.excerpt"
            />
            <client-only>
              <div class="mb-8">
                <div id="motorsporthu_roadblock_1">
                  <component :is="'script'">
                    activateBanner('motorsporthu_roadblock_1')
                  </component>
                </div>
              </div>
            </client-only>
            <RecommendedArticle
              :article="recommendedArticle"
              v-if="
                recommendedArticle &&
                Object.keys(recommendedArticle).length &&
                recommendedArticle.id !== data.article.id
              "
            />

            <div class="article-content mb-7" v-html="articleContent" />
            <ConnectionArticles
              class="connection-component"
              v-if="twoArticles && twoArticles.length"
              :articles="twoArticles"
              :category="category"
            />
            <video-player :options="videoOptions" />

            <Taxonomies
              :category="category"
              :driver="driver"
              :team="team"
              :tag="tag"
            />
            <client-only>
              <div id="motorsporthu_roadblock_2">
                <component :is="'script'">
                  activateBanner('motorsporthu_roadblock_2')
                </component>
              </div>
            </client-only>
          </div>
          <div class="hidden flex-col gap-[50px] lg:flex lg:w-[300px]">
            <!-- <div class="flex-1 lg:max-w-[300px]">
              <client-only>
                <div id="motorsporthu_jobb_1">
                  <component :is="'script'">
                    activateBanner('motorsporthu_jobb_1')
                  </component>
                </div>
              </client-only>
            </div> -->
            <Standings
              :standings="standings"
              :series="series"
              @selected="getStandingsBySeries"
            />
            <div class="flex-1 lg:max-w-[300px]">
              <client-only>
                <div id="motorsporthu_jobb_1">
                  <component :is="'script'">
                    activateBanner('motorsporthu_jobb_1')
                  </component>
                </div>
              </client-only>
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
        params.article,
        1
      )
      return {
        data: data.data,
        standings: data.data.standings,
        series: data.data.series,
        recommendedArticle: data.data.recommendedArticle,
        twoArticles: data.data.twoArticles,
      }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
  data: () => ({
    showCopyTooltip: false,
    currentUrl: '',
    videoOptions: {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      breakpoints: {
        tiny: 300,
        xsmall: 400,
        small: 500,
        medium: 600,
        large: 700,
        xlarge: 800,
        huge: 900,
      },
      poster: '/mclaren_subteacher.jpeg',

      sources: [
        {
          src: 'https://linerdisk.b-cdn.net/mcLaren_subteacher.mp4',
          type: 'video/mp4',
        },
      ],
    },
  }),

  mounted() {
    this.currentUrl = window.location.href
    if (window.instgrm) window.instgrm.Embeds.process()
    const oldScript = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    )
    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript)
    }
    var script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)
    // add component before last 2 paragraphs
    const articleContent = document.querySelector('.article-content')

    const thirdParagraph =
      articleContent.querySelectorAll('.article-content p')[2]

    const firstParagraph =
      articleContent.querySelectorAll('.article-content p')[0]

    const connectionComponent = document.querySelector('.connection-component')
    const recommendedArticle = document.querySelector('.recommended-article')

    if (connectionComponent) {
      thirdParagraph.parentNode.insertBefore(
        connectionComponent,
        thirdParagraph.nextSibling
      )
    }
    if (recommendedArticle) {
      firstParagraph.parentNode.insertBefore(
        recommendedArticle,
        firstParagraph.nextSibling
      )
    }

    // auto play video.js when visible in viewport playsinline
    const videoPlayer = document.querySelector('.video-js')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoPlayer.play()
          } else {
            videoPlayer.pause()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(videoPlayer)
  },
  methods: {
    async copyLink() {
      try {
        await navigator.clipboard.writeText(window.location.href)
        this.showCopyTooltip = true
        setTimeout(() => {
          this.showCopyTooltip = false
        }, 2000)
      } catch ($e) {
        console.log($e)
      }
    },
    async getStandingsBySeries(serie) {
      try {
        await this.$api.standings.getStandings(serie).then((res) => {
          this.standings = res.data.data
        })
      } catch (error) {}
    },
  },
  head() {
    const link = this.data.article.post_categories.find(
      (cat) => cat.slug == this.$route.params.category
    )
    const title = this.data.article.title
    const slug = this.data.article.slug
    const excerpt = this.data.article.excerpt
    const teams = this.data.article.teams
    const drivers = this.data.article.drivers
    const races = this.data.article.races
    const tags = this.data.article.tags
    const all = tags.concat(drivers, teams, races)
    let keywords = []
    let meta = [
      {
        hid: 'description',
        name: 'description',
        content: excerpt,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Motorsport.hu',
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
        hid: 'og:url',
        property: 'og:url',
        content: `https://motorsport.hu/${link.slug}/${slug}`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: excerpt,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: this.data.article.featured_image.url
          ? this.data.article.featured_image.url
          : 'https://motorsport.hu/placeholder.jpeg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'article:published_time',
        name: 'article:published_time',
        content: this.data.article.published_at,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@msport_hu',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: excerpt,
      },
    ]
    all.forEach((item, i) => {
      if (item) {
        meta.push({
          hid: `article:tag:${i}`,
          name: `article:tag:${i}`,
          content: item.title,
        })
        keywords.push(item.title)
      }
    })
    meta.push({
      hid: 'keywords',
      name: 'keywords',
      content: keywords.join(', '),
    })
    return {
      title,
      meta,
      link: [
        {
          rel: 'canonical',
          href: `https://motorsport.hu/${link.slug}/${slug}`,
        },
      ],
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://motorsport.hu',
        headline: this.data.article.title,
        image: [
          this.data.article.featured_image.url
            ? this.data.article.featured_image.url
            : 'https://motorsport.hu/placeholder.jpeg',
        ],
        datePublished: this.data.article.published_at,
        dateModified: this.data.article.updated_at,
        author: [
          {
            '@type': 'Person',
            name: this.data.article.post_author.name,
          },
        ],
        publisher: {
          '@type': 'Organization',
          name: 'Motorsport.hu',
          logo: {
            '@type': 'ImageObject',
            url: 'https://motorsport.hu/logo.png',
          },
        },
      },
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
  @apply mb-[30px] text-lg font-normal leading-[1.55] lg:text-lg;
}

.article-content blockquote {
  @apply mb-3 text-xs font-normal italic underline decoration-[#FF8686] decoration-[4px] lg:mb-7 lg:text-lg;
}
.article-content iframe {
  @apply !mx-auto !min-w-max max-w-full overflow-x-hidden lg:!w-[81%];
}
.article-content .instagram-media,
.article-content .twitter-tweet {
  @apply !mb-3 lg:!mb-7;
}

.twitter-tweet {
  @apply !mx-auto;
}
.article-content .embed-youtube {
  @apply mb-3 h-[300px] lg:mb-7;
}
.article-content a {
  @apply text-lg font-semibold text-primary underline;
}
</style>
