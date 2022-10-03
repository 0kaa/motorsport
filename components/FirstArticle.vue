<template>
  <div class="relative mt-10 mb-11 px-7">
    <div
      :style="`background-image:url('${article.featured_image.url}')`"
      class="rounded-[4px] bg-cover bg-left bg-no-repeat"
    >
      <div
        class="absolute -top-4 left-20 z-10 rounded-md bg-[#ECECEC] py-1 px-4 text-lg font-bold text-black before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-tr-[4px] before:border-t-[3px] before:border-r-[3px] before:border-primary after:absolute after:left-0 after:top-0 after:h-4 after:w-4 after:rounded-tr-sm after:rounded-tl-[4px] after:border-t-[3px] after:border-l-[3px] after:border-primary"
      >
        AJÁNLOTT
      </div>
      <div
        class="flex items-center justify-between rounded-[4px] bg-gradient-to-r from-black px-10 py-20 opacity-90"
      >
        <h3
          v-text="article.title"
          class="w-2/3 text-4xl font-bold text-white"
        />
        <nuxt-link
          :to="{
            name: 'category-article',
            params: {
              category: article.post_categories[0].slug,
              article: article.slug,
            },
          }"
          class="flex items-center gap-3 rounded-md bg-[#ECECEC] py-3.5 px-8 text-lg font-bold text-black"
        >
          <span>ELOLVASOM</span>
          <i class="fa-solid fa-right-long"></i>
        </nuxt-link>
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
