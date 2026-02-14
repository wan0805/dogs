<script setup>
import Feed from '@/components/feed/Feed.vue';
import { Head } from '@/composables/useHead';
</script>

<template>
    <section class="wrapper main_wrapper">
        <Head title="Fotos" description="Home do site Dogs, com o feed de fotos." />
        <Feed user="0" />
    </section>
</template>
