<template>
    <button :class="['btn', `btn_${type}`, {'btn_rounded' : rounded}, {'shadow' : shadow}, {'large' : size}]" @click="$emit('action', type, rounded)"> {{ title }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineEmits(['action'])
defineProps({
    title:{
        type: String,
        default: 'Button'
    },
    type:{
        type: String,
    },
    rounded:{
        type: Boolean,
        default: false
    },
    shadow:{
        type: Boolean,
        default: false
    },
    size:{
        type: Boolean,
        default: false
    }
})

</script>
