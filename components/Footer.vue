<template>
  <div class="flex flex-wrap items-center justify-between gap-4 p-4 bg-black">
    <div
      class="grid flex-1 grid-cols-2 flex-col flex-wrap gap-6 lg:flex lg:flex-row lg:gap-2 lg:divide-x-2 lg:divide-[#C0C0C0]"
    >
      <nuxt-link
        to="/"
        class="hidden text-xs font-bold text-white lg:block lg:text-sm"
        v-text="''"
      />
      <nuxt-link
        to="/impresszum"
        class="pl-2 text-xs font-bold text-white lg:text-sm"
        v-text="'Impresszum'"
      />
      <nuxt-link
        to="/adatkezelesi-tajekoztato"
        class="pl-2 text-xs font-bold text-white lg:text-sm"
        v-text="'Adatkezelési tájékoztató'"
      />
      <nuxt-link
        to="/szerzoi-jogok"
        v-text="'Szerzői jogok'"
        class="pl-2 text-xs font-bold text-white lg:text-sm"
      />
      <nuxt-link
        to="cookie-szabalyzat"
        v-text="'Cookie-szabályzat'"
        class="pl-2 text-xs font-bold text-white lg:text-sm"
      />
      <nuxt-link
        to="contact"
        v-text="'Kapcsolat'"
        class="pl-2 text-xs font-bold text-white lg:text-sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
