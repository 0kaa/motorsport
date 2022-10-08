<template>
  <div
    class="flex flex-col items-center justify-center px-4 mt-5 mb-20 text-center lg:mt-28 lg:px-7"
  >
    <h1 class="mb-4 text-2xl font-bold lg:mb-8 lg:text-5xl">Impresszum</h1>
    <span class="block w-10/12 h-px mb-4 bg-primary lg:mb-8" />
    <div>
      <h3 v-text="'Főszerkesztő:'" class="static-title" />
      <h4 v-text="'Törő Ferenc'" class="static-value"></h4>

      <h3 v-text="'Szerkesztők:'" class="static-title" />
      <h4 v-text="'Kiss Sándor'" class="static-value"></h4>
      <h4 v-text="'Hegedüs László'" class="static-value"></h4>
      <h4 v-text="'Kovács József'" class="static-value"></h4>

      <h3 v-text="'Kiadó:'" class="static-title" />
      <h4 v-text="'Liner Media Group Kft.'" class="static-value"></h4>
      <h4 v-text="'6728 Szeged, Bajai u. 2/A'" class="static-value"></h4>
      <h4
        v-text="'Kiadásért felelős személy: Lakatos István'"
        class="static-value"
      ></h4>
      <h4
        v-text="'Szerkesztésért felelős személy: Lakatos István'"
        class="static-value"
      ></h4>

      <h3 v-text="'Kapcsolat:'" class="static-title" />
      <h4 v-text="'info@motorsport.hu'" class="static-value"></h4>

      <h3 v-text="'Szabályozó szervezet:'" class="static-title" />
      <h4
        v-text="
          'Nemzeti Média- és Hírközlési Hatóság, 1015 Budapest, Ostrom u. 23-25.'
        "
        class="static-value"
      ></h4>
      <h4
        v-text="'Levelezési cím: 1525 Budapest Pf. 75.'"
        class="static-value"
      ></h4>
      <h4
        v-text="'Telefon: (+36 1) 457 7100, fax: (+36 1) 356 5520'"
        class="static-value"
      ></h4>
      <h4 v-text="'E-mail: info@nmhh.hu'" class="static-value"></h4>
      <h4 v-text="'www.nmhh.hu'" class="static-value"></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Impresszum',
}
</script>

<style>
.static-title {
  @apply mb-3 text-sm font-bold text-primary lg:text-lg;
}
.static-value {
  @apply mb-3 text-sm font-light text-black lg:text-lg;
}
</style>
