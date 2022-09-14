<template>
  <div class="mt-5 mb-20">
    <Hero class="mb-[74px] px-7" />
    <div class="flex gap-5 px-7 mb-[55px]">
      <div class="grid flex-1 grid-cols-3 gap-x-5 gap-y-14">
        <ArticleCard
          :article="{img: 'article.jpg',title:'Ricciardo: totálisan megérdemeltem a büntetést',highlight:true}" />
        <ArticleCard :article="{img: 'hero-image.jpg', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article.jpg', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article.jpg', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'hero-image.jpg', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article.jpg', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
      </div>
      <div class="bg-black max-w-[300px] flex-1">
        <img src="/ad-1.png" alt="ad" class="object-cover w-full h-full">
      </div>
    </div>
    <Clients />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
}
</script>
