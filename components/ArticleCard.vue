<template>
    <div :class="{
        'flex gap-[18px]': inline
    }">
        <div class="relative">
            <div v-if="highlight" class="absolute w-2 h-[80%] bg-[#ED1C24] -top-1.5 -left-1.5"></div>
            <div v-if="highlight" class="absolute w-[80%] h-2 bg-[#ED1C24] -top-1.5 -left-1.5"></div>
            <div class="overflow-hidden rounded-[4px]">
                <img v-if="article && article.img" :src="article.img" alt="article" class="object-cover w-full h-full"
                    :class="{
                        'max-h-[195px]': size == 'sm' && !inline,
                        'max-h-[166px] w-[295px]': inline
                        
                    }">
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
        <div class="flex-1">
            <h3 v-if="article && article.title" class="mt-8 font-bold text-black" :class="{
                'text-[22px] leading-[26px]': size == 'sm' ,
                'text-4xl pr-14': size == 'lg',
                '!mt-0 !pr-0': inline
            }">
                {{article.title}}</h3>
            <p v-if="article && article.description" class="pr-12 mt-3" :class="{
                'text-md font-normal': size == 'lg'
            }">
                {{article.description}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticleCard',
    props: {
        article: {
            type: Object,
            default: () => ({})
        },
        size: {
            type: String,
            default: 'sm'
        },
        inline: {
            type: Boolean,
            default: false,
        },
        highlight: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
