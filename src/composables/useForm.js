import { ref } from 'vue';

const types = {
    text: {
        regex: /^[a-zA-Z]/,
        message: 'Utilize apenas letras',
    },
    email: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Preencha um email válido',
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: 'A senha deve conter 8 caracteres, com letra maiúscula e número.',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize apenas números.',
    },
    float: {
        regex: /^\d+([.,]\d+)?$/,
        message: 'Utilize apenas números válidos.',
    },
};

export function useForm(type) {
    const value = ref('');
    const error = ref(null);

    function validate(val) {
        if (type === false) return true; // Sem validação
        if (val.length === 0) {
            error.value = 'Preencha um valor.';
            return false;
        } else if (types[type] && !types[type].regex.test(val)) {
            error.value = types[type].message;
            return false;
        } else {
            error.value = null;
            return true;
        }
    }

    return {
        value,
        error,
        validate: () => validate(value.value),
        onBlur: () => validate(value.value),
    };
}
