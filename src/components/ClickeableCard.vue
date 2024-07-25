<script setup lang="ts">
import { type ClickeableElement } from "../types";

const props = defineProps<ClickeableElement>();
</script>

<template>
  <article
    @click="props.callback"
    class="
      flex justify-between items-center w-full h-16
      rounded-md p-8
      shadow-md border-rose-400 border-2
    ">
    <div class="flex items-center justify-start">
      <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
      <div class="ml-4">{{ props.title }}</div>
    </div>

    <div v-if="props.url" @click="() => console.log('AHHHHH')" class="w-8 h-8 bg-green-500 rounded-full"></div> 
  </article>
</template>