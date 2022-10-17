import styled from 'styled-components'
import mixin from '../../styles/mixins'
import color from '../../styles/variables.styles'

export const Container = styled.div`
  ${mixin.flex}
  width: 100%;
  height: 100vh;
`

export const Loader = styled.span`
  font-size: 10rem;
  color: ${color.blue};
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  position: relative;

  &:after {
    content: '';
    height: 10px;
    width: 0%;
    display: block;
    background: tomato;
    animation: 5s lineGrow linear infinite;
  }

  @keyframes lineGrow {
    to {
      width: 100%;
    }
  }
`
