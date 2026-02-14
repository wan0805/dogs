<script setup>
import { ref } from 'vue';
import BaseInput from '../common/BaseInput.vue';
import BaseButton from '../common/BaseButton.vue';
import { Head } from '@/composables/useHead';

/* user Store */
import { useUserStore } from '@/stores/useUserStore';
const userStore = useUserStore();

/* use form */
import { useForm } from '@/composables/useForm';

const login = useForm('text');

const urlLocation = window.location.href.replace('forgot', 'reset');

async function handleSubmit() {
    const isLoginlValid = login.validate();
    if (isLoginlValid) {
        userStore.postForgotPassowrd({ login: login.value.value, url: urlLocation });
    }
}
</script>
<template>
    <section class="animeLeft">
        <Head title="Perdeu a Senha" />
        <h1 class="title">Perdeu a Senha?</h1>
        <form @submit.prevent="handleSubmit">
            <BaseInput v-model.trim="login.value.value" label="Email / Usuário" type="text" />
            <BaseButton label="Enviar email" loading-text="Enviando email..." :loading="userStore.loading" />
        </form>
    </section>
</template>

<style lang="scss" scoped></style>
