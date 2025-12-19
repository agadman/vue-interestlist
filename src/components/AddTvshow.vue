<template>
  <form @submit.prevent="addTvshow" class="tvshow-form">
    <label>
      Titel
      <input type="text" v-model="tvshow.title" required />
    </label>

    <label>
      Antal säsonger
      <input type="number" v-model.number="tvshow.seasons" min="1" required />
    </label>

    <label>
      Genre
      <input type="text" v-model="tvshow.genre" required />
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="tvshow.watched" />
      Har sett serien
    </label>

    <!-- Visas endast om watched är true -->
    <label v-if="tvshow.watched">
      Betyg (0–10)
      <input
        type="number"
        v-model.number="tvshow.rating"
        min="0"
        max="10"
        required
      />
    </label>

    <button type="submit">Lägg till TV-serie</button>
  </form>
  <p class="error" v-if="error">{{ error }}</p>
</template>

<script setup>
import { ref } from 'vue'

const tvshow = ref({
  title: '',
  seasons: 1,
  genre: '',
  watched: false,
  rating: null
})
const error = ref("");
const emits = defineEmits(['refreshList']);

const addTvshow = async () => {
  if (!tvshow.value.title.trim()) {
    error.value = 'Du måste ange en titel'
    return
  }

  if (!tvshow.value.genre.trim()) {
    error.value = 'Du måste ange en genre'
    return
  }

  if (tvshow.value.seasons < 1) {
    error.value = 'Antal säsonger måste vara minst 1'
    return
  }

  if (tvshow.value.watched && tvshow.value.rating === null) {
    error.value = 'Du måste ange ett betyg'
    return
  }

  error.value = "";

  const payload = {
    title: tvshow.value.title,
    seasons: tvshow.value.seasons,
    genre: tvshow.value.genre,
    watched: tvshow.value.watched
  }

  if (tvshow.value.watched) {
    payload.rating = tvshow.value.rating
  }

  try {
    const res = await fetch('https://hapi-lab2.onrender.com/tvshows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      throw new Error('Backend-validering misslyckades')
    }

    emits('refreshList')

    tvshow.value = {
      title: '',
      seasons: 1,
      genre: '',
      watched: false,
      rating: null
    }
  } catch (err) {
    error.value = 'Kunde inte spara TV-serien'
    console.error(err)   
  }
}
</script>

<style scoped>
    .error {
        color: red;
    }
</style>