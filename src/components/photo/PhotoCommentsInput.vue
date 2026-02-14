<script setup>
import { ref, computed } from 'vue';
import IconEnviar from '../icons/IconEnviar.vue';
import useFetch from '@/composables/useFetch';
import { COMMENT_POST } from '@/services/api';
const { request, error } = useFetch();

const comment = ref('');

const props = defineProps({
    photoId: '',
    id: '',
    comments: '',
    single: Boolean,
});

/* emit */
const emit = defineEmits(['postComments']);

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

async function handleSubmit() {
    const token = window.localStorage.getItem('token-key');
    await photoStore.postComment(props.photoId, comment.value, token);
    comment.value = '';
}
</script>
<template>
    <form class="form" :class="{ single: props.single }" @submit.prevent="handleSubmit">
        <textarea class="textArea" id="comment" name="comment" placeholder="Comente..." v-model.trim="comment" />
        <button class="buttonEnviar">
            <IconEnviar class="svg" />
        </button>
    </form>
</template>

<style scoped>
.form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;
}
.single.form {
    margin: 1rem 0;
}
.textArea {
    display: block;
    width: 100%;
    border: none;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid var(--color-gray-eee);
    border-radius: 0.2rem;
    background: var(--color-gray-eee);
    transition: 0.2s;
    color: var(--color-black-3);
}
.textArea:focus,
.textArea:hover {
    outline: none;
    border-color: var(--color-yellow);
    background: var(--bg-color);
    box-shadow: 0 0 0 3px var(--color-yellow-fea);
}
.buttonEnviar {
    border: none;
    cursor: pointer;
    color: var(--color-black-3);
    background: transparent;
    font-size: 1rem;
    padding: 0.1rem;
    overflow: hidden;
}
.buttonEnviar:focus,
.buttonEnviar:hover {
    outline: none;
}
</style>
