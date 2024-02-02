import type { Metadata } from 'next'

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
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
