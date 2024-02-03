import { ReactNode } from 'react'

export interface FieldProps {
  error?: string
  children: ReactNode
  label: string
}
