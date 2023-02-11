import { Box, styled } from '@molao-ui/react'

export const Form = styled(Box, {
  padding: '$4',
  marginTop: '$4',

  display: 'grid',
  gap: '$2',
  gridTemplateColumns: '1fr auto',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})
