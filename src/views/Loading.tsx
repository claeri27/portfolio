import React, { FC } from 'react'
import styled from 'styled-components'
import { Box } from '@/theme/material'
import HashLoader from 'react-spinners/HashLoader'

const StyledBox = styled(Box)`
  position: absolute;
  top: 40%;
  transition: opacity 3s ease-in-out;
`

interface Props {
  loading?: boolean
}

export const Loading: FC<Props> = ({ loading }) => {
  return (
    <StyledBox>
      <HashLoader loading={loading} size={150} color="teal" />
    </StyledBox>
  )
}
