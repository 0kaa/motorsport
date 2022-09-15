<template>
  <div class="mt-5 mb-20">
    <Hero class="mb-[74px] px-7" />
    <div class="flex gap-5 px-7 mb-[55px]">
      <div class="grid flex-1 grid-cols-3 gap-x-5 gap-y-14">
        <ArticleCard :article="{img: 'article.jpg',title:'Ricciardo: totálisan megérdemeltem a büntetést'}" highlight />
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
    <Clients class="mb-[55px]" />
    <section class="px-7 mb-[55px]">
      <InlineTitle title="TOVÁBBI HÍREINK" />
      <div class="grid grid-cols-2 gap-5 mt-8 mb-[64px]">
        <div>
          <ArticleCard highlight
            :article="{
            img: 'article-lg.png',title:'Massa: az Aston Martin jól jár Alonsóval, de ő a csapattal nem ', description: 'Az egykori Forma-1-es versenyző elárulta, kissé meglepte a kétszeres világbajnok átigazolása, amiből a silverstone-i alakulat sokat profitálhat, viszont Alonso már jóval kevesebbet.'}"
            size="lg" />
        </div>
        <div class="flex flex-col gap-8">
          <ArticleCard
            :article="{img: 'article-sm-1.png', title:'A Williams „harciasabbá” tenné Albont a pályán kívül is ',description:'Jost Capito, a Williams csapatfőnöke elmondta, hogy próbálnak segíteni Alex Albonnak abban, hogy „harciasabb...'}"
            inline />
          <ArticleCard
            :article="{img: 'article-sm-2.png', title:'Magnussen látja a fényt az alagút végén: telitalálatnak bizonyultak a fejlesztések ', description:'A Haas a Magyar Nagydíjon vetette be idei első és egyetlen komolyabb fejlesztési csomagját, amit egyelőre...'}"
            inline />
          <ArticleCard
            :article="{img: 'article-sm-3.png', title:'Ex-Ferrari dolgozók: nincs szabadság és önbizalom a csapatnál ', description:'Az egykori McLaren-szerelő Marc Priestley szerint teljes kultúraváltásra lenne szükség a maranellói alakulatnál. '}"
            inline />
        </div>
      </div>
      <div class="grid flex-1 grid-cols-4 gap-x-5">
        <ArticleCard :article="{img: 'article.jpg',title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article-sm-4.png', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article-sm-5.png', title:'Ricciardo: totálisan megérdemeltem a büntetést'}" />
        <ArticleCard :article="{img: 'article-sm-6.png', title:'Ricciardo: totálisan megérdemeltem a büntetést'}"
          highlight />

      </div>
    </section>
    <Schedule />
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
