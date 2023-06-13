import { Box, Text, styled } from '@molao-ui/react'

export const ConfirmForm = styled(Box, {
  gap: '$4',
  display: 'flex',
  flexDirection: 'column',

  maxWidth: 540,
  margin: '$6 auto 0',

  label: {
    gap: '$2',
    display: 'flex',
    flexDirection: 'column',
  },
})

export const FormHeader = styled('div', {
  gap: '$4',
  display: 'flex',
  alignItems: 'center',

  marginBottom: '$2',
  paddingBottom: '$6',
  borderBottom: '1px solid $gray600',

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    svg: {
      width: '$5',
      height: '$5',

      color: '$gray200',
    },
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',

  marginTop: '$2',
})
