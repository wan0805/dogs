<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['data']);

const isHorizontal = ref(false);

const series = computed(() => [
    {
        name: 'Acessos',
        data: props.data.map((item) => item.acessos),
    },
]);

// 2. Configurações de estilo e eixos
const chartOptions = computed(() => ({
    chart: {
        id: 'dogs-stats',
        toolbar: { show: false }, // Remove o menu de exportação para um look mais clean
        fontFamily: 'Helvetica, Arial, sans-serif',
        theme: {
            mode: 'dark',
            palette: 'palette1',
        },
        background: 'transparent',
    },
    colors: ['#FFEA00', '#FFD700', '#FFBB11', '#FFAA00', '#FF9500', '#FF7B00', '#FF6200', '#E65100', '#D84315', '#BF360C'], // O amarelo clássico da Origamid
    plotOptions: {
        bar: {
            borderRadius: 2,
            columnWidth: '20%',
            horizontal: isHorizontal.value,
            distributed: true,
        },
    },
    xaxis: {
        categories: props.data.map((item) => item.title),
        labels: {
            style: { colors: 'var(--color-black-3)', fontWeight: 'bold' },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: 'var(--color-black-3)', // Cor branca para os nomes
                fontSize: '12px',
                fontWeight: 600,
            },
        },
    },
    grid: {
        borderColor: 'var(--color-black-3)',
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        y: {
            formatter: (val) => `${val} acessos`,
        },
    },
}));
</script>
<template>
    <div class="graph-item">
        <h3>Ranking de Acessos</h3>

        <apexchart width="100%" height="100%" type="bar" :options="chartOptions" :series="series"></apexchart>
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
