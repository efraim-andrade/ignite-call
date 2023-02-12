import { Box, styled } from '@molao-ui/react'

export const ConnectBox = styled(Box, {
  marginTop: '$6',

  display: 'flex',
  flexDirection: 'column',
})

export const ConnectItem = styled('div', {
  padding: '$4 $6',
  marginBottom: '$2',
  borderRadius: '$md',
  border: '1px solid $gray600',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
