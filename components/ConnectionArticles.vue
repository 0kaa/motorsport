<template>
  <div class="mb-6">
    <h3
      class="rounded-[4px] rounded-bl-none rounded-br-none bg-[#2B2B2B] py-2 text-center text-md font-bold text-white lg:text-lg"
    >
      KAPCSOLÓDÓ
    </h3>
    <ul class="">
      <li
        v-for="(article, i) in articles"
        :key="i"
        class="bg-[#F4F4F4] p-2 pl-6 font-bold"
        :class="{
          'border-b border-[#BDBDBD]': i !== articles.length - 1,
        }"
      >
        <nuxt-link
          class="relative !text-md font-bold !text-black !no-underline before:absolute before:-left-4 before:h-full before:w-1 before:bg-[#2B2B2B] lg:!text-[17px]"
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
