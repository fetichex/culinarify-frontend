import styled from 'styled-components'
import { motion } from 'framer-motion'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const Paginator = styled.div`
  ${mixin.flex};
  width: 400px;
  height: 50px;
  margin: 30px 0;
  gap: 10px;
`

export const Button = styled(motion.button)`
  cursor: pointer;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.active === 'active' ? color.beige : color.blue)};
  background-color: ${(props) =>
    props.active === 'active' ? color.blue : 'transparent'};
`

export const ButtonArrow = styled(Button)`
  color: ${color.beige};
  background-color: ${(props) =>
    props.disabled ? color.lightBlue : color.blue};
`
