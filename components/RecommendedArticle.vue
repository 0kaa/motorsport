<template>
  <div class="recommended-article relative mt-16 mb-[30px] flex flex-col">
    <span
      v-text="'Ajánlott'"
      class="absolute px-8 pt-2 pb-4 font-bold text-white -top-10 max-w-max bg-primary text-md"
    />
    <nuxt-link
      :to="{
        name: 'category-article',
        params: {
          category: article.post_categories[0].slug,
          article: article.slug,
        },
      }"
      v-text="article.title"
      class="z-10 ml-8 bg-black py-2 px-2.5 !text-md !text-white !no-underline lg:py-3 lg:px-7 lg:font-bold"
    />
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
