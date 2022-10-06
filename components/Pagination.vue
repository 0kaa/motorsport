<template>
  <div class="flex justify-center">
    <div
      class="flex items-center justify-center rounded-[4px] border border-black"
    >
      <button
        class="relative h-full py-1 px-2 text-xs font-light text-black transition-all ease-in-out after:absolute after:top-0 after:right-0 after:h-full after:w-px after:skew-x-[-20deg] after:bg-black hover:text-primary disabled:text-gray-300 lg:py-3 lg:px-4 lg:text-xl"
        :disabled="currentPage == 1 || buttonDisabled"
        @click="prev"
      >
        <i class="fa-solid fa-chevron-left"></i>
        <i class="fa-solid fa-chevron-left"></i>
      </button>

      <button
        v-for="i in limit.slice(
          currentPage < 4 ? 0 : currentPage - 3,
          currentPage < 4 ? 6 : currentPage + 3
        )"
        :key="i"
        v-text="i"
        class="relative py-1 pl-2 pr-3 text-sm font-bold text-black after:absolute after:top-0 after:right-0 after:h-full after:w-px after:skew-x-[-20deg] after:bg-black hover:text-primary lg:py-3 lg:pl-4 lg:pr-6 lg:text-[26px]"
        :class="{
          'text-primary': i == currentPage,
        }"
        @click="paginate(i)"
        :disabled="i == currentPage || buttonDisabled"
      />
      <button
        class="relative h-full px-2 py-1 text-xs font-light text-black transition-all ease-in-out hover:text-primary disabled:text-gray-300 lg:px-4 lg:py-3 lg:text-xl"
        :disabled="currentPage == totalPages || buttonDisabled"
        @click="next"
      >
        <i class="fa-solid fa-chevron-right"></i>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      default: 40,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    buttonDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    limit() {
      let list = []
      for (let i = 1; i <= this.totalPages; i++) {
        list.push(i)
      }
      return list
    },
  },
  methods: {
    paginate(i) {
      this.$emit('select', i)
    },
    next() {
      this.$emit('select', this.currentPage + 1)
    },
    prev() {
      this.$emit('select', this.currentPage - 1)
    },
  },
}
</script>
