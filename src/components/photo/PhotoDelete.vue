<script setup></script>
<template>
    <button class="button-delete">Excluir</button>
</template>

<style scoped>
.button-delete {
    background: var(--color-gray-ddd);
    padding: 0.3rem 0.6rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: 0.875rem;
    font-family: var(--type-first);
    cursor: pointer;
    border-radius: 0.4rem;
    transition: 0.1s;
    color: var(--bg-color);
}

.button-delete:focus,
.button-delete:hover {
    outline: none;
    background: var(--color-gray-ddd);
    box-shadow: 0 0 0 3px var(--color-gray-eee);
    border-color: var(--color-black-3);
}
</style>
