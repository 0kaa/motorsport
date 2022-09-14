<template>
    <div>
        <div class="relative">
            <div v-if="article && article.highlight" class="absolute w-2 h-[80%] bg-[#ED1C24] -top-2 -left-2"></div>
            <div v-if="article && article.highlight" class="absolute w-[80%] h-2 bg-[#ED1C24] -top-2 -left-2"></div>
            <div class="overflow-hidden rounded-lg">
                <img v-if="article && article.img" :src="article.img" alt="article"
                    class="max-h-[195px] h-100 object-cover w-full">
            </div>
            <div class="absolute flex items-center gap-2 -bottom-5">
                <a href="#"
                    class="bg-white px-1 py-0.5 text-black font-bold text-[13px] border-b-[3px] border-[#CF0000]">
                    FORMA-1
                </a>
                <a href="#"
                    class="bg-white px-1 py-0.5 text-black font-bold text-[13px] border-b-[3px] border-[#234899]">
                    ALPINE
                </a>
            </div>
        </div>
        <h3 v-if="article && article.title" class="text-[22px] leading-[26px] font-bold text-black pr-14 mt-8">
            {{article.title}}</h3>
    </div>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: ['article']
}
</script>
