<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <section class="login">
        <router-view class="forms"></router-view>
    </section>
</template>

<style scoped>
.login {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;
}
.login::before {
    content: '';
    display: block;
    background: url('../assets/images/login.jpg') no-repeat center center;
    background-size: cover;
}
.forms {
    max-width: 30rem;
    padding: 1rem;
    margin-top: 19vh;
}

@media (max-width: 40rem) {
    .login {
        grid-template-columns: 1fr;
    }
    .login::before {
        display: none;
    }
    .forms {
        max-width: 100%;
    }
}
</style>
