<template>
  <header
    class="site-header"
    :class="{ 'hero-header': route.meta?.hero }"
  >
    <div class="container">
      <h1 class="logo">Tv-serier</h1>

      <nav>
        <RouterLink to="/" class="nav-link">Start</RouterLink>
        <RouterLink to="/tv-serier" class="nav-link">Tv-serier</RouterLink>
        <RouterLink to="/information" class="nav-link">Vue</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { RouterLink, useRoute } from 'vue-router'

  const route = useRoute()
</script>

<style scoped>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #C47E8C;
    color: #fff;
  }

  .hero-header {
    position: absolute;
    background: transparent;
    width: 100%;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .logo {
    font-size: 1.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-transform: uppercase;
    border-radius: 999px;
    transition: background 0.2s ease;
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  .router-link-active {
    background: #fff;
    color: #A75060;
    font-weight: 600;
  }

  /***** DESKTOP *****/
  @media (min-width: 768px) {
    .container {
      flex-direction: row; 
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 2rem;
    }

    .nav-link {
      font-size: 0.9rem;
    }
  }
</style>