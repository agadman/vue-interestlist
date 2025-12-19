<template>
  <section class="interest-list">
    <h2>Lista med TV-serier</h2>
    <AddTvshow @refresh-list="getTvshows" />
    <div v-if="interests.length" class="list-container">
      <InterestItem 
        v-for="interest in interests" 
        :interest="interest" 
        :key="interest._id" 
        @delete-tvshow="deleteTvshow" 
      />
    </div>
    <p v-else class="empty-list">Listan är tom, fyll på med dina favoriter!</p>
  </section>
</template>

<script setup>
import InterestItem from '@/components/InterestItem.vue';
import AddTvshow from '@/components/AddTvshow.vue';
import { ref, onMounted } from 'vue';

const interests = ref([])

onMounted (() => {
    getTvshows();
});

const getTvshows = async () => {
    try {
        const res = await fetch('https://hapi-lab2.onrender.com/tvshows');
        if(res.ok) {
            const data = await res.json();
            interests.value = data;
        } else {
            console.log("Error: " + res.status);
        }
    } catch (error) {
        console.log("There was an error: " + error);
    }
}

const deleteTvshow = async (id) => {
    try {
        const res = await fetch('https://hapi-lab2.onrender.com/tvshows/' + id, {
            method: 'DELETE'
        });
        if (res.ok) getTvshows();
    } catch (error) {
        console.log("There was an error: " + error);
    }
}
</script>

<style scoped>
.interest-list {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #A75060;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.empty-list {
  text-align: center;
  color: #666;
  font-style: italic;
  margin-top: 2rem;
}
</style>