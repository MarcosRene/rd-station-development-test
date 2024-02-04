import { InputProps } from './types'

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="w-full bg-white py-2 px-3 text-sm text-bw-700 placeholder-bw-700 outline-transparent [outline-style:solid] focus:outline-2 focus:outline-highlight-0 data-[error]:outline-2 data-[error]:outline-highlight-0"
      {...props}
    />
  )
}
