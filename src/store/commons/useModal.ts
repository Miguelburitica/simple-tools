import type { IModalProps } from '@/types/commons/modal.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('useModalStore', () => {
  const showModal = ref(false)
  const modalProps = ref<IModalProps>({
    content: {
      title: '',
    },
  })

  const setShowModal = (newValue: boolean) => {
    showModal.value = newValue
  }

  const setModalProps = (props: IModalProps) => {
    modalProps.value = props
  }

  return {
    showModal,
    modalProps,
    setShowModal,
    setModalProps,
  }
})
