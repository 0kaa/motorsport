<template>
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-full px-4 z-100 bg-dark bg-opacity-95"
    @click="close"
  >
    <button
      @click="close"
      class="absolute flex items-center justify-center w-10 h-10 text-black bg-white rounded-full top-4 right-4"
    >
      <i class="fa-solid fa-xmark"></i>
    </button>
    <form
      class="flex w-full max-w-[633px] items-center justify-between gap-2 border-b-2 border-white px-2"
      @submit.prevent="searchSubmit"
      @click.stop
    >
      <button class="text-white" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        class="flex-1 p-2 text-white bg-transparent rounded-none outline-none"
        v-model="searchTerm"
        name="search"
        ref="searchInput"
      />
      <button class="px-2 text-white" @click.prevent="searchTerm = ''">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    searchTerm: '',
  }),
  mounted() {
    this.$refs.searchInput.focus()
  },
  methods: {
    searchSubmit() {
      this.$emit('searchSubmit', this.searchTerm)
      this.searchTerm = ''
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
