<template>
    <div>
        <div class="flex items-center justify-between px-7">
            <div class="flex items-center gap-2 mb-4">
                <img src="/calendar.png" alt="calendar" />
                <h3 class="text-xl font-bold text-black">MENETREND</h3>
            </div>
            <div class="flex items-center gap-[18px]">
                <button class="text-xl font-medium text-black uppercase">FORMA-1</button>
                <button class="text-xl font-medium text-[#ABABAB] uppercase">FORMA-2</button>
                <button class="text-xl font-medium text-[#ABABAB] uppercase">MOTOGP</button>
            </div>
        </div>
        <div class="px-10 overflow-hidden text-white bg-black py-7">
            <carousel :items="5" :margin="12" :dots="false" :nav="false" :loop="false" :rewind="false">
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/hun-1.png" alt="hun" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Magyar Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.08.10 - 08.13</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/bel-1.png" alt="bel" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Belga Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.08.26 - 08.28</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/nld-1.png" alt="nld" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Holland Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.09.02 - 09.04</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/ita-1.png" alt="ita" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Olasz Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.09.09 - 09.11</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/sgp-1.png" alt="sgp" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Szingapúri Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.09.30 - 10.02</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/hun-1.png" alt="hun" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Magyar Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.08.10 - 08.13</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>
                <a href="#"
                    class="flex flex-col items-center my-3 relative justify-center gap-2 px-3 py-6 border border-white rounded-[4px]">
                    <img src="/bel-1.png" alt="bel" class="!w-[50px]">
                    <h3 class="font-bold text-white text-md">Belga Nagydíj</h3>
                    <div class="font-bold text-[13px] text-white">2022.08.26 - 08.28</div>
                    <button class="absolute z-10 -bottom-3">
                        <img src="flip.png" alt="flip" />
                    </button>
                </a>

            </carousel>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Schedule',

}
</script>
