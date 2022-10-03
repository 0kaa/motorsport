<template>
  <div>
    <div
      class="px-4 py-4 overflow-hidden text-white bg-black lg:px-10 lg:py-10"
    >
      <slick ref="slick" :options="slickOptions">
        <a href="#"
          ><img
            src="/oracle.png"
            alt="oracle"
            class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img
            src="/ferrari.png"
            alt="ferrari"
            class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img src="/amg.png" alt="amg" class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img src="/bwt.png" alt="bwt" class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img
            src="/mclaren.png"
            alt="mclaren"
            class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img
            src="/oracle.png"
            alt="oracle"
            class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img
            src="/ferrari.png"
            alt="ferrari"
            class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img src="/amg.png" alt="amg" class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img src="/bwt.png" alt="bwt" class="object-cover w-full h-full"
        /></a>
        <a href="#"
          ><img
            src="/mclaren.png"
            alt="mclaren"
            class="object-cover w-full h-full"
        /></a>
        <!-- <template v-slot:prev>
                    <button class="">
                        Prev
                    </button>
                </template>
                <template v-slot:next>
                    <button>
                        Next
                    </button>
                </template> -->
      </slick>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
  data: () => ({
    slickOptions: {
      slidesToShow: 5,
      infinite: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
}
</script>
