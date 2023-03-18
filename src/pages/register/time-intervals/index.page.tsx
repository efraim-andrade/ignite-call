import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@molao-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Container, Header } from '../styles'
import * as S from './styles'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda</Heading>

        <Text>
          Defina o intervalo de horário que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <S.IntervalBox as="form">
        <S.IntervalsContainer>
          <S.IntervalItem>
            <S.IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </S.IntervalDay>

            <S.IntervalInputs>
              <TextInput size="sm" type="time" step={60} />

              <TextInput size="sm" type="time" step={60} />
            </S.IntervalInputs>
          </S.IntervalItem>
        </S.IntervalsContainer>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </S.IntervalBox>
    </Container>
  )
}
