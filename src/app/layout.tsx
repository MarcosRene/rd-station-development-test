import type { Metadata } from 'next'
import Image from 'next/image'

import '@/app/ui/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Gerador de Cartão de Visita',
    default: 'Gerador de Cartão de Visita',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-6 bg-white flex items-center justify-between md:py-6 md:px-20">
          <Image
            src="/logo-rd-station-default.svg"
            alt="Quatro retângulos 3D cor preta e roxa; Seguido de um texto: Resultados digitais em caixa alta e cor preta"
            width={100}
            height={24}
            className="md:w-[147px] md:h-[36px]"
          />
          <h4 className="text-bw-900 text-lg leading-tight font-bold md:text-2xl">
            Gerador de Cartão de Visita
          </h4>
        </header>
        <main className="h-full py-[54px] px-6 md:py-[72px] md:px-20">
          {children}
        </main>
        <footer className="px-5 py-4 bg-bw-100 flex justify-center gap-4 md:py-6 md:px-20">
          <span className="underline text-sm font-bold text-bw-900">
            Política de Privacidade
          </span>
          <span className="text-bw-900 text-sm">
            © 2023 Resultados Digitais
          </span>
        </footer>
      </body>
    </html>
  )
}
