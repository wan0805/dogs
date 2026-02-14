import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
    const ismodalActive = ref(false);
    const isconfirmation = ref(false);
    const isModalConfirmation = ref(false);

    return {
        ismodalActive,
        isconfirmation,
        isModalConfirmation,
    };
});
