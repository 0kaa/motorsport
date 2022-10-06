<template>
  <div class="relative flex flex-col mt-20 mb-5">
    <span
      v-text="'Ajánlott'"
      class="absolute px-8 pt-2 pb-4 font-bold text-white rounded-md -top-10 max-w-max bg-primary text-md"
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
      class="ml-8 max-w-max rounded-md bg-[#2A2A2A] py-3 px-7 text-md font-bold text-white"
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
