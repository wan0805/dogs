<script setup>
import { computed } from 'vue';

import BarChartApex from '../graphs/BarChartApex.vue';
import DonutChartApex from '../graphs/DonutChartApex.vue';

const props = defineProps(['data']);

const totalViews = computed(() => {
    return props.data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0);
});
</script>
<template>
    <section class="animeLeft graph">
        <div class="graph_item graph_total">
            <p>Acessos:{{ totalViews }}</p>
        </div>

        <div class="graph_item">
            <BarChartApex :data="props.data" />
        </div>
        <div class="graph_item">
            <DonutChartApex :data="props.data" />
        </div>
    </section>
</template>

<style scoped>
.graph {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}
.graph_item {
    border: 1px solid var(--grid-stats);
    border-radius: 0.2rem;
    display: grid;
    align-items: center;
}
.graph_total {
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2rem;
}

@media (max-width: 40rem) {
    .graph {
        grid-template-columns: 1fr;
        margin-bottom: 3rem;
    }
    .graph_total {
        grid-column: 1;
    }
}
</style>
