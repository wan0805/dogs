<script setup>
import FeedPhotoItem from './FeedPhotoItem.vue';

const props = defineProps(['user']);
</script>
<template>
    <ul class="animeLeft feed">
        <FeedPhotoItem :photo="props.user" />
    </ul>
</template>

<style scoped>
.feed {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
    justify-items: center;
}
.not_post {
    color: rgb(102, 101, 101);
    text-align: center;
}
.sentinel {
    height: 100px;
}
.messge {
    color: var(--color-black-3);
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
}
@media (max-width: 40rem) {
    .feed {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
