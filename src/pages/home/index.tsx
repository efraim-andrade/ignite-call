import { Heading, Text } from '@molao-ui/react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import previewImage from '~/assets/app-preview.png'
import { ClaimUsernameForm } from '~/pages/home/components/ClaimUsernameForm'

import * as S from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre"
      />

      <S.Container>
        <S.Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>

          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre
          </Text>

          <ClaimUsernameForm />
        </S.Hero>

        <S.Preview>
          <Image
            priority
            height="400"
            quality={100}
            src={previewImage}
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </S.Preview>
      </S.Container>
    </>
  )
}
