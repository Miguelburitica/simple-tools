<template>
  <article @click="callback" :class="cardClasses">
    <label class="text-2xl font-medium">{{ title }}</label>

    <Icon icon="iconamoon:link-thin" v-if="url" @click="onClick"
      class="rounded-full cursor-pointer size-12 text-blue-marguerite-300 hover:text-blue-marguerite-50 transition" />
  </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Icon } from '@iconify/vue';
import { type PaymentStructure } from "../../types/bills";

const props = defineProps<PaymentStructure>();
const cardClasses = computed(() => {
  const classes = [
    'flex justify-between items-center w-full py-6 relative rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl',
  ]
  if (props.callback != null) classes.push('cursor-pointer hover:scale-105')


  return classes
})

const onClick = () => {
  if (props.url) window.open(props.url, '_blank')
  else if (props.callback) props.callback()
}

</script>
