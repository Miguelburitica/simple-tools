<template>
  <li v-for="element of paymentElements">
    <ClickeableCard
      :title="element.title"
      :url="element.url"
      :color="element.color"
      :icon="element.icon"
      :callback="element.callback"
    />
  </li>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { ClickeableElement } from '../types';
import ClickeableCard from './ClickeableCard.vue';

const mockElement: ClickeableElement = {
  title: 'Pago falso',
  url: '/nuevo-pago',
  icon: 'plus',
  color: 'blue',
}

const addElement = () => {
  paymentElements.value.push(mockElement)
}

const paymentElements: Ref<ClickeableElement[]> = ref([
  {
    title: 'Nuevo pago',
    callback: addElement
  }
])
</script>