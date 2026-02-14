import { ref } from 'vue';

export default function useFetch() {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const request = async (url, options) => {
        let response;
        let json;

        try {
            error.value = null;
            loading.value = true;

            response = await fetch(url, options);
            json = await response.json();
            data.value = await json;

            if (!response.ok) throw new Error(json.message || 'Erro na requisição');
        } catch (err) {
            json = null;
            error.value = err.message;
        } finally {
            data.value = json;
            loading.value = false;

            return { response, json };
        }
    };

    return {
        data,
        error,
        loading,
        request,
    };
}
