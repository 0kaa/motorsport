<template>
  <div
    :class="{
      'gap-[18px] lg:flex': inline,
    }"
  >
    <div class="relative z-10" v-if="article">
      <div
        v-if="highlight"
        class="absolute -top-1.5 -left-1.5 z-[-1] h-[80%] w-2 rounded-tl-lg bg-[#ED1C24]"
      ></div>
      <div
        v-if="highlight"
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
        class="block overflow-hidden rounded-[4px]"
      >
        <img
          v-if="article.featured_image"
          :src="
            article.featured_image['4x']
              ? article.featured_image['4x']
              : '/placeholder.jpeg'
          "
          alt="article"
          class="object-cover w-full h-full"
          :class="{
            'max-h-[175px] min-h-[175px]': size == 'sm' && !inline,
            'max-h-[175px] min-h-[175px] lg:max-h-[166px] lg:w-[295px]': inline,
          }"
        />
      </nuxt-link>
      <div class="absolute flex items-center gap-2 -bottom-5">
        <nuxt-link
          :to="{
            name: 'category',
            params: {
              category: !category
                ? article.post_categories[0].slug
                : category.slug,
            },
          }"
          class="border-b-[3px] border-[#CF0000] bg-white px-1 py-0.5 text-[13px] font-bold text-black"
          v-text="!category ? article.post_categories[0].title : category.title"
        />
        <nuxt-link
          :to="{
            name: 'csapatok-series-team',
            params: {
              team: !team ? article.teams[0].slug : team.slug,
              series: !team
                ? article.teams[0].taxonomny_slug
                : team.taxonomny_slug,
            },
          }"
          v-if="article.teams.length"
          class="border-b-[3px] bg-white px-1 py-0.5 text-[13px] font-bold uppercase text-black"
          :style="`border-color:${!team ? article.teams[0].color : team.color}`"
          v-text="!team ? article.teams[0].title : team.title"
        />
      </div>
    </div>
    <div class="flex-1">
      <nuxt-link
        :to="{
          name: 'category-article',
          params: {
            category: !category
              ? article.post_categories[0].slug
              : category.slug,
            article: article.slug,
          },
        }"
      >
        <h3
          class="mt-8 font-bold text-black excerpt"
          :class="{
            'text-lg lg:text-[22px] lg:leading-[26px]': size == 'sm',
            'text-xl lg:pr-14 lg:text-4xl': size == 'lg',
            'lg:!mt-0 lg:!pr-0': inline,
          }"
        >
          {{ article.title }}
        </h3>
      </nuxt-link>
      <p
        v-if="excerpt && article.excerpt"
        class="mt-3 excerpt lg:pr-12"
        :class="{
          'text-sm font-normal lg:text-md': size == 'lg',
        }"
      >
        {{ article.excerpt }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
    size: {
      type: String,
      default: 'sm',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    excerpt: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    highlight() {
      return this.article.post_settings.find(
        (setting) => setting.key == 'highlight_green'
      ).value == '0'
        ? false
        : true
    },

    category() {
      return this.article.post_categories.find(
        (cat) => cat.slug == this.$route.params.category
      )
    },
    team() {
      return this.article.teams.find(
        (team) => team.slug == this.$route.params.team
      )
    },
  },
}
</script>
