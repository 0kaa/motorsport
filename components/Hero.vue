<template>
  <div
    v-if="article && Object.keys(article).length"
    class="lg:grid lg:min-h-[500px] lg:grid-cols-2"
    :class="{
      'gap-2': home,
    }"
  >
    <div class="relative z-10">
      <div class="h-full">
        <img
          :src="
            article.featured_image
              ? article.featured_image.url
              : '/single-article.jpg'
          "
          alt="hero image"
          class="object-cover w-full h-full"
        />
      </div>
      <div
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-[90%] w-5 bg-black lg:block"
      ></div>
      <div
        class="absolute -bottom-3 -left-3 z-[-1] hidden h-5 w-[90%] bg-black lg:block"
      ></div>
    </div>
    <div
      class="z-20 flex flex-col items-start justify-center flex-1 px-5 py-5 bg-black md:py-0 md:pl-10 md:pr-14"
    >
      <div class="flex items-center gap-2 mb-5 md:gap-5">
        <nuxt-link
          :to="{
            name: 'category',
            params: {
              category: home ? article.post_categories[0].slug : category.slug,
            },
          }"
          class="text-white category-link"
          v-text="home ? article.post_categories[0].title : category.title"
        />

        <a
          href="#"
          class="text-white category-link"
          v-text="article.teams[0].title"
          :style="`border-color:${article.teams[0].color}`"
          v-if="article && article.teams.length"
        />
      </div>

      <h2
        class="mb-5 text-xl font-bold text-white underline lg:mb-10 lg:text-[40px] lg:leading-[1.1] lg:tracking-[-2%]"
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
  },
}
</script>
