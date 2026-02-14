<template>
    <div class="input-wrapper">
        <label v-if="label" :for="uuid" class="input-label">
            {{ label }}
        </label>

        <input
            :id="uuid"
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            :class="['base-input', { 'input-error': error, 'input-filled': modelValue && modelValue.length > 0 }]"
            @input="$emit('update:modelValue', $event.target.value)"
            v-bind="$attrs"
        />

        <span v-if="error" class="error">
            {{ error }}
        </span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    error: {
        type: String,
        default: '',
    },
});

defineEmits(['update:modelValue']);

const uuid = computed(() => `input-${Math.random().toString(36).slice(2, 9)}`);
</script>
1
<style scoped>
.input-wrapper {
    margin-bottom: 1rem;
}

.input-label {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.base-input {
    border: 1px solid var(--color-gray-eee);
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: var(--color-gray-eee);
    transition: 0.2s;
}

.base-input.input-filled {
    background: var(--color-gray-eee);
}

.base-input:focus,
.base-input:hover {
    outline: none;
    border-color: var(--color-yellow);
    background: var(--color-gray-eee);
    box-shadow: 0 0 0 3px var(--color-yellow-fea);
}

label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
}
.error {
    color: var(--message-error);
    font-size: 0.875rem;
    margin-top: 0.25rem;
}
</style>
