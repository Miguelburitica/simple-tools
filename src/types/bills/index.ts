export type PaymentStructure = {
  title: string
  id: string
  url?: string
  callback?: () => void
  icon?: string
  color?: string
}

export type IGetPaymentsFn = () => PaymentStructure[]
export type IAddPaymentFn = (payment: PaymentStructure) => void
