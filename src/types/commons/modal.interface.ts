export interface IModalProps {
  content: {
    title: string
    description?: string
    acceptBtnLabel?: string
    cancelBtnLabel?: string
  }
  acceptBtnFn?: () => void
  cancelBtnFn?: () => void
}
