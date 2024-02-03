import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Cartão',
}

interface GetDetailsParams {
  params: { id: string }
}

interface GetProductData {
  id: number
  name: string
  phone: string
  email: string
}

export async function getCard(id: string): Promise<GetProductData> {
  const response = await fetch(`http://localhost:3333/cards/${id}`)
  return response.json()
}

export default async function Details({ params }: GetDetailsParams) {
  const { id } = params

  const card = await getCard(id)

  const { name, phone, email } = card

  return (
    <section className="flex flex-col">
      <div className="flex flex-col items-center justify-between lg:flex-row md:gap-12">
        <Image
          src="/assets/landingpage.svg"
          alt="Homem em pé com fones de ouvido pintando a parede de amarela"
          width={400}
          height={335}
          className="hidden xl:w-[455px] xl:h-[335px] md:block animate-slider-left-to-right"
        />

        <div className="flex flex-col gap-6 animate-slider-right-to-left">
          <Link href="/" className="text-sm flex items-center gap-1 sm:text-xl">
            <Image
              src="/icons/chevron-left.svg"
              alt="Seta virada para esquerda, cor branca."
              width={16}
              height={16}
              className="sm:w-[20px] sm:h-[20px]"
            />
            Gerar outro cartão
          </Link>

          <div className="py-8 px-9 bg-white rounded-3xl flex items-center shadow-md sm:w-[470px] xl:w-[540px] sm:h-[247px] sm:px-[68px] lg:px-[72px]">
            <Image
              src="/assets/symbol-rd-station-default.svg"
              alt="Quatro retângulos 3D, nas cores roxa e preto."
              width={45}
              height={38}
              className="mr-10 md:w-[70px] md:h-[60px]"
            />

            <div className="w-full flex flex-col gap-6 relative before:absolute before:-top-2 before:-left-5 before:bg-brand-800 before:w-[3px] before:h-[calc(100%+16px)]">
              <span
                className="text-black text-sm sm:text-xl leading-[30px] line-clamp-1"
                title={name}
              >
                {name}
              </span>
              <span className="text-black text-sm sm:text-xl leading-[30px]">
                {phone}
              </span>
              <span
                className="text-black text-sm sm:text-xl leading-[30px] line-clamp-1"
                title={name}
              >
                {email}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <Button icon="downlong" rtl disabled>
              Baixar cartão
            </Button>

            <a
              href="https://app.rdstation.com.br/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 flex items-center justify-center gap-2 text-center"
            >
              <span className="uppercase w-[209px] text-sm font-extrabold tracking-[0.2px] leading-6 md:w-auto md:text-base">
                Fazer um teste grátis do RD Station Marketing
              </span>

              <Image
                src="/icons/long-arrow-alt-right-white.svg"
                alt="Seta da cor branca apontando para direita"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
