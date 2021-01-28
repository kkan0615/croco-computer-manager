export const DEFAULT_SNACKBAR_TIMEOUT = 2500

export interface SnackbarOption {
  content: string
  color: string
  callback?: Function
  timeout?: number
}
