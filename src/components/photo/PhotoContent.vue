<script setup>
import ModalConfirmation from '../modal/ModalConfirmation.vue';
import PhotoComments from './PhotoComments.vue';
import PhotoDelete from './PhotoDelete.vue';

/* user store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

/* modal store */
import { useModalStore } from '@/stores/useModalStore';
const modalStore = useModalStore();

const props = defineProps(['photoSelected', 'single']);

async function deletePhoto(id) {
    photoStore.photoIdSelected = id;
    modalStore.isModalConfirmation = true;
}
</script>
<template>
    <div class="photo" :class="{ single: props.single }">
        <div class="photo_img">
            <img :src="props.photoSelected.photo.src" :alt="props.photoSelected.photo.title" />
        </div>
        <div class="photo_details">
            <div>
                <p class="photo_author">
                    <PhotoDelete
                        @click="deletePhoto(props.photoSelected.photo.id)"
                        v-if="userStore.currentUser.nome === props.photoSelected.photo.author"
                    />
                    <router-link
                        v-else
                        :to="{ name: 'profile', params: { name: props.photoSelected.photo.author } }"
                        @click="modalStore.ismodalActive = false"
                        >@{{ props.photoSelected.photo.author }}</router-link
                    >
                    <span class="preview">{{ props.photoSelected.photo.acessos }}</span>
                </p>
                <h1 class="title">
                    <p>{{ props.photoSelected.photo.title }}</p>
                </h1>
                <ul class="attributes">
                    <li>{{ props.photoSelected.photo.peso }} kg</li>
                    <li>{{ props.photoSelected.photo.idade }} anos</li>
                </ul>
            </div>
        </div>

        <PhotoComments
            :photoId="props.photoSelected.photo.id"
            :id="props.photoSelected.comments.comment_ID"
            :single="false"
            :comments="props.photoSelected.comments"
        />
        <teleport to="body">
            <ModalConfirmation v-if="modalStore.isModalConfirmation" :id="props.photoSelected.photo.id" />
        </teleport>
    </div>
</template>

<style scoped>
.photo {
    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;
    background: var(--bg-color);
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    transform: scale(0.8);
    animation: scaleUp 0.3s forwards;
}
.single.photo {
    grid-template-columns: 1fr;
    height: auto;
}
@keyframes scaleUp {
    to {
        opacity: initial;
        transform: initial;
    }
}
.photo_details {
    padding: 2rem 2rem 0 2rem;
}
.single .photo_details {
    padding: 1rem 0px 0px;
}
.photo_img {
    grid-row: 1/4;
}
.single .photo_img {
    grid-row: 1;
    border-radius: 0.4rem;
}

.comments {
    padding: 0 2rem;
}
.photo_author {
    opacity: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.photo_author a:hover {
    text-decoration: underline;
}
.preview::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(../../assets/images/visualizacao-black.svg);
}
[data-theme='dark'] .preview::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(../../assets/images/visualizacao.svg);
}
.attributes {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
}
.attributes li {
    margin-right: 2rem;
}
.attributes li::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 20px;
    margin-top: 5px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    background: var(--color-black-3);
}
@media (max-width: 64rem) {
    .photo {
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow: auto;
        grid-template-columns: minmax(20rem, 40rem);
    }
    .photo_img {
        grid-row: 1;
    }
}
</style>
