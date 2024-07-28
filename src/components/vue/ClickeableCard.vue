<template>
  <article
    @click="callback"
    :class="cardClasses">
    <div class="flex items-center justify-start gap-6">
      <img src="/icons/water-fee.svg" type="svg" class="size-20" />
      <label class=" text-4xl font-semibold">{{ title }}</label>
    </div>

    <div v-if="url" @click="onClick" class="w-8 h-8 bg-green-500 rounded-full cursor-pointer"></div>
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { type ClickeableElement } from "../../types";

const props = defineProps<ClickeableElement>();
const cardClasses = computed(() => {
  const classes = [
    'flex justify-between items-center w-full py-6 relative rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl',
  ]
  if (props.callback != null) classes.push('cursor-pointer hover:scale-105')
  

  return classes
})

const onClick = () => {
  if (props.url) {
    console.log('Redirecting to', props.url)
    window.open(props.url, '_blank')
  }
  else if (props.callback) props.callback()
}

</script>
