<template>
    <div class="container_header_outer">
        <div class="container_header_inner">
            <app-button :title="'Кнопка'" :type="'primary'"         @action="action"/>
            <app-button :title="'Кнопка'" :type="'secondary'"       @action="action"/>
            <app-button :title="'Кнопка'" :type="'warning'" rounded @action="action"/>
            <app-button :title="'Кнопка'" :type="'info'"    size    @action="action"/>
            <app-button :title="'Кнопка'" :type="'danger'"  shadow  @action="action"/>
        </div>
    </div>
    <div class="container_header_outer">
        <div class="container_header_inner">
            <form>
                <app-input
                        label="Your name: "
                        name="name"
                        placeholder="input your name"
                        v-model:modelValue="nameField"
                        width="400px"
                />
                {{ nameField }}
            </form>
        </div>
    </div>
</template>

<script setup>
import AppButton from "@/components/AppButton";
import AppInput from "@/components/AppInput";
import { ref } from 'vue'

const nameField = ref('')
const action = (type, rounded) => {
    alert('Вы нажали кнопку '+ type.toUpperCase() + ' и она' + (rounded ? ' ЗАКРУГЛЁННАЯ' : ' НЕ ЗАКРУГЛЁННАЯ'))
}
</script>
