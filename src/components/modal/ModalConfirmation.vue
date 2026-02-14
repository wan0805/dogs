<script setup>
/* modal store */
import { useModalStore } from '@/stores/useModalStore';
const storeModal = useModalStore();

/* user store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
const photoStore = usePhotoStore();

const props = defineProps(['id']);

function clickToCancel() {
    storeModal.isModalConfirmation = false;
    storeModal.isconfirmation = false;
}

async function clickToDelete() {
    photoStore.deletePhoto(props.id);
    const token = window.localStorage.getItem('token-key');
    if (token) {
        userStore.getUser(token);
    }
    storeModal.isModalConfirmation = false;
}
</script>
<template>
    <section class="modal" :class="{ active: storeModal.ismodalActive }">
        <div class="modal-content">
            <p>Tem certeza de que deseja <span>deletar</span> esta postagem?</p>
            <div class="button_wrapper">
                <button class="button confirm" id="confirm" @click="clickToDelete">Deletar</button>
                <button class="button cancel" id="cancel" @click="clickToCancel">Cancelar</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.modal {
    display: none;
    position: fixed;
    z-index: 300;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: slidIn 0.8s forwards;

    background: rgba(0, 0, 0, 0.8);
}

.modal-content {
    background-color: var(--bg-color);
    margin: 2rem auto;
    padding: 20px;
    border-left: 20px solid var(--color-yellow);
    width: 100%;
    max-width: 350px;

    border-radius: 4px;
}

.button_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 15px 0;
}
p span,
.text_info {
    color: #f87171;
    font-weight: 500;
}
button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
}
.confirm {
    color: #fefefe;
    background: #ef4444;
}
.confirm:hover,
.confirm:focus {
    outline: none;
    box-shadow:
        0 0 0 3px rgb(255, 176, 170),
        0 0 0 4px rgb(255, 65, 17);
}
.cancel {
    color: #fff;
    background: var(--color-gray-ddd);
}
.cancel:hover,
.cancel:focus {
    outline: none;
    box-shadow:
        0 0 0 3px var(--color-gray-eee),
        0 0 0 4px #7c7c7cdf;
}

.active {
    display: flex;
    align-items: center;
    justify-content: center;
}
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
