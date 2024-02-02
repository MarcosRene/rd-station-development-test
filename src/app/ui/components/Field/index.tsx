import { FieldProps } from './types'

export function Field({ label, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <label htmlFor={label} className="text-sm font-bold">
        {label}
      </label>

      {children}
    </div>
  )
}
