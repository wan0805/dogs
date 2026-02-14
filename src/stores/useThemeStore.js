import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useThemeStore = defineStore('theme', () => {
    // Pega a preferência salva ou usa a do sistema (dark mode do Windows/Mac)
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const theme = ref(savedTheme);

    function toggleTheme() {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    }

    // Sempre que o tema mudar, atualiza o HTML e o localStorage
    watch(
        theme,
        (newTheme) => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        },
        { immediate: true }
    );

    return { theme, toggleTheme };
});
