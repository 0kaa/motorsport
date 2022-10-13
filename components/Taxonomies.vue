<template>
  <div
    class="mt-5 flex flex-col justify-between gap-3 border-b border-[#D9D9D9] lg:flex-row"
  >
    <div class="flex items-center gap-1 lg:gap-4">
      <nuxt-link
        :to="{
          name: 'category',
          params: {
            category: category.slug,
          },
        }"
        class="text-[10px] text-black lg:text-md"
        v-text="category.title"
      />
      <nuxt-link
        :to="{
          name: 'csapatok-team',
          params: {
            team: team.slug,
          },
        }"
        class="border-l border-black pl-2 text-[10px] text-black lg:pl-4 lg:text-md"
        v-text="team.title"
        v-if="team.title"
      />

      <nuxt-link
        :to="{
          name: 'versenyzok-driver',
          params: {
            driver: driver.slug,
          },
        }"
        class="border-l border-black pl-2 text-[10px] text-black lg:pl-4 lg:text-md"
        v-if="driver.title"
        v-text="driver.title"
      />
      <nuxt-link
        :to="{
          name: 'tema-tag',
          params: {
            tag: tag.slug,
          },
        }"
        class="border-l border-black pl-2 text-[10px] text-black lg:pl-4 lg:text-md"
        v-if="tag.title"
        v-text="tag.title"
      />
    </div>
    <div>
      <nuxt-link
        to="/"
        class="hidden items-center gap-3 border border-[#D9D9D9] border-b-transparent px-4 py-2 text-sm lg:flex lg:text-lg"
      >
        <i class="fa-solid fa-house"></i>
        <h3 class="pl-3 font-semibold text-black border-l border-black">
          Kezdőlap
        </h3>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => ({}),
    },
    team: {
      type: Object,
      default: () => ({}),
    },
    driver: {
      type: Object,
      default: () => ({}),
    },
    tag: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
