import { ButtonHTMLAttributes, ElementType } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'downlong' | 'arrow-alt-right'
  rtl?: boolean
}
