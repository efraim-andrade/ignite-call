import { Box, Heading, styled, Text } from '@molao-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  padding: '0 $4',
  margin: '$20 auto $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    marginBottom: '$6',

    color: '$gray200',
  },
})

export const Form = styled(Box, {
  marginTop: '$6',

  display: 'flex',
  gap: '$4',
  flexDirection: 'column',

  label: {
    display: 'flex',
    gap: '$1',
    flexDirection: 'column',
  },
})
