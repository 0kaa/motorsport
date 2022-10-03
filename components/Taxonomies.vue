<template>
  <div
    class="flex flex-col justify-between gap-3 border-b border-[#D9D9D9] lg:flex-row"
  >
    <div class="flex items-center gap-2 lg:gap-4">
      <nuxt-link
        :to="{
          name: 'category',
          params: {
            category: category.slug,
          },
        }"
        class="text-xs text-black lg:text-md"
        v-text="category.title"
      />
      <a
        href="#"
        class="pl-2 text-xs text-black border-l border-black lg:pl-4 lg:text-md"
        v-text="team.title"
        v-if="team.title"
      />
      <a
        href="#"
        class="pl-2 text-xs text-black border-l border-black lg:pl-4 lg:text-md"
        v-if="driver.title"
        v-text="driver.title"
      />
      <a
        href="#"
        class="pl-2 text-xs text-black border-l border-black lg:pl-4 lg:text-md"
        v-if="tag.title"
        v-text="tag.title"
      />
    </div>
    <div>
      <nuxt-link
        to="/"
        class="flex items-center gap-3 border border-[#D9D9D9] border-b-transparent px-4 py-2 text-sm lg:text-lg"
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
