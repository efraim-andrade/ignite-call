import { Box, Text, styled } from '@molao-ui/react'

export const Container = styled(Box, {
  position: 'relative',

  display: 'grid',

  padding: 0,

  maxWidth: '100%',
  margin: '$6 auto 0',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media (max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6 $6 0',
  overflowY: 'scroll',

  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: 280,
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  marginTop: '$3',

  gap: '$2',
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
})

export const TimePickerItem = styled('button', {
  border: 0,
  padding: '$2 0',
  borderRadius: '$sm',

  fontSize: '$sm',
  color: '$gray100',
  cursor: 'pointer',
  lineHeight: '$base',
  backgroundColor: '$gray600',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    opacity: 0.4,
    cursor: 'default',
    background: 'none',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray500',
  },
})
