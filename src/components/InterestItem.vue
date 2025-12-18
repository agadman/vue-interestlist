<template>
    <article @click="$emit('deleteTvshow', interest._id)">{{ interest.title }}</article>
</template>

<script setup>
   const props = defineProps({
       interest: Object
   }); 

   const emit = defineEmits(["deleteTvshow"]);
</script>