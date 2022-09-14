<template>
    <div>
        <div class="px-10 py-10 overflow-hidden text-white bg-black">
            <carousel :items="5" :margin="12" :dots="false" :nav="false" :loop="false" :rewind="false">
                <a href="#"><img src="/oracle.png" alt="oracle" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/ferrari.png" alt="ferrari" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/amg.png" alt="amg" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/bwt.png" alt="bwt" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/mclaren.png" alt="mclaren" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/oracle.png" alt="oracle" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/ferrari.png" alt="ferrari" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/amg.png" alt="amg" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/bwt.png" alt="bwt" class="object-cover w-full h-full"></a>
                <a href="#"><img src="/mclaren.png" alt="mclaren" class="object-cover w-full h-full"></a>
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
            </carousel>
        </div>
        <button>

        </button>
    </div>
</template>

<script>

export default {
    name: 'Clients',
    data: () => ({
        carouselOptions: {
            items: 5
        }
    })

}
</script>
