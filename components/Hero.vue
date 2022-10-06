<template>
  <div
    v-if="article && Object.keys(article).length"
    class="relative z-10 lg:grid lg:min-h-[500px] lg:grid-cols-2"
    :class="{
      'gap-1': home,
    }"
  >
    <div
      v-if="home"
      class="absolute -top-3 right-3 z-[-1] hidden h-[70%] w-5 rounded-t-xl bg-black lg:block"
    ></div>
    <div
      v-if="home"
      class="absolute -top-3 right-3 z-[-1] hidden h-5 w-[215px] rounded-tr-lg bg-primary lg:block"
    ></div>
    <div class="relative z-10">
      <div class="h-full">
        <img
          :src="
            article.featured_image.url
              ? article.featured_image.url
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
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-[90%] w-5 bg-black lg:block"
      ></div>
      <div
        v-if="!home"
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-5 w-[90%] bg-black lg:block"
      ></div>
      <div
        v-if="home"
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-[70%] w-5 rounded-b-xl bg-black lg:block"
      ></div>
      <div
        v-if="home"
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-5 w-[215px] rounded-bl-lg bg-primary lg:block"
      ></div>
    </div>
    <div
      class="relative z-10 flex flex-1 flex-col items-start justify-center bg-[#151515] px-5 py-5 md:py-0 md:pl-10 md:pr-14"
    >
      <div class="flex items-center gap-2 mb-5 md:gap-5">
        <nuxt-link
          :to="{
            name: 'category',
            params: {
              category: !category
                ? article.post_categories[0].slug
                : category.slug,
            },
          }"
          class="text-white category-link"
          v-text="!category ? article.post_categories[0].title : category.title"
        />

        <nuxt-link
          :to="{
            name: 'teams-team',
            params: {
              team: !team ? article.teams[0].slug : team.slug,
            },
          }"
          class="text-white uppercase category-link"
          v-text="!team ? article.teams[0].title : team.title"
          :style="`border-color:${!team ? article.teams[0].color : team.color}`"
          v-if="article && article.teams.length"
        />
      </div>

      <h2
        class="mb-5 text-xl font-bold text-white underline lg:mb-10 lg:leading-[1.1] lg:tracking-[-2%]"
        :class="{
          'lg:text-[38px]': home,
          'lg:text-[42px]': !home,
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
        class="text-xs font-medium text-white lg:text-lg"
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
