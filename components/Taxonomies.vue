<template>
    <div class="flex justify-between border-b border-[#D9D9D9]">
        <div class="flex items-center gap-4">
            <nuxt-link :to="`/${category.slug}`" class="text-black text-md" v-text="category.title" />
            <a href="#" class="pl-4 text-black border-l border-black text-md" v-text="team.title" v-if="team.title" />
            <a href="#" class="pl-4 text-black border-l border-black text-md" v-if="driver.title"
                v-text="driver.title" />
            <a href="#" class="pl-4 text-black border-l border-black text-md" v-if="tag.title" v-text="tag.title" />
        </div>
        <div>
            <nuxt-link to="/"
                class="flex items-center gap-3 px-4 py-2 border border-b-transparent border-[#D9D9D9] text-lg">
                <i class="fa-solid fa-house"></i>
                <h3 class="pl-3 font-semibold text-black border-l border-black">Kezdőlap</h3>
            </nuxt-link>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            default: () => ({})
        },
        team: {
            type: Object,
            default: () => ({})
        },
        driver: {
            type: Object,
            default: () => ({})
        },
        tag: {
            type: Object,
            default: () => ({})
        },
    }
}
</script>
