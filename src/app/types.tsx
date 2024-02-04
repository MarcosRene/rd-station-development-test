export type ErrorHandlers = Record<string, string>

export interface FormData {
  name: string
  phone: string
  email: string
}

export interface GetDetailsParams {
  params: { id: string }
}

export interface GetProductData {
  id: number
  name: string
  phone: string
  email: string
}
