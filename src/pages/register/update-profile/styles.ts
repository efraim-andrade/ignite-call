import { Box, Text, styled } from "@molao-ui/react";

export const ProfileBox = styled(Box, {
  gap: '$4',
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',

  label: {
    gap: '$2',
    display: 'flex',
    flexDirection: 'column',
  }
})

export const FormAnnotation = styled(Text, {
  color: '$gray200'
})