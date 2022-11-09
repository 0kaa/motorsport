<template>
  <div class="mb-6">
    <h3
      class="rounded-[4px] rounded-bl-none rounded-br-none bg-[#2B2B2B] py-2 text-center text-xs font-bold text-white lg:text-lg"
    >
      KAPCSOLÓDÓ
    </h3>
    <ul class="text-center">
      <li
        v-for="(article, i) in articles"
        :key="i"
        class="bg-[#F4F4F4] p-2 !text-[10px] font-bold lg:!text-[17px]"
        :class="{
          'border-b border-[#BDBDBD]': i !== articles.length - 1,
        }"
      >
        <i class="fa-solid fa-chevron-right"></i>
        <nuxt-link
          class="!text-[10px] font-bold !text-black lg:!text-[17px]"
          :to="{
            name: 'category-article',
            params: {
              category: !category
                ? article.post_categories[0].slug
                : category.slug,
              article: article.slug,
            },
          }"
          v-text="article.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConnectionArticles',
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
    category: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
