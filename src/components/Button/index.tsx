import Image from 'next/image'

import { ButtonProps } from './types'

export function Button({ children, icon, rtl = false, ...props }: ButtonProps) {
  const renderIcon = {
    downlong: '/icons/downlong.svg',
    'arrow-alt-right': '/icons/long-arrow-alt-right.svg',
  }

  return (
    <button
      className={`button ${
        rtl ? 'flex-row-reverse' : 'flex-row'
      } before:clip-path before:absolute before:-bottom-[4px] before:right-0 before:left-0 before:h-1 before:bg-black before:disabled:bg-bw-600 md:-bottom-[5px]`}
      {...props}
    >
      {children}

      <Image
        src={renderIcon[icon ?? 'arrow-alt-right']}
        alt="Seta apontando para o lado direito cor preta; Seta apontando para baixo cor cinza;"
        width={24}
        height={24}
      />
    </button>
  )
}
