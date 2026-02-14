<script setup>
import { ref } from 'vue';
const skeleton = ref(true);
const props = defineProps(['image', 'alt']);

function loadImage({ target }) {
    skeleton.value = false;
    target.style.opacity = 1;
}
</script>
<template>
    <div class="img_wrapper">
        <div v-if="skeleton" class="skeleton"></div>
        <img @load="loadImage" :src="props.image" :alt="props.alt" loading="lazy" />
    </div>
</template>

<style scoped>
.img_wrapper {
    width: 100%;
    height: 100%;
    display: grid;
}
img {
    display: block;
    width: 100%;
    height: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
}
.skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, var(--color-gray-eee) 8px, var(--bg-color) 50%, var(--color-gray-eee) 100%);
    background-color: var(--color-gray-eee);
    background-size: 200%;
    animation: skeletonAnime 1.5s infinite linear;
}

@keyframes skeletonAnime {
    from {
        background-position: 8px;
    }
    to {
        background-position: -200%;
    }
}
</style>
