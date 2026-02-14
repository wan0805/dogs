// Dentro do useDarkMode.js
import { ref, watch } from 'vue';

export function useDarkMode() {
    const isDark = ref(localStorage.getItem('theme') === 'dark');

    // Usar watch garante que sempre que isDark mudar, o DOM reflete isso
    watch(
        isDark,
        (newValue) => {
            if (newValue) {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        },
        { immediate: true }
    ); // immediate faz rodar assim que o app carregar

    const toggleDark = () => {
        isDark.value = !isDark.value;
    };

    return { isDark, toggleDark };
}
