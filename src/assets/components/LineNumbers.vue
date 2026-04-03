<template>
  <aside id="code-numbers" class="p-2 ps-0 text-lg min-w-10 text-gray-500 select-none">
    <pre class="whitespace-pre font-mono leading-relaxed text-right">{{ lineNumbers }}</pre>
  </aside>
</template>

<script setup lang="ts">
interface Props {
  lineNumbers: string
}

defineProps<Props>()
</script>
