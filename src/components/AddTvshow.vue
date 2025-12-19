<template>
  <form @submit.prevent="addTvshow" class="tvshow-form">
    <label>
      Titel
      <input type="text" v-model="tvshow.title" />
    </label>

    <label>
      Antal säsonger
      <input type="number" v-model.number="tvshow.seasons" min="1" />
    </label>

    <label>
      Genre
      <select v-model="tvshow.genre">
        <option value="" disabled>Välj genre</option>
        <option>Drama</option>
        <option>Komedi</option>
        <option>Thriller</option>
        <option>Science Fiction</option>
        <option>Fantasy</option>
        <option>Dokumentär</option>
        <option>Reality</option>
        <option>Romantik</option>
      </select>
    </label>

    <label class="checkbox">
      <input type="checkbox" v-model="tvshow.watched" />
      Har sett serien
    </label>

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
    <p class="error" v-if="error">{{ error }}</p>
    <button type="submit">Lägg till TV-serie</button>
  </form>
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
  if (tvshow.value.watched) payload.rating = tvshow.value.rating;

  try {
    const res = await fetch('https://hapi-lab2.onrender.com/tvshows', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    if (!res.ok) throw new Error('Backend-validering misslyckades')
    emits('refreshList')
    tvshow.value = { title: '', seasons: 1, genre: '', watched: false, rating: null }
  } catch (err) {
    error.value = 'Kunde inte spara TV-serien'
    console.error(err)   
  }
}
</script>

<style scoped>
.tvshow-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 0 auto;
  max-width: 500px;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.tvshow-form label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #555;
}

.tvshow-form input[type="text"],
.tvshow-form input[type="number"] {
  margin-top: 0.3rem;
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
}

.tvshow-form input[type="checkbox"] {
  margin-right: 0.5rem;
}

.tvshow-form select {
  margin-top: 0.3rem;
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 0.95rem;
  background: #fff;
  color: #555;
}

.tvshow-form .checkbox {
  flex-direction: row;
  align-items: center;
}

.tvshow-form button {
  margin-top: 1rem;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background: #A75060;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tvshow-form button:hover {
  background: #C47E8C;
}

.error {
  color: red;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.9rem;
}
</style>