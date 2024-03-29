import { Button, Heading, MultiStep, Text } from '@molao-ui/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { ArrowRight, Check } from 'phosphor-react'
import { NextSeo } from 'next-seo'

import { Container, Header } from '../styles'
import * as S from './styles'

export default function ConnectCalendar() {
  const router = useRouter()
  const session = useSession()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    return await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  return (
    <>
      <NextSeo title="Conecte sua agenda do google | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Conecte sua agenda</Heading>

          <Text>
            Conecte o seu calendário para verificar automaticamente as horas
            ocupadas e os novos eventos à medida em que são agendados
          </Text>

          <MultiStep size={4} currentStep={2} />
        </Header>

        <S.ConnectBox>
          <S.ConnectItem>
            <Text>Google Agenda</Text>

            {isSignedIn ? (
              <Button size="sm" disabled>
                Conectado <Check />
              </Button>
            ) : (
              <Button
                size="sm"
                variant="secondary"
                onClick={handleConnectCalendar}
              >
                Conectar <ArrowRight />
              </Button>
            )}
          </S.ConnectItem>

          {hasAuthError && (
            <S.AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Agenda.
            </S.AuthError>
          )}

          <Button
            type="submit"
            disabled={!isSignedIn}
            onClick={handleNavigateToNextStep}
          >
            Próximo passo <ArrowRight />
          </Button>
        </S.ConnectBox>
      </Container>
    </>
  )
}
