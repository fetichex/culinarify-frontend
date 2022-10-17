import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import color from '../../styles/variables.styles'
import { IoAlertCircleOutline } from 'react-icons/io5'
import mixin from '../../styles/mixins'
/* eslint-disable */
export const Inputs = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const Label = styled.label`
  font-size: 1.1rem;
  text-transform: capitalize;
`
export const DivTitle = styled.div`
  ${mixin.flex('column', 'flex-start', 'center')}
`
export const MessageContainer = styled.div`
  ${mixin.flex}
  padding: .3rem;
  width: auto;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid tomato;
  display: ${(props) => (props.display === 'hidden' ? 'none' : 'block')};
`
export const Message = styled.small`
  margin: 0;
  font-size: 1rem;
  color: tomato;
`
export const IconWarning = styled(IoAlertCircleOutline)`
  color: tomato;
  font-size: 1.2rem;
  margin-right: 0.5rem;
`

export const Title = styled.input`
  padding: 0.2rem;
  height: 40px;
  width: 320px;
  font-size: 1.1rem;
  outline: none;
  border: ${(props) =>
    props.error === 'hidden' ? '2px solid transparent' : '2px solid tomato'};
  border-radius: 5px;

  &:focus {
    border: 2px solid ${color.blue};
  }
`

export const DivHealth = styled.div`
  width: 100px;
  margin-left: 30px;
  ${mixin.flex('row', 'center', 'space-between')}
`

export const LabelHealth = styled(Label)`
  font-size: 0.8rem;
  line-height: 0.8rem;
`
export const Labeldiv = styled.div`
  width: 100px;
`
export const Health = styled.input`
  padding: 0.3rem;
  width: 55px;
  height: 40px;
  font-size: 1rem;
  border: ${(props) =>
    props.error === 'hidden' ? '2px solid transparent' : '2px solid tomato'};
  text-align: center;
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 2px solid ${color.blue};
  }
`

export const TextArea = styled.textarea`
  padding: 0.5rem;
  width: 450px;
  height: 90px;
  border: none;
  resize: none;
  outline: none;
  border-radius: 5px;
  border: ${(props) =>
    props.error && props.error === 'hidden'
      ? '2px solid transparent'
      : '2px solid tomato'};

  &:focus {
    border: 2px solid ${color.blue};
  }
`

export const Form = styled.form`
  margin-inline: auto;
  ${mixin.flex('column')}
  width: 30%;
  height: 100%;
  row-gap: 1rem;
`
export const CheckBox = styled.input`
  margin-right: 5px;
  width: 15px;
  height: 15px;
`

export const CheckBoxes = styled.div`
  ${mixin.flex('column', 'flex-start', 'space-evenly')}
  padding-left: 10px;
  width: 450px;
  height: 180px;
  flex-wrap: wrap;
`

export const Texts = styled.div`
  ${mixin.flex('column', 'flex-start', 'center')}
`
export const Buttons = styled.div`
  ${mixin.flex('column', 'center', 'space-between')}
  width: 100%;
  height: 100px;
  margin-top: 20px;
`
export const Button = styled(motion.button)`
  ${mixin.flex}
  cursor: pointer;
  width: 80%;
  height: 50px;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.disabled ? color.lightBlue : color.blue};
  border: none;
  color: ${color.white};
  font-size: 1.1rem;
`

export const LinkContainer = styled(motion.div)`
  ${mixin.flex}
  cursor: pointer;
  width: 30%;
  height: 30px;
  border: 2px solid tomato;
  border-radius: 0.5rem;
`

export const BtnCancel = styled(Link)`
  ${mixin.flex}
  width: 200px;
  height: 30px;
`
export const Text = styled(motion.p)`
  margin: 0;
  color: ${color.blue};
  font-size: 1.1rem;
`
