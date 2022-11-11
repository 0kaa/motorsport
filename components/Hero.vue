<template>
  <div
    v-if="article && Object.keys(article).length"
    class="relative z-10 lg:grid lg:min-h-[450px] lg:grid-cols-2"
    :class="{
      'gap-1': home,
      'flex flex-col-reverse': !home,
    }"
  >
    <div
      v-if="home"
      class="absolute -top-1.5 right-[30px] z-[-1] hidden h-[70%] w-2.5 rounded-t-xl bg-black lg:block"
    ></div>
    <div
      v-if="home"
      class="absolute -top-2.5 right-[30px] z-[-1] hidden h-2.5 w-[360px] rounded-tr-lg bg-primary lg:block"
    ></div>

    <div class="relative z-10">
      <div class="h-full">
        <img
          :src="
            article.featured_image['6x']
              ? article.featured_image['6x']
              : '/placeholder.jpeg'
          "
          alt="hero image"
          class="object-cover w-full h-full"
        />
        <div
          v-if="article.image_credit"
          class="absolute flex items-center justify-center gap-1 px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded-md bottom-2 right-2"
        >
          <i class="fa-solid fa-camera"></i>
          <span>{{ article.image_credit }}</span>
        </div>
      </div>
      <div
        v-if="!home"
        class="absolute -bottom-2.5 -left-2.5 z-[-1] hidden h-[90%] w-2.5 bg-black lg:block"
      ></div>
      <div
        v-if="!home"
        class="absolute -bottom-2.5 -left-2.5 z-[-1] hidden h-2.5 w-[90%] bg-black lg:block"
      ></div>
      <div
        v-if="home"
        class="absolute -bottom-1.5 -left-2.5 z-[-1] hidden h-[70%] w-2.5 rounded-b-xl bg-black lg:block"
      ></div>
      <div
        v-if="home"
        class="absolute -bottom-2.5 -left-2.5 z-[-1] hidden h-2.5 w-[360px] rounded-bl-lg bg-primary lg:block"
      ></div>
    </div>
    <div
      class="relative z-10 flex flex-col items-start justify-center flex-1 md:py-0 md:pl-10 md:pr-14"
      :class="{
        'md:border md:border-black lg:bg-white': home,
        'lg:bg-[#151515]': !home,
      }"
    >
      <div class="flex items-center gap-2 mb-3 md:gap-5 lg:mb-5">
        <nuxt-link
          :to="{
            name: 'category',
            params: {
              category: !category
                ? article.post_categories[0].slug
                : category.slug,
            },
          }"
          class="category-link"
          :class="{
            'lg:text-black': home,
            '!text-[13px] md:text-xl lg:text-white': !home,
          }"
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
          class="uppercase category-link"
          :class="{
            'lg:text-black': home,
            '!text-[13px] md:text-xl lg:text-white': !home,
          }"
          v-text="!team ? article.teams[0].title : team.title"
          :style="`border-color:${!team ? article.teams[0].color : team.color}`"
          v-if="article && article.teams.length"
        />
      </div>

      <h2
        class="mb-5 font-bold text-black lg:mb-10 lg:tracking-[-2%] lg:underline"
        :class="{
          'text-xl leading-[1.3] lg:text-[38px] lg:text-black': home,
          'text-[26px] leading-[1.2] lg:text-[42px] lg:text-white': !home,
        }"
      >
        <nuxt-link
          :to="{
            name: 'category-article',
            params: {
              category: article.post_categories[0].slug,
              article: article.slug,
            },
          }"
          v-if="home"
          v-text="article.title"
        />
        <span v-else v-text="article.title"></span>
      </h2>
      <p
        v-if="home"
        class="text-md font-medium leading-[1.4] text-black lg:text-lg"
        v-text="article.excerpt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    home: {
      type: Boolean,
      default: false,
    },
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
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
