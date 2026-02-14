<script setup>
import { onMounted, ref, watch } from 'vue';

import { useForm } from '@/composables/useForm';

import BaseInput from '../common/BaseInput.vue';
import BaseButton from '../common/BaseButton.vue';
/* use Fetch */
import useFetch from '@/composables/useFetch';
const { loading } = useFetch();
/* photo store */
import { usePhotoStore } from '@/stores/usePhotoStore';
import { Head } from '@/composables/useHead';
const photoStore = usePhotoStore();

const name = useForm('text');
const age = useForm('number');
const weight = useForm('float');
const img = ref('');
const inputImgText = ref('Nenhum Arquivo Selecionado');

async function handleSubmit() {
    const isNameValid = name.validate();
    const isAgeValid = age.validate();
    const isWeightValid = weight.validate();
    if (isNameValid && isAgeValid && isWeightValid && img.raw != '') {
        const token = window.localStorage.getItem('token-key');
        const formData = new FormData();

        formData.append('nome', name.value.value);
        formData.append('idade', age.value.value);
        formData.append('peso', weight.value.value);
        formData.append('img', img.value.raw);
        photoStore.postPhoto(formData, token);
    }
}

function handelImgChange({ target }) {
    img.value = {
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
    };
    if (img.value != '') {
        inputImgText.value = 'Arquivo Selecionado';
    }
}
</script>
<template>
    <section class="animeLeft photoPost">
        <Head title="Poste a sua Foto" />
        <form action="" id="form" @submit.prevent="handleSubmit">
            <BaseInput v-model="name.value.value" label="Nome" type="text" :error="name.error.value" />
            <BaseInput v-model="age.value.value" label="Idade" type="text" :error="age.error.value" />
            <BaseInput v-model="weight.value.value" label="Peso" type="text" :error="weight.error.value" />
            <label class="file-button" for="img">
                {{ inputImgText }}
            </label>
            <input class="files" type="file" name="img" id="img" @change="handelImgChange" />
            <BaseButton label="Postar" loading-text="Postando....." :loading="photoStore.loading" />
        </form>
        <div v-if="!img.preview == ''">
            <div
                class="preview"
                :style="{
                    backgroundImage: 'url(' + img.preview + ')',
                }"
            ></div>
        </div>
    </section>
</template>

<style scoped>
.photoPost {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}
.file-button {
    border: 1px solid var(--color-gray-eee);
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.6rem;
    background: var(--bg-color);
    transition: 0.2s;

    margin: 1.6rem 0;
    cursor: pointer;
    font-family: var(--type-second);
    font-weight: 500;
}
.file-button:focus,
.file-button:hover {
    outline: none;
    border-color: var(--color-yellow); /* Cor padrão do Dogs */
    background: var(--bg-color);
    box-shadow: 0 0 0 3px var(--color-yellow-fea); /* Um brilho suave em volta */
}
.files {
    display: none;
    margin-bottom: 1rem;
}

.preview {
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
}
.preview::after {
    content: '';
    display: block;
    height: 8px;
    padding-bottom: 100%;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>
