import Image from 'next/image'

import { ButtonProps } from './types'

export function Button({
  children,
  icon = 'arrow-alt-right',
  ...props
}: ButtonProps) {
  const renderIcon = {
    downlong: '/icons/downlong.svg',
    'arrow-alt-right': '/icons/long-arrow-alt-right.svg',
  }

  return (
    <button
      className="button before:clip-path before:absolute before:-bottom-[5px] before:right-0 before:left-0 before:bg-black before:h-1"
      {...props}
    >
      <span className="text-base font-extrabold leading-[24px] tracking-[0.2px] uppercase text-bw-900">
        {children}
      </span>

      <Image
        src={renderIcon[icon]}
        alt="Seta apontando para o lado direito cor preta; Seta apontando para baixo cor cinza;"
        width={24}
        height={24}
      />
    </button>
  )
}
