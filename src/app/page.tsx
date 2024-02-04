'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import * as yup from 'yup'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Field } from '@/components/Field'

import formatPhone from '@/utils/formatPhone'
import { getValidationErrors } from '@/utils/getValidationErrors'

import { FormData, ErrorHandlers } from './types'

const schemaFormData = yup.object().shape({
  name: yup
    .string()
    .min(2, 'O nome deve ter no mínimo dois caracteres.')
    .required('O nome é obrigatório.'),
  phone: yup.string().required('O telefone é obrigatório.'),
  email: yup
    .string()
    .email('O é email inválido.')
    .required('O email é obrigatório.'),
})

const initialFormState: FormData = {
  name: '',
  phone: '',
  email: '',
}

export default function Form() {
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>(initialFormState)
  const [errors, setErrors] = useState<ErrorHandlers>({})
  const [isInvalidFormData, setIsInvalidFormData] = useState(false)

  function handleFormDataChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target

    setFormData((prevFormDataState) => ({
      ...prevFormDataState,
      [name]: name === 'phone' ? formatPhone(value) : value,
    }))
  }

  function clearFields() {
    setFormData(initialFormState)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      schemaFormData.validateSync(formData, { abortEarly: false })

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

      clearFields()
    } catch (validationErrors) {
      setIsInvalidFormData(validationErrors?.inner?.length > 0)
      const newErrors = getValidationErrors(validationErrors)
      setErrors(newErrors)
    }
  }

  return (
    <>
      <div className="mb-11 flex flex-col items-center gap-4 sm:mb-0 animate-slider-top-to-bottom">
        <h1 className="font-title font-bold text-xl text-center xs:text-2xl md:text-3xl md:leading-[50px] lg:text-[40px]">
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

        <div className="w-full sm:w-[620px] animate-slider-right-to-left">
          <form
            className={`w-full ${isInvalidFormData && 'animate-shake'}`}
            onSubmit={handleSubmit}
          >
            <Field label="Nome*" error={errors?.name}>
              <Input
                id="Nome*"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleFormDataChange}
                data-error={errors?.name}
              />
            </Field>

            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
              <Field label="Telefone*" error={errors?.phone}>
                <Input
                  id="Telefone*"
                  name="phone"
                  placeholder="(88) 0 0000-0000"
                  value={formData.phone}
                  onChange={handleFormDataChange}
                  maxLength={15}
                  data-error={errors?.phone}
                />
              </Field>

              <Field label="Email*" error={errors?.email}>
                <Input
                  id="Email*"
                  name="email"
                  placeholder="nome@email.com"
                  value={formData.email}
                  onChange={handleFormDataChange}
                  data-error={errors?.email}
                />
              </Field>
            </div>

            <div className="mb-8 text-xs leading-[18px]">
              <ul className="mb-6 ml-6 list-disc">
                <li>
                  Ao preencher o formulário, concordo * em receber comunicações
                  de acordo com meus interesses.
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
      </div>
    </>
  )
}
