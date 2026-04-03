<template>
  <div class="flex flex-col justify-center gap-1">
    <button
      class="p-1 px-3 rounded"
      :class="disabled ? 'bg-secondary cursor-default' : 'bg-accent cursor-pointer'"
      @click="emit('clicked')"
      :disabled="disabled"
    >
      {{ name }}
    </button>
    <span class="text-xs text-gray-400 text-center">{{ command }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  disabled?: boolean
  name: string
  command: string
}

const { disabled = false, name, command } = defineProps<Props>()

const emit = defineEmits<{ clicked: [] }>()
</script>
