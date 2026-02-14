// composables/useToast.js
import { ref } from 'vue';

const message = ref('');
const type = ref('success');
const show = ref(false);

export function useToast() {
    function addToast(msg, t = 'success') {
        message.value = msg;
        type.value = t;
        show.value = true;

        setTimeout(() => {
            show.value = false;
        }, 3000);
    }

    return { message, type, show, addToast };
}
