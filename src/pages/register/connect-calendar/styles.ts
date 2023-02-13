import { Box, styled, Text } from '@molao-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',

  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  padding: '$4 $6',
  marginBottom: '$4',
  borderRadius: '$md',
  border: '1px solid $gray600',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const AuthError = styled(Text, {
  marginBottom: '$4',

  color: '#f75a68',
})
