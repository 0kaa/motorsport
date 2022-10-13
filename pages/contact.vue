<template>
  <div
    class="mt-5 mb-20 flex w-full max-w-[893px] flex-col items-center justify-center px-4 lg:mt-28"
  >
    <h1 class="mb-4 text-2xl font-bold lg:mb-8 lg:text-5xl">Kapcsolat</h1>
    <span class="block w-full h-px mb-4 bg-primary lg:mb-8" />
    <form
      class="flex flex-col w-full gap-5 lg:gap-10"
      @submit.prevent="submitContactUs"
    >
      <div class="flex flex-col gap-1">
        <label class="font-semibold text-black text-md">ÜZENET TÁRGYA</label>
        <select
          v-model="contactUs.subject"
          class="rounded-[4px] border border-[#D8D8D8] py-2 px-2 pr-6 text-md"
        >
          <option value="contact" selected>Kapcsolat</option>
          <option value="advertising">Hirdetés</option>
        </select>
      </div>

      <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-2">
        <div class="flex flex-col gap-1">
          <label class="font-semibold text-black text-md">TELJES NÉV</label>
          <input
            v-model="contactUs.name"
            type="text"
            name="name"
            class="rounded-[4px] border border-[#D8D8D8] py-2 px-2 pr-6 text-md"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="font-semibold text-black text-md">E-MAIL</label>
          <input
            v-model="contactUs.email"
            type="email"
            name="email"
            class="rounded-[4px] border border-[#D8D8D8] py-2 px-2 pr-6 text-md"
          />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label class="font-semibold text-black text-md">ÜZENET</label>
        <textarea
          v-model="contactUs.message"
          class="resize-none rounded-[4px] border border-[#D8D8D8] py-2 px-2 pr-6 text-md"
          rows="8"
        />
      </div>
      <div class="flex justify-center gap-1">
        <button
          type="submit"
          class="w-full rounded-[4px] border border-primary bg-white p-4 text-md font-bold text-black transition-all duration-300 ease-in-out hover:bg-primary hover:text-white lg:max-w-[323px]"
        >
          KÜLDÉS
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
    contactUs: {
      subject: 'contact',
      name: '',
      email: '',
      message: '',
    },
  }),
  methods: {
    async submitContactUs() {
      this.$toast.success('Köszönjük, hogy felkereste minket!')

      // await this.$api.contact
      //   .submitContactUs(this.contactUs)
      //   .then((res) => {
      //     this.$toast.success(res.data.message)
      //     this.contactUs = {
      //       subject: 'contact',
      //       name: '',
      //       email: '',
      //       message: '',
      //     }
      //   })
      //   .catch((err) => {
      //     this.$toast.error(err.response.data.message)
      //   })
    },
  },
}
</script>
