<template>
  <footer class="site-footer">
    <p>
      © {{ year }} Annika Gadman · Fullstack-utveckling med ramverk ·
      Mittuniversitetet · HT2025
    </p>
  </footer>
</template>

<script setup>
    const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  margin-top: 3rem;
  padding: 1.5rem 1rem;
  text-align: center;
  background: #f7f7f7;
  color: #666;
  font-size: 0.85rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.site-footer p {
  margin: 0;
  line-height: 1.5;
}

/* Desktop */
@media (min-width: 768px) {
  .site-footer {
    font-size: 0.9rem;
  }
}
</style>