import React, { FC, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Box, Fade } from '@/theme/material'
import { Loading } from '@/views'

const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`

export const Home: FC = () => {
  const [loading, setLoading] = useState(true)
  const { transitions } = useTheme()
  const { enter, exit } = transitions.loading.timeout

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), transitions.loading.in)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <Fade in={loading} timeout={{ enter, exit }}>
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      </Fade>
    </>
  )
}
