import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import color from '../../styles/variables.styles'

const mixinSize = css`
  width: 100%;
  height: 100vh;
`

const mixinFlex = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`

export const Title = styled.h1`
  color: ${color.blue};
  font-size: 9.5rem;
`

export const Container = styled.div`
  ${mixinFlex(null, null, 'space-between')}
  margin-inline: auto;
  width: 90%;
  height: 100vh;
`

export const LinkContainer = styled(motion.div)`
  ${mixinFlex()}
  cursor: pointer;
  width: 300px;
  height: 50px;
  border-radius: 1rem;
  transition: background-color 0.2s ease-in;
  border: 3px solid ${color.lightGreen};

  &:hover {
    transition: background-color 0.2s ease-in;
    background-color: ${color.lightGreen};
  }
`

export const GoToHome = styled(NavLink)`
  ${mixinFlex()}
`

export const Text = styled.p`
  margin: 0;
  color: ${color.blue};
  font-size: 1.8rem;
  text-transform: uppercase;
`

export const ImgContainer = styled.div`
  ${mixinSize}
  ${mixinFlex()}
  overflow: hidden;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const Main = styled.div`
  ${mixinSize}
  ${mixinFlex('column')}
`
