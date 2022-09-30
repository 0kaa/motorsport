<template>
    <div v-if="article && Object.keys(article).length" class="grid grid-cols-2 xl:min-h-[500px]" :class="{
        'gap-2': home
    }">
        <div class="relative z-10">
            <div class="h-full">
                <img :src="article.featured_image ? article.featured_image.url: '/single-article.jpg' " alt="hero image"
                    class="object-cover w-full h-full" />
            </div>
            <div class="w-5 h-[90%] bg-black absolute -bottom-3 -left-3 z-[-1]"></div>
            <div class="w-[90%] h-5 bg-black absolute -bottom-3 -left-3 z-[-1]"></div>
        </div>
        <div class="flex flex-col items-start justify-center flex-1 pl-10 bg-black pr-14">
            <div class="flex items-center gap-5 mb-5">
                <nuxt-link :to="home ? `/${article.post_categories[0].slug}` : `/${category.slug}`"
                    class="text-white category-link" v-text="home ? article.post_categories[0].title: category.title" />

                <a href="#" class="text-white category-link" v-text="article.teams[0].title"
                    v-if="article && article.teams.length" />

            </div>
            <h2 class="text-[40px] leading-[1.1] tracking-[-2%] text-white underline font-bold mb-10"
                v-text="article.title" />
            <p class="text-lg font-medium text-white" v-text="article.excerpt" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
    props: {
        home: {
            type: Boolean,
            default: false
        },
        article: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        category() {
            return this.article.post_categories.find(cat => cat.slug == this.$route.params.category)
        }
    }
}
</script>
