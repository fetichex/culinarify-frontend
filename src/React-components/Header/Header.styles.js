import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const Section = styled.div`
  ${mixin.flex('row', 'center', 'space-around')}
  max-width: 100%;
  height: 15vh;
  background-color: ${color.blue};
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${color.white};
  }
`
export const LinkContainer = styled(motion.div)`
  ${mixin.flex}
  cursor: pointer;
  width: 200px;
  height: 50px;
  border-radius: 1rem;
  background-color: ${color.beige};
`

export const BtnCreate = styled(NavLink)`
  ${mixin.flex}
  width: 200px;
  height: 40px;
`
export const Text = styled.p`
  margin: 0;
  color: ${color.blue};
  text-transform: uppercase;
`
