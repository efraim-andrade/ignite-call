import { styled, Heading, Text } from '@molao-ui/react'

export const Container = styled('div', {
  height: '100vh',
  marginLeft: 'auto',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',

  display: 'flex',
  gap: '$20',
  alignItems: 'center',
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    marginTop: '$2',

    color: '$gray200',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',

  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
