import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

/* use fetch */
import useFetch from './../composables/useFetch';

/* notifications */
import { useToast } from '@/composables/useToast';
const { addToast } = useToast();

/* router */
import router from '@/router';

/* api.js */
import { COMMENT_POST, GET_STATS, PHOTO_DELETE, PHOTO_GET, PHOTO_POST, PHOTOS_GET } from '@/services/api';

export const usePhotoStore = defineStore('photo', () => {
    const allPhotos = ref([]);
    const photo = ref();
    const stats = ref([]);
    const photoDetail = ref('');
    const photoComments = ref('');
    const newComment = ref('');
    const photoIdSelected = ref();
    const infinite = ref(true);
    const pages = ref(1);
    const { data, error, loading, request } = useFetch();

    async function getAllPhotos(user) {
        if (loading.value || !infinite.value) return;
        try {
            loading.value = true;
            const photosLimit = 6;
            // 1. Usamos o valor atual da página para a requisição
            const { url, options } = PHOTOS_GET({
                page: pages.value,
                total: photosLimit,
                user: user,
            });

            const { json, response } = await request(url, options);

            if (response && response.ok && json) {
                // 2. CORREÇÃO: Usar 'json' que é o dado novo desta requisição
                allPhotos.value = [...allPhotos.value, ...json];

                // 3. Incrementa a página para a PRÓXIMA chamada
                pages.value++;

                // 4. Se vier menos fotos que o limite, o "feed" acabou
                if (json.length < photosLimit) {
                    infinite.value = false;
                }
            }
        } catch (errors) {
            console.error('Erro ao buscar fotos:', error.value);
        } finally {
            loading.value = false;
        }
    }

    function resetState() {
        allPhotos.value = [];
        pages.value = 1;
        infinite.value = true;
        loading.value = false;
    }

    async function getPhoto(photoId) {
        try {
            const { url, options } = await PHOTO_GET(photoId);
            const { json, response } = await request(url, options);
            if (!response.ok) {
                addToast('Ops... Ocorreu um erro! Tente novamente', 'error');
            } else {
                photo.value = await json;
            }
        } catch (error) {
            addToast('Ops... Ocorreu um erro no servidor! Tente novamente', 'error');
        }
    }

    async function postComment(id, comment, token) {
        const { url, options } = COMMENT_POST(id, { comment: comment }, token);
        const { json, response } = await request(url, options);
        if (response.ok) {
            addToast('Comentário realizado com Sucesso!!!', 'success');
            newComment.value = json;
        } else {
            addToast('Ops... Ocorreu um erro! Tente novamente', 'error');
        }
    }

    async function postPhoto(formData, token) {
        const { url, options } = PHOTO_POST(formData, token);
        const { response } = await request(url, options);
        if (response.ok) {
            addToast('Postagem realizado com sucesso!');
            setTimeout(() => {
                router.push({ name: 'account' });
            }, 1200);
        } else {
            addToast('Erro ao Postar, tente novamente!', 'error');
        }
    }

    async function deletePhoto(id) {
        const { url, options } = PHOTO_DELETE(id);
        const response = await fetch(url, options);
        if (response.ok) {
            addToast('Postagem apagada com sucesso!');
            setTimeout(async () => {
                window.location.reload();
            }, 3000);
        } else {
            addToast('Ocorreu um erro!', 'error');
        }
    }

    async function getStats(params) {
        loading.value = true;
        try {
            const { url, options } = GET_STATS();
            const { json, response } = await request(url, options);
            if (response.ok) {
                loading.value = false;
                stats.value = json;
            }
        } catch (errors) {
            console.log('error:', error.value);
            addToast('Ocorreu um erro!', 'error');
        }
    }

    return {
        allPhotos,
        pages,
        photo,
        stats,
        photoDetail,
        photoComments,
        newComment,
        photoIdSelected,
        infinite,
        loading,
        getAllPhotos,
        resetState,
        getPhoto,
        postComment,
        postPhoto,
        deletePhoto,
        getStats,
    };
});
