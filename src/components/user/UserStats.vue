<script setup>
import { GET_STATS } from '@/services/api';
import { onMounted, ref } from 'vue';
import UserStatsCharts from './UserStatsCharts.vue';
import { Head } from '@/composables/useHead';

/* use Fetch */
import useFetch from '@/composables/useFetch';
const { request, error } = useFetch();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

const stats = ref([]);

onMounted(async () => {
    await photoStore.getStats();
});
</script>
<template>
    <Head title="Estatisticas" />
    <p v-if="photoStore.stats.length == 0">Au au! Ainda não temos dados por aqui. Que tal compartilhar a primeira foto do seu pet?</p>
    <UserStatsCharts v-else :data="photoStore.stats" />
</template>

<style scoped>
p {
    color: var(--color-black-3);
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
}
</style>
