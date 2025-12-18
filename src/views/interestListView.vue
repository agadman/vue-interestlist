<template>
    <h2>Intresse Lista</h2>
    <InterestItem v-for="interest in interests" :interest="interest" :key="interest._id" @delete-tvshow="deleteTvshow" />
</template>

<script setup>
    import InterestItem from '@/components/InterestItem.vue';
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
        console.log(id);
    }
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 2em;
}
</style>
