<script setup>
import { Head } from '@/composables/useHead';
import Feed from '../feed/Feed.vue';

/* user store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();
</script>
<template>
    <section class="wrapper main_wrapper">
        <Head title="Minhas Fotos" />
        <Feed :user="userStore.currentUser.nome" />
    </section>
</template>

<style scoped></style>
