<template>
  <div class="search-input">
    <button class="btn" @click="emit('update:modelValue', inputValue)">
      <img src="../../assets/109164.png" class="img" />
    </button>
    <input
      class="input"
      placeholder="Filter by author..."
      type="text"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])
const inputValue = ref('')

const handleInput = (event: Event) => {
  inputValue.value = (event.target as HTMLInputElement).value
}
</script>

<style lang="scss">
@import './searc-input.scss';
</style>
