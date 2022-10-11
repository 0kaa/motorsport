<template>
  <div class="my-8 px-4 md:h-[210px] lg:mt-10 lg:mb-11 lg:px-7">
    <div class="relative rounded-[4px] md:bg-black">
      <div
        :style="`background-image:url('${article.featured_image.url}')`"
        class="article-image absolute top-0 right-0 hidden h-[210px] w-[75%] rounded-[4px] bg-cover bg-bottom bg-no-repeat md:block"
      ></div>
      <div class="md:h-[210px] md:rounded-[4px]">
        <div
          class="absolute -top-1.5 left-6 z-10 bg-white px-4 text-md font-bold text-[#AD2D27] before:absolute before:right-0 before:top-0 before:hidden before:h-4 before:w-4 before:rounded-tr-[4px] before:border-t-[3px] before:border-r-[3px] before:border-primary after:absolute after:left-0 after:top-0 after:hidden after:h-4 after:w-4 after:rounded-tr-sm after:rounded-tl-[4px] after:border-t-[3px] after:border-l-[3px] after:border-primary md:-top-4 md:left-20 md:rounded-md md:bg-[#ECECEC] md:py-1 md:text-lg md:text-black before:md:block after:md:block"
        >
          AJÁNLOTT
        </div>

        <div
          class="before:top top-0 right-0 h-full rounded-tl-[4px] border-t-[3px] border-l-[3px] border-black bg-cover pt-5 before:pointer-events-none before:absolute before:left-2.5 before:top-2.5 before:block before:h-[calc(100%_-_10px)] before:w-[calc(100%_-_10px)] before:rounded-tl-[4px] before:border-t-[3px] before:border-l-[3px] before:border-black md:absolute md:w-full md:overflow-hidden md:rounded-[4px] md:pt-0 before:md:hidden"
        >
          <div
            class="article-image top-0 right-0 flex h-full flex-col items-center justify-center gap-5 rounded-[4px] bg-cover px-6 md:absolute md:flex-row md:px-10 md:text-left lg:justify-between"
            :style="`background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%); background-color: #0000009e;`"
          >
            <h3
              v-text="article.title"
              class="hidden w-full text-2xl font-bold text-black underline md:block md:w-2/3 md:text-4xl md:text-white md:no-underline"
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

            <nuxt-link
              :to="{
                name: 'category-article',
                params: {
                  category: article.post_categories[0].slug,
                  article: article.slug,
                },
              }"
              class="hidden items-center gap-3 rounded-md bg-[#ECECEC] py-2 px-4 text-sm font-bold text-black md:flex md:py-3.5 md:px-8 md:text-lg"
            >
              <span>ELOLVASOM</span>
              <i class="fa-solid fa-right-long"></i>
            </nuxt-link>
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
