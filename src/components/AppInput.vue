<template>
        <div class="form-input" :style="{width: width}">
            <label :for="name" class="input-label">{{ label }}</label>
            <input
                    class="input-text"
                    :type="type"
                    :name="name"
                    :id="name"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
            >
        </div>
</template>


<script setup>
import { defineProps, defineEmits } from 'vue'

defineEmits(['update:modelValue'])
defineProps({
    modelValue:{
        type: String,
        default: ''
    },
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: 'text'
    },
    placeholder:{
        type: String,
        required: true
    },
    label:{
        type: String,
        required: true
    },
    width:{
        type: String,
        default: '300px'
    },
})

</script>
e>