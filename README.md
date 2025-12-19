# Vue applikation – TV-serielista

En enkel Single-Page-Application (SPA) byggd med Vue där användaren kan hantera en lista med TV-serier.  
Applikationen tillåter att lägga till serier med titel, genre och antal säsonger, markera om serien är sedd, ge ett betyg samt ta bort serier.  

## Funktioner

- Visa lista med TV-serier
- Lägg till och ta bort serier
- Markera om serien är sedd och ange betyg
- Responsiv design (mobile first)
- Navigering mellan Start, TV-serier och Information

## Installation

npm install
npm run dev

## Bygg för produktion:

npm run build

## Teknologier

-	Vue
-	HTML / CSS / JavaScript
-	Fetch API för datahantering (https://hapi-lab2.onrender.com/tvshows)

## Projektstruktur

- Startsida med huvudmeny och banner
- Undersida som konsumerar extern webbtjänst (CRUD: Create, Read, Delete)
- Informationssida med reflektioner om Vue.js
- Komponentbaserad struktur med scoped CSS för varje komponent

## Länk till publicerad webbplats

https://vue-tvshows.netlify.app
