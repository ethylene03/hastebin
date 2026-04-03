<template>
  <div class="flex flex-col gap-1">
    <label :for="id" class="text-sm">{{ name }}</label>
    <input :id type="text" v-model="model" class="bg-secondary px-2 rounded outline-none" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  id: string
}

defineProps<Props>()

const model = defineModel<string>('input')
</script>
