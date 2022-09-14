<template>
    <div>
        <div class="flex items-center justify-between w-full px-6 py-5 mb-1 bg-dark">
            <div>
                <img src="/logo.png" alt="logo" />
            </div>
            <div class="flex items-center gap-8">
                <nuxt-link to="/" class="text-xl font-bold text-white uppercase">FORMA-1</nuxt-link>
                <nuxt-link to="/" class="text-xl font-bold text-white uppercase">MOTOGP</nuxt-link>
                <nuxt-link to="/" class="text-xl font-bold text-white uppercase">F2/F3</nuxt-link>
                <nuxt-link to="/" class="text-xl font-bold text-white uppercase">MOTORSPORTOK</nuxt-link>
                <nuxt-link to="/" class="text-xl font-bold text-white uppercase">GYORSKÖR</nuxt-link>
                <button>
                    <img src="/dark.png" alt="search" />
                </button>
                <button>
                    <img src="/search.png" alt="search" />
                </button>
            </div>
        </div>
        <div class="flex items-center justify-between w-full bg-dark text-[#F0F0F0] px-6">
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#1E5BC6] px-3.5 py-2">
                <span>1.</span>
                <span>VERSTAPPEN</span>
                <span>258</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#ED1C24] px-3.5 py-2">
                <span>2.</span>
                <span>LECLERC</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#1E5BC6] px-3.5 py-2">
                <span>3.</span>
                <span>PEREZ</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#6CD3BF] px-3.5 py-2">
                <span>4.</span>
                <span>RUSSELL</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#ED1C24] px-3.5 py-2">
                <span>5.</span>
                <span>SAINZ</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#6CD3BF] px-3.5 py-2">
                <span>6.</span>
                <span>HAMILTON</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#FF9800] px-3.5 py-2">
                <span>7.</span>
                <span>NORRIS</span>
                <span>178</span>
            </div>
            <div class="border-l-[4px] flex gap-4 font-semibold text-xs border-[#2293D1] px-3.5 py-2">
                <span>8.</span>
                <span>OCON</span>
                <span>178</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>
