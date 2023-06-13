import React from 'react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { Button, Text, TextArea, TextInput } from '@molao-ui/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  observations: z.string().optional(),
})

type ConfirmFormDataType = z.infer<typeof confirmFormSchema>

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormDataType>({
    resolver: zodResolver(confirmFormSchema),
  })

  function handleConfirmScheduling(data: ConfirmFormDataType) {
    console.log('🚀 ~ handleConfirmScheduling ~ data:', data)
  }

  return (
    <S.ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <S.FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>

        <Text>
          <Clock />
          18:00h
        </Text>
      </S.FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>

        <TextInput placeholder="Seu nome" {...register('name')} />
        {errors.name && (
          <S.FormError size="sm">{errors.name.message}</S.FormError>
        )}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>

        <TextInput
          type="email"
          placeholder="johndoe@example.com"
          {...register('email')}
        />
        {errors.email && (
          <S.FormError size="sm">{errors.email.message}</S.FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>

        <TextArea {...register('observations')} />
        {errors.observations && (
          <S.FormError size="sm">{errors.observations.message}</S.FormError>
        )}
      </label>

      <S.FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </S.FormActions>
    </S.ConfirmForm>
  )
}
