<script setup>
import { computed } from 'vue';

const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
});

// Dados formatados para os gráficos
const titles = computed(() => props.data.map((item) => item.title));
const hits = computed(() => props.data.map((item) => item.acessos));

const donutOptions = computed(() => ({
    chart: { type: 'donut', theme: { mode: 'dark' }, background: 'transparent' },
    labels: titles.value,
    colors: ['#FFEA00', '#FFD700', '#FFBB11', '#FFAA00', '#FF9500', '#FF7B00', '#FF6200', '#E65100', '#D84315', '#BF360C'], // Cores variadas para as fatias
    legend: { position: 'bottom', labels: { colors: '#fff' } },
    stroke: { show: false }, // Remove a borda branca entre as fatias
    dataLabels: { enabled: true },
}));

const donutSeries = computed(() => hits.value);
</script>

<template>
    <div class="graph-item">
        <h3>Proporção de Audiência</h3>
        <apexchart width="100%" height="100%" type="pie" :options="donutOptions" :series="donutSeries" />
    </div>
</template>

<style scoped>
.graph-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
}
</style>
