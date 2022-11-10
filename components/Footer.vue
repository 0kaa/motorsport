<template>
  <div
    class="flex flex-wrap items-center justify-between gap-4 py-6 bg-black px-7"
  >
    <div class="flex flex-wrap gap-2 divide-x-2 divide-[#C0C0C0]">
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
