<script setup>
import {  computed, watch } from 'vue';
import UserHeaderNav from './UserHeaderNav.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed(() => {
    const rotaAtual = route.fullPath;
    switch (rotaAtual) {
        case '/conta/post-create':
            return 'Poste Sua Foto';
            break;
        case '/conta/stats':
            return 'Estatisticas';
            break;
        default:
            return 'Minha Conta';
            break;
    }
});

watch(
    () => route.fullPath,
    () => {}
);
</script>
<template>
    <header class="header">
        <h1 class="title">{{ title }}</h1>
        <UserHeaderNav />
    </header>
</template>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 2rem 0;
    position: relative;
}
</style>
