<template>
  <div class="mt-5 mb-20">
    <Hero class="mb-[74px] px-7" home />
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
    <section class="text-white bg-black py-[50px] pr-6 pl-9 mt-[55px] flex">
      <div class="relative z-10 w-[30%] mt-10">
        <h2 class="text-[88px] text-white font-bold mb-5">LEVEZETŐ</h2>
        <p class="text-4xl font-bold">„A Red Bull sem mindig hoz jó döntéseket“ </p>
      </div>
      <div class="border-[3px] border-white rounded-[4px] overflow-hidden">
        <img src="/levezeto.jpg" alt="levezeto" class="" />
      </div>
    </section>
    <section class="p-5 mx-3 mt-[55px] border border-black">
      <div class="inline-flex items-end gap-4 mb-8 border-b border-black">
        <h2 class="text-3xl italic font-bold text-black">LEGOLVASOTTABB CIKKEK</h2>
        <h3 class="text-lg italic font-bold text-primary">AZ ELMÚLT 24 ÓRÁBÓL</h3>
      </div>
      <div class="grid grid-cols-2 gap-8">
        <div class="flex gap-5" v-for="i in 6" :key="i">
          <div>
            <img src="/hero-image.jpg" alt="article" class="w-[140px] h-[92px] object-cover" />
          </div>
          <div class="flex flex-col justify-between flex-1 h-full">
            <h3 class="text-[22px] italic font-bold text-black">
              Kritika a Ferrarinak címezve: „Persze, hogy előrébb kellene lenniük”
            </h3>
            <div class="flex gap-3 text-xs italic font-medium text-black">
              <div>
                2022. július 28 - 11:33
              </div>
              <div>|</div>
              <div>
                Motorsport / Forma-1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $api, params, redirect }) {
    try {
      const { data } = await $api.articles.getArticles()

      return { data: data.posts }
    } catch (error) {
      console.log(error)
      redirect('/404')
    }
  },
}
</script>
