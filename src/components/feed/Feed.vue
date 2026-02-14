<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import FeedModal from './FeedModal.vue';
import FeedPhotos from './FeedPhotos.vue';

/* photos stores */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

const props = defineProps(['user']);

const sentinel = ref(null);
let observer = null;

// Função para disparar a busca
const loadMore = () => photoStore.getAllPhotos(props.user);

// Reinicia o feed se o usuário mudar (ex: clicou em outro perfil)
watch(
    () => props.user,
    () => {
        photoStore.resetState();
        loadMore();
    },
    { immediate: true }
);

onMounted(() => {
    // Se já houver fotos (cache), não limpa, a menos que o usuário mude
    if (photoStore.allPhotos.length === 0) loadMore();

    observer = new IntersectionObserver(
        (entries) => {
            // SÓ dispara se: estiver visível E não estiver carregando E houver mais páginas
            if (entries[0].isIntersecting && !photoStore.loading && photoStore.infinite) {
                loadMore();
            }
        },
        { rootMargin: '50px' }
    );

    if (sentinel.value) observer.observe(sentinel.value);
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>
<template>
    <div>
        <FeedModal />
        <FeedPhotos :user="photoStore.allPhotos" />

        <p class="message" v-if="!photoStore.infinite">Não há Postagens para exibir.</p>
        <div ref="sentinel" class="sentinel"></div>
    </div>
</template>

<style scoped>
.sentinel {
    height: 50px;
}
.message {
    color: var(--color-black-3);
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
}

@media (max-width: 40rem) {
    .sentinel {
        height: 10px;
        margin-top: 11rem;
    }
}
</style>
