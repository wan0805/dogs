<script setup>
import PhotoContent from './PhotoContent.vue';

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();
</script>
<template>
    <section class="wrapper main_wrapper">
        <PhotoContent :photoSelected="photoStore.photo" :single="true" v-if="photoStore.photo.photo" />
    </section>
</template>

<style scoped></style>
