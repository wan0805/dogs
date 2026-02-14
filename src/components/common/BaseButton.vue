<template>
    <button :class="['base-button', { 'is-loading': loading }]" :disabled="loading || disabled" @click="$emit('click')">
        <div class="content-wrapper">
            <svg v-if="loading" class="spinner" viewBox="0 0 24 24">
                <circle class="path" cx="12" cy="12" r="10" fill="none" stroke-width="4"></circle>
            </svg>

            <span>
                {{ loading ? loadingText : label }}
            </span>

            <slot v-if="!loading && !label"></slot>
        </div>
    </button>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: '',
    },
    loading: {
        type: Boolean,
        default: false,
    },
    loadingText: {
        type: String,
        default: 'Aguarde...',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['click']);
</script>

<style scoped>
.base-button {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: var(--color-yellow);
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    transition: 0.1s;
}

.base-button:hover,
.base-button:focus {
    outline: none;
    box-shadow:
        0 0 0 3px var(--color-yellow-fea),
        0 0 0 4px var(--color-yellow);
}
.base-button:disabled {
    opacity: 0.5;
    cursor: wait;
}

.content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

/* Animação do Spinner */
.spinner {
    width: 18px;
    height: 18px;
    animation: rotate 2s linear infinite;
}

.path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}
</style>
