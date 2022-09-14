<template>
    <div class="grid grid-cols-2 gap-2 xl:min-h-[500px]">
        <div class="relative z-10">
            <div class="h-full">
                <img src="/hero-image.jpg" alt="hero image" class="object-cover w-full h-full" />
            </div>
            <div class="w-5 h-[90%] bg-black absolute -bottom-3 -left-3 z-[-1]"></div>
            <div class="w-[90%] h-5 bg-black absolute -bottom-3 -left-3 z-[-1]"></div>
        </div>
        <div class="flex flex-col items-start justify-center flex-1 pl-10 bg-black pr-14">
            <div class="flex items-center gap-2.5 mb-5">
                <a href="#" class="text-white category-link">FORMA-1</a>
                <a href="#" class="text-white category-link">FERRARI</a>
            </div>
            <h2 class="text-[40px] leading-[1.1] tracking-[-2%] w-[90%] text-white underline font-bold mb-10">
                Binotto elutasítja,
                hogy rossz
                stratégiát
                választottak
                volna a
                Magyar
                Nagydíjon</h2>
            <p class="text-lg font-medium text-white">
                A Ferrari csapatfőnöke szerint, ha nem rakják fel a kemény keverékű abroncsokat Charles Leclerc
                autójára,
                akkor sem lett volna meg a tempója a győzelemhez a Hungaroringen.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>
