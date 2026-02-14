<script setup>
import { useThemeStore } from '@/stores/useThemeStore';
const themeStore = useThemeStore();
</script>
<template>
    <button @click="themeStore.toggleTheme" class="theme-btn">
        <span v-if="themeStore.theme == 'light'">🌙</span>
        <span v-else>☀️</span>
    </button>
</template>

<style scoped>
.theme-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: var(--color-gray-eee);
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    transition: 0.2s;
}
.theme-btn:hover {
    background: white;
    box-shadow: 0 0 0 3px var(--color-yellow);
}
</style>
