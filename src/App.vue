<template>
  <section id="editor-container" class="p-5 flex flex-row items-stretch min-h-full">
    <LineNumbers :line-numbers />

    <div id="code-editor" class="flex-1 p-2">
      <textarea
        ref="textarea"
        v-model="internalValue"
        :readonly="isReadonly"
        @keydown.tab.prevent="addTabSpace"
        @keydown.ctrl.s.prevent="saveText"
        @keydown.meta.s.prevent="saveText"
        @keydown.meta.b.prevent="newText"
        @keydown.ctrl.b.prevent="newText"
        class="min-w-full min-h-full resize-none outline-none bg-transparent text-lg font-mono leading-relaxed whitespace-nowrap overflow-auto"
        :class="{ 'opacity-75': isReadonly }"
        placeholder="Paste or type code here..."
        aria-label="Code editor textarea"
      />
    </div>

    <div
      id="controls"
      class="fixed rounded-lg p-3 bg-background top-10 right-10 flex flex-col gap-5 text-secondary"
    >
      <div class="flex gap-3 justify-center">
        <ButtonGroup name="Save" command="⌘ + S" :disabled="pasteId !== null" @clicked="saveText" />
        <ButtonGroup name="New Bin" command="⌘ + B" @clicked="newText" />
      </div>

      <InputGroup name="Language" id="language" v-model:input="language" />
      <InputGroup name="Author" id="author" v-model:input="author" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { createPaste, getPaste, type PasteRequest } from './apiRequest'
import ButtonGroup from './assets/components/ButtonGroup.vue'
import InputGroup from './assets/components/InputGroup.vue'
import LineNumbers from './assets/components/LineNumbers.vue'

// #region Constants and States
const textarea = ref<HTMLTextAreaElement | undefined>()
const internalValue = ref('')

const pathSegments = window.location.pathname.split('/').filter(Boolean)
const pasteId = ref(pathSegments[0] || null)
const language = ref('')
const author = ref('')
// #endregion

// #region Computed
const lineNumbers = computed(() => {
  const lines = internalValue.value.split('\n').length
  let result = ''
  for (let i = 1; i <= lines; i++) result += i + '\n'
  return result
})

const isReadonly = computed(() => {
  return !!pasteId.value
})
// #endregion

// #region Methods
const updateURL = (id?: string) => {
  const newURL = id ? `/${id}` : '/'
  window.history.pushState({}, '', newURL)
}

const loadPaste = async () => {
  if (pasteId.value) {
    try {
      const response = await getPaste(pasteId.value)
      internalValue.value = response.content
      language.value = response.language || ''
      author.value = response.author || ''
    } catch (error) {
      console.error('Failed to load paste:', error)
    }
  }
}

const saveText = async () => {
  const request: PasteRequest = {
    content: internalValue.value,
    language: language.value || undefined,
    author: author.value || undefined,
  }

  try {
    const response = await createPaste(request)
    pasteId.value = response.id
    updateURL(response.id)
  } catch (error) {
    console.error('Failed to save paste:', error)
  }
}

const newText = () => {
  internalValue.value = ''
  pasteId.value = null
  language.value = ''
  author.value = ''

  window.history.pushState({}, '', '/')

  setTimeout(() => {
    textarea.value?.focus()
  }, 0)
}

const addTabSpace = () => {
  internalValue.value += '    '
}
// #endregion

// #region Hooks
onMounted(() => {
  loadPaste()
})

watch(
  () => window.location.pathname,
  () => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean)
    const newId = pathSegments[0] || null

    if (newId !== pasteId.value) {
      pasteId.value = newId
      loadPaste()
    }
  },
)
// #endregion
</script>
