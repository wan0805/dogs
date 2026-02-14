import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

import useFetch from './../composables/useFetch';
import { useToast } from '@/composables/useToast';
const { addToast } = useToast();

/* router */
import { useRouter } from 'vue-router';

/* api.js */
import { PASSWORD_RESET, PASSWORD_LOST, TOKEN_POST, USER_GET, USER_POST } from '@/services/api';

export const useUserStore = defineStore('user', () => {
    const { data, error, loading, request } = useFetch();
    const router = useRouter();

    const currentUser = ref('');
    const isAuth = ref(false);

    async function userToken(params) {
        try {
            const { url, options } = TOKEN_POST(params);
            const { json, response } = await request(url, options);
            if (response.ok) {
                addToast('Usuario Logado com Sucesso', 'success');
                window.localStorage.setItem('token-key', json.token);
                getUser(json.token);
            } else {
                addToast('credenciais invalidas', 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getUser(token) {
        const { url, options } = await USER_GET(token);
        const { json, response } = await request(url, options);
        if (response.ok) {
            currentUser.value = await json;
            isAuth.value = true;
            router.push('/account/feed');
        }
    }
    async function postUser(params) {
        try {
            const { url, options } = USER_POST(params);
            const { response } = await request(url, options);
            if (!response.ok) {
                addToast(`Ops.... ${error.value}`, 'error');
            } else {
                addToast(`A sua Conta foi Cadastrada com sucesso`, 'success');
                setTimeout(() => {
                    router.push('/auth');
                }, 2000);
            }
        } catch (error) {
            console.log('Ocorreu um erro:', error);
            addToast(`Ops...Ocorreu um erro! Tente novamente`, 'error');
        }
    }

    async function postForgotPassowrd(params) {
        try {
            const { url, options } = PASSWORD_LOST(params);
            const { json } = await request(url, options);
            addToast(`${json}.Não esqueça de conferir a caixa de spam`, 'success');
        } catch (error) {
            console.log('Ocorreu um erro:', error);
            addToast(`Ops...Ocorreu um erro! Tente novamente`, 'error');
        }
    }
    async function postPasswordReset(login, key, reset) {
        try {
            const { url, options } = PASSWORD_RESET({
                login: login,
                key: key,
                password: reset,
            });
            const { response } = await request(url, options);

            if (response.ok) {
                addToast('Senha alterada com Sucesso', 'sucess');
                setTimeout(() => {
                    router.push('/auth');
                }, 2000);
            }
        } catch (error) {}
    }

    async function logout() {
        window.localStorage.removeItem('token-key');
        currentUser.value = '';
        isAuth.value = false;
        router.push('/auth');
    }

    return { currentUser, isAuth, loading, userToken, getUser, postUser, postForgotPassowrd, postPasswordReset, logout };
});
