<script setup>
import UserHeader from '@/components/user/UserHeader.vue';
</script>
<template>
    <section class="wrapper">
        <UserHeader />
        <router-view> </router-view>
    </section>
</template>

<style scoped></style>
