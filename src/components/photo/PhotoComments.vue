<script setup>
import { watch, computed, ref } from 'vue';
import PhotoCommentsInput from './PhotoCommentsInput.vue';

/* user store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

const props = defineProps({
    photoId: '',
    id: '',
    comments: '',
    single: Boolean,
});

watch(
    () => photoStore.newComment,
    () => {
        commentse.value.push(photoStore.newComment);
    }
);

const commentse = ref([...props.comments]);
</script>
<template>
    <ul>
        <li class="comments" :class="{ single: props.single }" v-for="comment in commentse" ::key="comment.comment_ID">
            <b>{{ comment.comment_author }}: </b>
            <span>{{ comment.comment_content }}</span>
        </li>
    </ul>
    <div>
        <PhotoCommentsInput v-if="userStore.currentUser.nome" :single="props.single" :photoId="props.photoId" :id="props?.id" :comments="commentse" />
    </div>
</template>

<style scoped>
.comments {
    overflow: auto;
    word-break: break-word;
    padding: 0 2rem;
}
.single.comments {
    padding: 0px;
}
.comments li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
}
</style>
