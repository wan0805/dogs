<script setup>
import { onMounted, watch } from 'vue';
import ImageSkeleton from '../common/ImageSkeleton.vue';

const props = defineProps(['photo']);

/* modal store */
import { useModalStore } from '@/stores/useModalStore';
const modalStore = useModalStore();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

async function handelClick(photo) {
    await photoStore.getPhoto(photo.id);
    modalStore.ismodalActive = true;
}
</script>
<template>
    <li class="photo" v-for="(photo, index) in props.photo" :key="index" @click="handelClick(photo)">
        <ImageSkeleton :image="photo.src" :alt="photo.title" />
        <span class="preview">{{ photo.acessos }}</span>
    </li>
</template>

<style scoped>
.photo:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
}
.photo {
    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--border-photo);
}
.photo > div {
    grid-area: 1/1;
}
.preview {
    grid-area: 1/1;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 1rem;
    text-align: center;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2;
}
.preview::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 0.25rem;
    background: url('../../assets/images/visualizacao.svg') no-repeat;
}

.photo:hover .preview {
    display: flex;
}

.photo:hover .preview::before {
    filter: brightness(0) invert(1);
}
@media (max-width: 40rem) {
    .photo:nth-child(2) {
        grid-column: initial;
        grid-row: initial;
    }
}
</style>
