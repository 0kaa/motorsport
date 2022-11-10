<template>
  <div class="my-8 px-4 md:h-[210px] lg:mt-10 lg:mb-11 lg:px-7">
    <div class="relative rounded-[4px] md:bg-black">
      <div
        class="article-image absolute top-0 right-0 hidden h-[210px] w-[75%] rounded-[4px] bg-center bg-no-repeat md:block"
      ></div>
      <div class="md:h-[195px] md:rounded-[4px]">
        <div
          class="absolute -top-1.5 left-6 z-10 bg-white px-4 text-md font-bold text-[#AD2D27] before:absolute before:-top-[3px] before:left-0 before:right-0 before:mx-auto before:h-[5px] before:w-[70%] before:bg-white md:-top-4 md:left-20 md:rounded-md md:border-[3px] md:border-primary md:bg-white md:py-1 md:text-lg md:text-black"
        >
          AJÁNLOTT
        </div>

        <div
          class="before:top top-0 right-0 h-full rounded-tl-[4px] border-t-[3px] border-l-[3px] border-black bg-cover pt-5 before:pointer-events-none before:absolute before:left-2.5 before:top-2.5 before:block before:h-[calc(100%_-_10px)] before:w-[calc(100%_-_10px)] before:rounded-tl-[4px] before:border-t-[3px] before:border-l-[3px] before:border-black md:absolute md:w-full md:overflow-hidden md:rounded-[4px] md:pt-0 before:md:hidden"
        >
          <div
            class="article-image top-0 right-0 flex h-full flex-col items-center justify-center gap-10 rounded-[4px] bg-cover px-6 md:absolute md:flex-row md:px-10 md:pr-2 md:text-left lg:justify-between"
          >
            <nuxt-link
              :to="{
                name: 'category-article',
                params: {
                  category: article.post_categories[0].slug,
                  article: article.slug,
                },
              }"
              class="flex-1 hidden w-full text-4xl font-bold text-black underline decoration-primary md:block md:text-4xl md:text-white"
              v-text="article.title"
            />
            <nuxt-link
              :to="{
                name: 'category-article',
                params: {
                  category: article.post_categories[0].slug,
                  article: article.slug,
                },
              }"
              class="w-full text-2xl font-bold text-black underline md:hidden md:w-2/3 md:text-4xl md:text-white md:no-underline"
              v-text="article.title"
            />

            <img
              class="hidden h-[170px] w-[350px] rounded-[4px] object-cover md:block"
              :src="article.featured_image['3x']"
              :alt="article.title"
            />
          </div>
        </div>
      </div>
    </div>
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
<style>
@media (max-width: 768px) {
  .article-image {
    background-image: none !important;
    background-color: transparent !important;
  }
}
</style>
