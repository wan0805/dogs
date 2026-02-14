<script setup>
import { onMounted } from 'vue';
import PhotoContent from '../photo/PhotoContent.vue';
/* modal store */
import { useModalStore } from '@/stores/useModalStore';
const modalStore = useModalStore();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
        modalStore.ismodalActive = false;

        photoStore.photo = '';
    }
}
</script>
<template>
    <div class="modal" :class="{ active: modalStore.ismodalActive }" @click="handleOutsideClick">
        <PhotoContent :photoSelected="photoStore.photo" :photoComments="photoStore.photoComments" :single="false" v-if="photoStore.photo" />
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--bg-modal);
    display: none;
    z-index: 100;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
}
.active {
    display: flex;
}

@media (max-width: 40rem) {
    .modal {
        padding: 2rem calc(2rem + 15px) 2rem 2rem;
    }
}
</style>
