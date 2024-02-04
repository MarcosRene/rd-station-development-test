'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { useErrors } from '@/hooks/useErrors'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Field } from '@/components/Field'

import formatPhone from '@/utils/formatPhone'
import isEmailValid from '@/utils/isValidEmail'

export default function Form() {
  const router = useRouter()
  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    setName(value)

    if (value.length <= 2) {
      setError({
        field: 'name',
        message: 'O nome precisa ter no mínino dois caracteres!',
      })
    } else {
      removeError('name')
    }
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value))
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'O email é inválido.' })
    } else {
      removeError('email')
    }
  }

  function clearFilters() {
    setName('')
    setPhone('')
    setEmail('')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const formData = {
        id: Math.floor(Math.random() * 1000000),
        name,
        phone,
        email,
      }

      const response = await fetch('http://localhost:3333/cards', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()

        router.push(`/${data.id}`)
      }

      clearFilters()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="mb-11 flex flex-col items-center gap-4 sm:mb-0 animate-slider-top-to-bottom">
        <h1 className="font-title font-bold text-2xl text-center sm:text-3xl lg:text-[40px] sm:leading-[50px]">
          Gerador de Cartão de Visita
        </h1>

        <span className="block w-[314px] text-base leading-[24px] text-center sm:text-xl sm:w-[600px]">
          Crie grátis seu cartão de visita em passos rápidos! Você o insere no
          Instagram e demais canais digitais.
        </span>
      </div>

      <div className="flex flex-col items-center gap-12 sm:mt-11 lg:flex-row lg:justify-between">
        <Image
          src="/assets/landingpage.svg"
          alt="Homem em pé com fones de ouvido pintando a parede de amarela"
          width={268}
          height={198}
          className="md:w-[400px] md:h-[374px] xl:w-[471px] animate-slider-left-to-right"
        />

        <form
          className="w-full sm:w-[620px] animate-slider-right-to-left"
          onSubmit={handleSubmit}
        >
          <Field label="Nome*" error={getErrorMessageByFieldName('email')}>
            <Input
              id="Nome*"
              placeholder="Nome"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Field>

          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
            <Field label="Telefone*">
              <Input
                id="Telefone*"
                placeholder="(88) 0 0000-0000"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={15}
                required
              />
            </Field>

            <Field label="Email*" error={getErrorMessageByFieldName('email')}>
              <Input
                id="Email*"
                placeholder="nome@email.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Field>
          </div>

          <div className="mb-8 text-xs leading-[18px]">
            <ul className="mb-6 ml-6 list-disc">
              <li>
                Ao preencher o formulário, concordo * em receber comunicações de
                acordo com meus interesses.
              </li>
              <li>
                Ao informar meus dados, eu concordo com a{' '}
                <a
                  href="https://legal.rdstation.com/pt/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Política de privacidade.
                </a>
              </li>
            </ul>

            <span>
              * Você pode alterar suas permissões de comunicação a qualquer
              tempo.
            </span>
          </div>

          <Button type="submit">Gerar Cartão Grátis</Button>
        </form>
      </div>
    </>
  )
}
