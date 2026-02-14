<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Feed from '../feed/Feed.vue';

const route = useRoute();
</script>
<template>
    <section class="wrapper main_wrapper">
        <h1 class="title">{{ route.params.name }}</h1>

        <Feed :user="route.params.name" />
    </section>
</template>

<style scoped>
.title {
    text-transform: capitalize;
}
</style>
