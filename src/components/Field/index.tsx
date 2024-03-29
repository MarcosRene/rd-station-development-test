import { FieldProps } from './types'

export function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col mb-6 w-full">
      <label htmlFor={label} className="text-sm font-bold mb-3">
        {label}
      </label>

      {children}

      {!!error && (
        <span
          className="block mt-2 text-sm font-medium text-highlight-50"
          aria-labelledby="error"
        >
          {error}
        </span>
      )}
    </div>
  )
}
