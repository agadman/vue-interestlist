<template>
  <section class="info">
    <h2>Mina tankar om Vue</h2>
    <p>
      Vue.js har varit ett ramverk som varit väldigt enkelt att komma igång med.
      Jämfört med andra ramverk jag testat upplevdes Vue som det mest lättförståeliga,
      vilket gjorde arbetet både smidigt och roligt.
    </p>
    <p>
      Npm installationen gick snabbt och smärtfritt, och strukturen
      som följer med från start gjorde det lätt att förstå hur projektet skulle byggas upp.
      Uppdelningen i vyer och komponenter kändes logisk och hjälpte till att hålla koden
      organiserad och lättläst.
    </p>
    <p>
      Routing var också relativt lätt att förstå och implementera, vilket gjorde det
      enkelt att skapa flera sidor i applikationen utan att det kändes rörigt.
      En utmaning i början var att förstå hur reaktivitet och tvåvägsbindning fungerar.
    </p>
    <p>
      En sak jag märkte var att navigeringslänkarna på små skärmar (mobil) inte visar aktivt tillstånd korrekt. 
      Den vita bakgrunden visas bara när webbplatsen renderas första gången för start-sidan, men därefter när jag klickar
      på länkarna så visas dden vita bakgrunden inte för länkarna. Jag förstår inte varför men detta är något jag 
      skulle vilja undersöka vidare.
    </p>
    <p>
      Sammanfattningsvis är Vue.js ett ramverk jag gärna skulle arbeta mer med i framtiden.
      Kombinationen av enkelhet, tydlig struktur och flexibilitet gör det till ett mycket
      bra verktyg för både mindre och större webbapplikationer.
    </p>
  </section>
</template>

<style scoped>
    .info {
    max-width: 700px;
    margin: 2rem auto;
    padding: 0 1rem;
    }

    h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #A75060;
    }

    p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #444;
    }
</style>