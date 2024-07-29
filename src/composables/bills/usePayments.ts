import type { PaymentStructure, IAddPaymentFn, IGetPaymentsFn } from '@/types/bills'
import { onMounted, ref } from 'vue'
import { useModalStore } from '../../store/commons/useModal'

const ID_ADD = 'identificado_123'

const getPaymentsFromLocalStorage = () => {
  const paymentsListJson = window.localStorage.getItem('paymentList')
  const paymentList = paymentsListJson ? JSON.parse(paymentsListJson) : []

  if (Array.isArray(paymentList)) return paymentList
  return []
}

const addPaymentToLocalStorage = (payment: PaymentStructure) => {
  const paymentsListJson = window.localStorage.getItem('paymentList')
  const paymentList = paymentsListJson ? JSON.parse(paymentsListJson) : []

  if (Array.isArray(paymentList)) {
    paymentList.unshift(payment)
    const paymentsListJson = JSON.stringify(paymentList)
    window.localStorage.setItem('paymentList', paymentsListJson)
    return paymentList
  }
}

export default () => {
  const paymentList = ref<PaymentStructure[]>([])
  const paymentForm = ref<PaymentStructure>({
    title: '',
    id: Date.now().toString(),
  })
  const { setModalProps, setShowModal } = useModalStore()

  const loadPayments = (getPaymentsFn: IGetPaymentsFn) => {
    paymentList.value = getPaymentsFn()
  }

  const addPayment = (addPaymentFn: IAddPaymentFn) => {
    paymentList.value.unshift(paymentForm.value)
    addPaymentFn(paymentForm.value)
    setModalProps({
      content: {
        title: '',
      },
    })
  }

  const showPaymentForm = () => {
    setModalProps({
      content: {
        title: '',
        acceptBtnLabel: 'Crear',
        cancelBtnLabel: 'Cancelar',
      },
      acceptBtnFn: () => {
        addPayment(addPaymentToLocalStorage)
        setShowModal(false)
      },
      cancelBtnFn: () => {
        setModalProps({
          content: {
            title: '',
          },
        })
        setShowModal(false)
      },
    })
    setShowModal(true)
  }

  onMounted(() => {
    loadPayments(getPaymentsFromLocalStorage)
    paymentForm.value = {
      title: 'Nuevo pago',
      id: ID_ADD,
      callback: showPaymentForm,
    }
    const addItem = paymentList.value.find((item) => item.id === ID_ADD)
    if (!addItem) addPayment(addPaymentToLocalStorage)
    else addItem.callback = showPaymentForm

    paymentForm.value = {
      title: '',
      id: Date.now().toString(),
    }
  })

  return {
    paymentList,
    paymentForm,
    loadPayments,
    showPaymentForm,
  }
}
