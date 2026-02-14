<script setup>
import BaseInput from '../common/BaseInput.vue';
import BaseButton from '../common/BaseButton.vue';

import { onMounted, ref } from 'vue';
const login = ref('');
const key = ref('');

/* user Store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* use form */
import { useForm } from '@/composables/useForm';
import { Head } from '@/composables/useHead';
const passwordReset = useForm('password');

async function handleSubmit() {
    const isPasswordValid = passwordReset.validate();
    if (isPasswordValid) {
        userStore.postPasswordReset(login.value, key.value, passwordReset.value.value);
    }
}

onMounted(async () => {
    const params = new URLSearchParams(window.location.search);
    login.value = await params.get('login');
    key.value = await params.get('key');
});
</script>
<template>
    <section class="animeLeft">
        <Head title="Alterar a Senha" />
        <h1 class="title">Resete a Senha</h1>
        <form @submit.prevent="handleSubmit">
            <BaseInput v-model="passwordReset.value.value" label="Nova Senha" type="password" />
            <BaseButton label="Resetar a Senha" loading-text="Alterando a Senha..." :loading="userStore.loading" />
        </form>
    </section>
</template>
<style scoped></style>
