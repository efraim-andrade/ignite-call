import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@molao-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '~/lib/axios'

import * as S from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário precisa ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query?.username) {
      setValue('username', String(router.query?.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister({ name, username }: RegisterFormData) {
    try {
      await api.post('/users', {
        name,
        username,
      })
    } catch (error) {
      console.log('🚀 ~ handleRegister ~ error', error)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois
        </Text>

        <MultiStep size={4} currentStep={1} />
      </S.Header>

      <S.Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>

          <TextInput
            prefix="ignite.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />

          {!!errors.username && (
            <S.FormError size="sm">{errors.username.message}</S.FormError>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>

          <TextInput placeholder="Seu nome" {...register('name')} />

          {!!errors.name && (
            <S.FormError size="sm">{errors.name.message}</S.FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Próximo passo <ArrowRight />
        </Button>
      </S.Form>
    </S.Container>
  )
}
