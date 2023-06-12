import { Box, styled } from '@molao-ui/react'

export const Container = styled(Box, {
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: '1fr',

  padding: 0,
  width: 540,
  maxWidth: '100%',
  margin: '$6 auto 0',
})
