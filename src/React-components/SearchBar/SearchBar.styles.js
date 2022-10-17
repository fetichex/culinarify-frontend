import styled from 'styled-components'
import { motion } from 'framer-motion'
import color from '../../styles/variables.styles'

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
`

export const Input = styled.input`
  width: 25rem;
  height: 3rem;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  margin-left: 1rem;
`

export const SearchBtn = styled(motion.button)`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: ${color.beige};
  font-size: 1.5rem;
`
