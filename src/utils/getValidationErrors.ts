import { ErrorHandlers } from '@/app/types'

export function getValidationErrors(validationErrors: unknown) {
  return (
    validationErrors?.inner?.reduce(
      (acc: ErrorHandlers, error: ErrorHandlers) => {
        acc[error.path] = error.message
        return acc
      },
      {}
    ) || {}
  )
}
