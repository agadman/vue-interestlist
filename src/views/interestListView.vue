<template>
    <h2>Lista med tv-serier</h2>
    <AddTvshow @refresh-list="getTvshows" />
    <InterestItem v-for="interest in interests" :interest="interest" :key="interest._id" @delete-tvshow="deleteTvshow" />
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

            if (res.ok) {
                getTvshows();
            }

        } catch (error) {
            console.log("There was an error: " + error);
        }
    }
</script>

<style scoped>
h2 {
    text-align: center;
    font-size: 2em;
}
</style>
