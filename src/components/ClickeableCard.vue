<template>
  <article
    @click="callback"
    :class="
      `flex justify-between items-center w-full h-28 relative
      rounded-2xl p-8 shadow-md border-rose-400 border-2 transition-all duration-300
      hover:shadow-xl hover:scale-105
      ${callback && 'cursor-pointer'}
      `
    ">
    <div class="flex items-center justify-start gap-6">
      <div class=" size-12 bg-blue-500 rounded-2xl"></div>
      <label class=" text-3xl">{{ title }}</label>
    </div>

    <div v-if="url" @click="onClick" class="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
  </article>
</template>

<script setup lang="ts">
import { type ClickeableElement } from "../types";

const props = defineProps<ClickeableElement>();

const onClick = () => {
  if (props.url) {
    console.log('Redirecting to', props.url)
    window.open(props.url, '_blank')
  }
  else if (props.callback) props.callback()
}

</script>
