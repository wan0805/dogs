<script setup>
import { ref } from 'vue';
import IconAdicionar from '../icons/IconAdicionar.vue';
import IconEstatistica from '../icons/IconEstatistica.vue';
import IconFeed from '../icons/IconFeed.vue';
import IconSair from '../icons/IconSair.vue';

const isActiveButton = ref(false);

/* user Store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

function ativarMenu() {
    isActiveButton.value = !isActiveButton.value;
}
function closeMenu() {
    isActiveButton.value = false;
}

function handleLogOut() {
    userStore.logout();
}
</script>
<template>
    <nav class="nav">
        <router-link to="/account/Feed" exact>
            <IconFeed />
        </router-link>
        <router-link to="/account/stats">
            <IconEstatistica />
        </router-link>
        <router-link to="/account/post-create">
            <IconAdicionar />
        </router-link>
        <button @click="handleLogOut()">
            <IconSair />
        </button>
    </nav>
    <button class="mobile_button" :class="{ active: isActiveButton }" @click="ativarMenu" aria-label="Menu"></button>
    <nav class="nav_mobile" :class="{ nav_active: isActiveButton }">
        <router-link to="/account/Feed" exact @click.="closeMenu()">
            <IconFeed />
            Minhas Fotos
        </router-link>
        <router-link to="/account/stats" @click.="closeMenu()">
            <IconEstatistica />
            Estatiticas
        </router-link>
        <router-link to="/account/post-create" @click.="closeMenu()">
            <IconAdicionar />
            Adicionar Fotos
        </router-link>
        <button @click="handleLogOut()">
            <IconSair />
            Sair
        </button>
    </nav>
</template>

<style scoped>
.nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
.nav a,
.nav button {
    background: var(--color-gray-eee);
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
}
.nav a:hover,
.nav button:hover,
.nav a:focus,
.nav button:focus {
    background: var(--bg-color);
    box-shadow: 0 0 0 3px var(--color-gray-eee);
    border-color: var(--color-black-3);
}
.nav a.router-link-exact-active {
    background: var(--bg-color);
    box-shadow: 0 0 0 3px var(--color-yellow-fea);
    border-color: var(--color-yellow);
}
.nav a.router-link-exact-active svg > *,
.nav_active a.router-link-exact-active svg > * {
    fill: var(--color-yellow);
}
.mobile_button {
    background: var(--color-gray-eee);
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: none;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
}
.mobile_button::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    transition: 0.2s;

    box-shadow:
        0 6px currentColor,
        0 -6px currentColor;
}
.mobile_button:focus,
.mobile_button:hover,
.active {
    outline: none;
    background: var(--bg-color);
    box-shadow: 0 0 0 3px var(--color-yellow-fea);
    border-color: var(--color-yellow);
    color: var(--color-yellow);
}
.active::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow:
        0 8px currentColor,
        0 -8px currentColor;
}

.nav_mobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: var(--bg-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
}
.nav_active {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    pointer-events: initial;
    z-index: 100;
}
.nav_mobile a,
.nav_mobile button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--color-gray-eee);
    padding: 0.5rem 0;
    cursor: pointer;
}
.nav_mobile a:hover svg > *,
.nav_mobile button:hover svg > * {
    fill: var(--color-yellow);
}
.nav_mobile button {
    border-bottom: none;
}
.nav_mobile svg {
    margin-right: 0.5rem;
}

@media (max-width: 40rem) {
    .nav {
        display: none;
    }
    .mobile_button {
        display: flex;
    }
}
</style>
