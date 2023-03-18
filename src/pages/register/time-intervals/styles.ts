import { Box, styled } from '@molao-ui/react'

export const IntervalBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',
})

export const IntervalsContainer = styled('div', {
  borderRadius: '$md',
  marginBottom: '$4',
  border: '1px solid $gray600',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(30%) saturate(0%) ',
  },
})
