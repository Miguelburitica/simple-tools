<template>
  <ul
    class="flex flex-col gap-4"
  >
    <li v-for="element of paymentElements">
      <ClickeableCard
        :title="element.title"
        :url="element.url"
        :color="element.color"
        :icon="element.icon"
        :callback="element.callback"
      />
    </li>
  </ul>
  
  <dialog
    ref="paymentModal"
    :class="`
      w-full max-w-screen-sm flex flex-col
      rounded-2xl
      py-12 px-8
      ${modalIsOpen ? '' : 'hidden'}
    `"
  >
    <h2 class=" text-2xl mb-6">Pago nuevo</h2>
    <form
      ref="paymentForm"
      @submit.prevent="addPayment"
      class="flex flex-col gap-4"
    >
      <input type="text" v-model="paymentForm.title">
      <input type="color" v-model="paymentForm.color">
      <input type="text" v-model="paymentForm.url" class="mb-8">
      <footer class="flex justify-between items-center">
        <button type="reset" @click="closeModal">Cancelar</button>
        <button type="submit">Crear</button>
      </footer>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import type { ClickeableElement } from '../../types';
import ClickeableCard from './ClickeableCard.vue';

const paymentsFromLocalStorageJson = window.localStorage.getItem('paymentList')
const paymentsFromLocalStorage = paymentsFromLocalStorageJson && JSON.parse(paymentsFromLocalStorageJson)

const paymentModal = ref<HTMLDialogElement>()
const paymentForm = ref<ClickeableElement>({
  title: '',
  url: '',
  icon: '',
  color: ''
})
const paymentElements: Ref<ClickeableElement[]> = ref([])

const modalIsOpen = ref(false)
const justOpenModal = ref(false)

if (Array.isArray(paymentsFromLocalStorage)) paymentElements.value.unshift(...paymentsFromLocalStorage)

const showModal = () => {
  paymentModal.value?.showModal()
  modalIsOpen.value = true
  justOpenModal.value = true
}

const closeModal = () => {
  paymentForm.value = {
    title: '',
    url: '',
    icon: '',
    color: ''
  }
  paymentModal.value?.close()
  modalIsOpen.value = false
}

const addPayment = () => {
  paymentElements.value.unshift({
    title: paymentForm.value.title,
    url: paymentForm.value.url,
    color: paymentForm.value.color,
    icon: paymentForm.value.icon
  })
  paymentModal.value?.close()
  paymentForm.value = {
    title: '',
    url: '',
    icon: '',
    color: ''
  }

  const paymentElementsJson = JSON.stringify(paymentElements.value.filter(el => el.title !== 'Nuevo pago'))
  window.localStorage.setItem('paymentList', paymentElementsJson)
  modalIsOpen.value = false
}

const outsideHandle = (event: MouseEvent) => {
    if (!justOpenModal.value && event.target !== paymentModal.value) {
      modalIsOpen.value = false
    }

    justOpenModal.value = false
  }

onMounted(() => {
  paymentElements.value.unshift({
    title: 'Nuevo pago',
    callback: showModal
  })

  addEventListener('click', outsideHandle)
})

onUnmounted(() => {
  removeEventListener('click', outsideHandle)
})

</script>

<style scoped>

li {
  list-style: none;
}

</style>