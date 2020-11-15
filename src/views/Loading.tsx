import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '@/theme'
import HashLoader from 'react-spinners/HashLoader'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

interface Props {
  loading: boolean
}

export const Loading: FC<Props> = ({ loading }) => {
  return (
    <StyledBox>
      <HashLoader loading={loading} size={150} color="teal" />
    </StyledBox>
  )
}
