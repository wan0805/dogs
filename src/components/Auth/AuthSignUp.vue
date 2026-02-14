<script setup>
import { onMounted } from 'vue';
import BaseInput from '../common/BaseInput.vue';
import BaseButton from '../common/BaseButton.vue';

/* use form */
import { useForm } from '@/composables/useForm';

/* User Store */
import { useUserStore } from '@/stores/useUserStore';
import { Head } from '@/composables/useHead';
const userStore = useUserStore();

const username = useForm('text');
const password = useForm('text');

async function handleSubmit() {
    try {
        const isUsernamelValid = username.validate();
        const isPasswordValid = password.validate();
        if (isUsernamelValid && isPasswordValid) {
            userStore.userToken({
                username: username.value.value,
                password: password.value.value,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    const token = window.localStorage.getItem('token-key');
    if (token) {
        userStore.getUser(token);
    }
});
</script>
<template>
    <section class="animeLeft">
        <Head title="Conecte-se" />
        <h1 class="title">Acessar Conta</h1>
        <form class="form" @submit.prevent="handleSubmit">
            <BaseInput v-model.trim="username.value.value" label="usuário" :error="username.error.value" />
            <BaseInput v-model.trim="password.value.value" label="Senha" type="password" :error="password.error.value" />
            <BaseButton label="Entrar" loading-text="Entrando..." :loading="userStore.loading" />
        </form>

        <router-link class="perdeu" to="/auth/forgot">Perdeu a Senha?</router-link>
        <div class="cadastro">
            <h2 class="subtitle">Cadastre-se</h2>
            <p>Ainda nao possui conta?</p>
            <router-link class="button" to="/auth/create">Cadastre-se</router-link>
        </div>
    </section>
</template>

<style scoped>
.form {
    margin-bottom: 2rem;
}
.perdeu {
    display: inline-block;
    color: var(--color-black-6);
    padding: 0.5rem 0;
    line-height: 1;
}
.perdeu::after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
}
.cadastro {
    margin: 4rem 0;
}
.cadastro p {
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.cadastro .button {
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: var(--color-yellow);
    color: #333;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    transition: 0.1s;
}

.subtitle {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
}
.subtitle::after {
    content: '';
    display: block;
    background: var(--color-gray-ddd);
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
}
.button {
    color: var(--color-gray-ddd);
}
</style>
