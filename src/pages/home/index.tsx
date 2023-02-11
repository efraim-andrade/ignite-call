import { Heading, Text } from '@molao-ui/react'
import Image from 'next/image'

import previewImage from '~/assets/app-preview.png'
import { ClaimUsernameForm } from '~/pages/home/components/ClaimUsernameForm'

import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          priority
          height="400"
          quality={100}
          src={previewImage}
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
