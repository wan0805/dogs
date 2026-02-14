<script setup>
import { RouterLink, RouterView } from 'vue-router';
import TheHeader from './components/layout/TheHeader.vue';
import Toast from './components/toast/Toast.vue';
/* toast */
import { useToast } from './composables/useToast';
const { show, message, type } = useToast();

/* useFecth */
import useFetch from './composables/useFetch';
import Loading from './components/common/Loading.vue';
const { loading } = useFetch();

/* photo store */
import { usePhotoStore } from './stores/usePhotoStore';
import TheFooter from './components/layout/TheFooter.vue';
const photoStore = usePhotoStore();
</script>

<template>
    <TheHeader />
    <main class="main">
        <router-view></router-view>
    </main>
    <Toast v-if="show" :message="message" :type="type" />
    <Loading v-if="photoStore.loading" />
    <TheFooter />
</template>

<style scoped></style>
