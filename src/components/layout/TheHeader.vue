<script setup>
import { ref, onMounted } from 'vue';
import IconLogo from '../icons/IconLogo.vue';

import { useDarkMode } from '@/composables/useDarkMode';
const { isDark, toggleDark } = useDarkMode();

/* user store */
import { useUserStore } from '@/stores/useUserStore';
import IconUser from '../icons/IconUser.vue';
import BaseButtonTheme from '../common/BaseButtonTheme.vue';
const userStore = useUserStore();

const teste = 'dogs';
</script>

<template>
    <header class="header">
        <nav class="nav wrapper">
            <router-link class="logo" to="/" aria-label="Dogs - home">
                <IconLogo />
            </router-link>
            <BaseButtonTheme />
            <router-link v-if="userStore.currentUser" class="login" to="/account/feed">
                {{ userStore.currentUser.nome }}
                <IconUser />
            </router-link>
            <router-link v-else class="login" to="/auth">Login / Criar</router-link>
        </nav>
    </header>
</template>

<style scoped>
.header {
    box-shadow: var(--shadow);
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 100;
    background: var(--bg-color);
}

.nav {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    padding: 0.5rem 0;
}
.login {
    color: var(--color-black-3);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
</style>
