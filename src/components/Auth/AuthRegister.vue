<script setup>
import { ref } from 'vue';
import BaseInput from '../common/BaseInput.vue';
import BaseButton from '../common/BaseButton.vue';
import { Head } from '@/composables/useHead';

/* User Store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* use form */
import { useForm } from '@/composables/useForm';
const username = useForm('text');
const email = useForm('email');
const password = useForm('password');

async function handleSubmit() {
    const isUsernamelValid = username.validate();
    const isEmaillValid = email.validate();
    const isPasswordValid = password.validate();
    if (isUsernamelValid && isEmaillValid && isPasswordValid) {
        await userStore.postUser({
            username: username.value.value,
            email: email.value.value,
            password: password.value.value,
        });
    }
}
</script>
<template>
    <section class="animeLeft">
        <Head title="Crie sua conta" />
        <h1 class="title">Cadastre-se</h1>
        <form @submit.prevent="handleSubmit">
            <BaseInput v-model="username.value.value" label="Nome" type="text" :error="username.error.value" />
            <BaseInput v-model="email.value.value" label="Email" type="text" :error="email.error.value" />
            <BaseInput v-model="password.value.value" label="Senha" type="password" :error="password.error.value" />
            <BaseButton label="Cadastrar" loading-text="Cadastrando..." :loading="userStore.loading" />
        </form>
    </section>
</template>

<style scoped></style>
