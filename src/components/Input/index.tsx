import { InputProps } from './types'

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="w-full bg-white py-2 px-3 text-sm text-bw-700 placeholder-bw-700"
      {...props}
    />
  )
}
