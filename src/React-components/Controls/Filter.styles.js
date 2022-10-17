import styled from 'styled-components'
import mixin from '../../styles/mixins'

export const Label = styled.label`
  font-size: 1.1rem;
  text-transform: capitalize;
`

export const CheckBox = styled.input`
  margin-right: 5px;
  width: 15px;
  height: 15px;
`

export const CheckBoxes = styled.div`
  padding-inline: 50px;
  width: 100%;
  height: auto;
  ${mixin.flex('column', 'flex-start', 'center')}
`
