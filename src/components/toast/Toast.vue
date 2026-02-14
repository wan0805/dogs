<script setup>
defineProps(['message', 'type']); // type pode ser 'success' ou 'error'
</script>

<template>
    <Transition name="toast">
        <div :class="['toast', type]">
            {{ message }}
        </div>
    </Transition>
</template>

<style scoped>
.toast {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 2rem;
    background: var(--bg-color);
    border-radius: 4px;
    border: 1px solid var(--shadow-color);
    z-index: 1000;
    border-left: 8px solid var(--color-yellow);
}

.toast.error {
    border-left-color: var(--message-error);
    color: var(--message-error);
}
.toast.success {
    border-left-color: var(--message-sucess);
    color: var(--message-sucess);
}

/* Animação de entrada e saída */
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    transform: translateX(100px);
    opacity: 0;
}
</style>
