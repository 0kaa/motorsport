<template>
  <div class="my-8 h-[210px] px-4 lg:mt-10 lg:mb-11 lg:px-7">
    <div class="relative rounded-[4px] bg-black">
      <div
        :style="`background-image:url('${article.featured_image.url}')`"
        class="absolute top-0 right-0 h-[210px] w-[75%] rounded-[4px] bg-cover bg-bottom bg-no-repeat"
      ></div>
      <div class="h-[210px] rounded-[4px]">
        <div
          class="absolute -top-4 left-20 z-10 rounded-md bg-[#ECECEC] py-1 px-4 text-lg font-bold text-black before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-tr-[4px] before:border-t-[3px] before:border-r-[3px] before:border-primary after:absolute after:left-0 after:top-0 after:h-4 after:w-4 after:rounded-tr-sm after:rounded-tl-[4px] after:border-t-[3px] after:border-l-[3px] after:border-primary"
        >
          AJÁNLOTT
        </div>
        <div
          class="absolute top-0 right-0 h-full w-full overflow-hidden rounded-[4px] bg-cover"
        >
          <div
            class="absolute top-0 right-0 flex h-full flex-col items-center justify-between gap-5 rounded-[4px] bg-cover px-6 md:flex-row md:px-10"
            :style="`background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%); background-color: #0000009e;`"
          >
            <h3
              v-text="article.title"
              class="w-full text-xl font-bold text-white md:w-2/3 md:text-4xl"
            />
            <nuxt-link
              :to="{
                name: 'category-article',
                params: {
                  category: article.post_categories[0].slug,
                  article: article.slug,
                },
              }"
              class="flex items-center gap-3 rounded-md bg-[#ECECEC] py-2 px-4 text-sm font-bold text-black md:py-3.5 md:px-8 md:text-lg"
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
