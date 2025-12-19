<template>
  <article class="tvshow-item">
    <div class="tvshow-info">
      <h3>{{ interest.title }}</h3>
      <p>Säsonger: {{ interest.seasons }} | Genre: {{ interest.genre }}</p>
      <p v-if="interest.watched">Betyg: {{ interest.rating }}/10</p>
    </div>

    <button class="delete-btn" @click="confirmDelete">
      ✕
    </button>
  </article>
</template>

<script setup>
const props = defineProps({
   interest: Object
}); 

const emit = defineEmits(["delete-tvshow"]);

const confirmDelete = () => {
  if (confirm(`Vill du verkligen ta bort "${props.interest.title}"?`)) {
    emit('delete-tvshow', props.interest._id);
  }
};
</script>

<style scoped>
.tvshow-item {
  background: #fff;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
}

.tvshow-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.tvshow-info h3 {
  margin: 0 0 0.3rem;
  color: #C47E8C;
}

.tvshow-info p {
  margin: 0.2rem 0;
  font-size: 0.9rem;
  color: #555;
}

.delete-btn {
  background: #A75060;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: background 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: #C47E8C;
}
</style>