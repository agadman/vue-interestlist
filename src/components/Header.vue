<template>
  <header class="site-header">
    <div class="container">
      <h1 class="logo">Intresse<span>List</span></h1>

      <nav>
        <RouterLink to="/" class="nav-link">Start</RouterLink>
        <RouterLink to="/intresse" class="nav-link">Intresselista</RouterLink>
        <RouterLink to="/information" class="nav-link">Information</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: linear-gradient(
    135deg,
    rgba(66, 184, 131, 0.9),
    rgba(53, 73, 94, 0.9)
  );
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
}

.logo span {
  color: #42b883;
}

/* Navigation */
nav {
  display: flex;
  gap: 0.75rem;
}

.nav-link {
  position: relative;
  padding: 0.4rem 0.8rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  border-radius: 999px;
}

/* Hover effect */
.nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

/* Active route */
.router-link-active {
  background: #fff;
  color: #35495e;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 0.8rem;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>