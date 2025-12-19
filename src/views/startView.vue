<template>
  <section class="hero"></section>
  <section class="intro">
    <h2>Mitt intresse</h2>
    <p>
        Jag älskar att följa TV-serier - från spännande thrillers till avslappnade
        feel-good-serier. För mig är TV-serier både ett sätt att koppla av och att
        följa engagerande berättelser och karaktärer över tid. Det finns alltid
        någon serie som passar, oavsett humör eller tillfälle.
    </p>
    <p>
        På den här webbplatsen har jag skapat en lista med några av mina favoriter,
        som kan byggas vidare på och anpassas över tid. Listan går att justera genom
        att lägga till nya TV-serier eller ta bort sådana som inte längre är
        aktuella. Tanken är att sidan ska fungera som ett enkelt och flexibelt
        verktyg för att samla och organisera TV-serier, samtidigt som jag får öva
        på webbutveckling.
            </p>
  </section>
</template>

<script setup></script>

<style scoped>
    .hero {
    height: 60vh; 
    background-image: url('@/assets/hero-popcorn.jpg');
    background-size: cover;
    background-position: center;
    mask-image: linear-gradient(to bottom, black 85%, transparent);
    }

    .intro {
    max-width: 800px;
    margin: 4rem auto;
    padding: 0 1.5rem;
    text-align: left;
    }

    .intro h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #A75060;
    }

    .intro p {
    line-height: 1.7;
    color: #444;
    }

    /***** DESKTOP & STÖRRE SKÄRMAR *****/
    @media (min-width: 768px) {
        .hero {
            height: 100vh;
            background-attachment: fixed; 
        }

        .intro {
            text-align: center;
        }

        .intro h2 {
            font-size: 2.4rem;
        }
    }
</style>